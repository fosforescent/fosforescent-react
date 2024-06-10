import { FosPath, FosTrail, FosRoute, IFosNode, FosNodeContent} from "@fosforescent/fosforescent-js"

import { suggestOption } from "./suggestOption"
import { suggestSteps } from "./suggestSteps"

import { setCostInfo, getCostInfo } from "@/components/fos/modules/cost" 
import { setDurationInfo, getDurationInfo } from "@/components/fos/modules/duration"



export const suggestMagic = async (
  promptGPT: (systemPrompt: string, userPrompt: string, options?: { temperature?: number | undefined; }) => Promise<{
    choices: {message: {
      role: string, content: string
    }, finishReason: string}[]
  }>,
  node: IFosNode,
  ) => {
  const trail = node.getRoute()
  const [root, ...trailWithoutRoot] = trail

  

  const descriptions = trailWithoutRoot.map((edge: [string, string], index: number) => {
    const route: FosRoute = [root, ...trailWithoutRoot.slice(0, index + 1)]
    const thisNode = node.context.getNode(route)
    const thisNodeOptionContent = thisNode.getOptionContent()
    return thisNodeOptionContent.description
  })

  const getChildTimes = async (node: IFosNode, index: number, parentDescriptions: string[], options?: { temperature?: number | undefined; }): Promise<FosContext> => {
    const nodeContent = node.getOptionContent(index)
    const children = node.getChildren(index)

    if (children.length === 0) {
          let thisContext: FosContext = node.context;
          let systemPrompt: string;
          let userPrompt: string;
          const keys: (keyof FosNodeContent['data'])[] = ["duration"]
          keys.forEach(async (resourceName: keyof FosNodeContent['data']) => {
              
          if (!nodeContent.data?.[resourceName]){
      
              switch(resourceName) {
              case 'cost':
                systemPrompt = `Take a deep breath.  Please respond only with a single valid JSON object with the key "cost" and a number value`
                userPrompt = `How much does it cost to ${nodeContent.description} in the as a subtask of ${parentDescriptions.join(' subtask of the task ')}`
                break;
              case 'duration': 
                systemPrompt = `Take a deep breath.  Please respond only with a single valid JSON object with the optional keys "milliseconds", "seconds", "minutes", "hours", "days", "weeks", "months", or "years" and a number value`
                userPrompt = `How long does it take to ${nodeContent.description} in the as a subtask of ${parentDescriptions.join(' subtask of the task ')} please express in terms of milliseconds, seconds, minutes, hours, days, weeks, months, or years.`
                break;

            }

            const response: any = await promptGPT(systemPrompt, userPrompt).catch((error: Error) => {
              console.log('error', error)
              throw new Error('error getting suggestions')
            });

            const results = response.choices.map( (choice: {message: {content: string }}) => {
              
              const messageMatch = choice.message.content.match(/.*(\{[^{}]*\}).*/m)
              if (!messageMatch || !messageMatch[1]) {
                throw new Error(`Could not parse response: ${choice.message.content}`)
              }
              return JSON.parse(messageMatch[1])
            }) 


            const resultParsed = results[0]

            switch (resourceName) {
              case 'duration':
                thisContext = setDurationInfo(thisContext.getNode(node.getRoute()), { marginal: parseTime(resultParsed) })
                break;

            }
          }

        });

        return thisContext
 
    } else {



        let thisContext: FosContext = node.context;
        let systemPrompt;
        let userPrompt;

        const keys: (keyof FosNodeContent['data'])[] = ["duration"]
        keys.forEach(async (resourceName: keyof FosNodeContent['data']) => {

          for (const child of children) {

            const itemNodeData = child.getNodeData()
            const itemOptions = itemNodeData.options

            itemOptions.forEach(async (option: FosNodeContent, j: number) => {
      
              const childOfNewContext = thisContext.getNode(child.getRoute())
              thisContext = await getChildTimes(childOfNewContext, j, [...parentDescriptions, option.description])

            })
          }

          const thisNodeWithTimesContext = thisContext.getNode(node.getRoute())


          if (!nodeContent.data?.[resourceName]){

            const durationInfo = getDurationInfo(thisNodeWithTimesContext)

            let systemPrompt: string;
            let userPrompt: string;

            switch(resourceName) {
              case 'duration': 
                systemPrompt = `Take a deep breath.  Please respond only with a single valid JSON object with the optional keys "milliseconds", "seconds", "minutes", "hours", "days", "weeks", "months", or "years" and a number value`
                userPrompt = `How long does it take to ${nodeContent.description} in the as a subtask of ${parentDescriptions.join(' subtask of the task ')} please express in terms of milliseconds, seconds, minutes, hours, days, weeks, months, or years., but factoring out the time of its subtasks, which are estimated to take somewhere between ${durationInfo.min} and ${durationInfo.max}, averaging ${durationInfo.average}. This will leave only the marginal time, which is the information we want.`
                break;
              default:
                throw new Error(`Resource ${resourceName} not recognized`)
            }

                  
            const response: any = await promptGPT(systemPrompt, userPrompt).catch((error: Error) => {
              console.log('error', error)
              throw new Error('error getting suggestions')
            });

            const results = response.choices.map( (choice: {message: {content: string }}) => {
              
              const messageMatch = choice.message.content.match(/.*(\{[^{}]*\}).*/m)
              if (!messageMatch || !messageMatch[1]) {
                throw new Error(`Could not parse response: ${choice.message.content}`)
              }
              return JSON.parse(messageMatch[1])
            }) 


            const resultParsed = results[0]

            switch (resourceName) {

              case 'duration':
                thisContext = setDurationInfo(thisContext.getNode(node.getRoute()), { marginal: parseTime(resultParsed) })
                break;

            }
    

        } 
      });


      if (getDurationInfo(thisContext.getNode(node.getRoute())).average > (30 * 60 * 1000)) {

        // suggest steps

        const [ newContext, _ ] = await suggestSteps(promptGPT, node)

        if(!newContext) {
          throw new Error('error getting suggestions')
        }

        const newNodeWithSuggestedSteps = newContext.getNode(node.getRoute())
        
        const numOptions = newNodeWithSuggestedSteps.getNodeData().options.length

        thisContext = newContext

        for (const i of Array(numOptions).keys()) {
          const currentNode = thisContext.getNode(node.getRoute())
          
          const [newContextWithOption, _] = await suggestOption(promptGPT, currentNode)
          if (!newContextWithOption) {
            throw new Error('error getting suggestions')
          }
          thisContext = newContextWithOption

        }

        thisContext = await getChildTimes(node, index, parentDescriptions)

        // if length of option is less than 3, suggest options until there are 3


      }

      return thisContext
      
    }
  }

  const contextWithTimes: FosContext = await getChildTimes(node, node.getNodeData().selectedOption, descriptions)

  return contextWithTimes

}

const parseTime = (time: {milliseconds?: number, seconds?: number, minutes?: number, hours?: number, days?: number, weeks?: number, months?: number, years?: number}) => {
  // turn object into int number of milliseconds
  const milliseconds = time.milliseconds || 0
  const seconds = (time.seconds || 0) * 1000
  const minutes = (time.minutes || 0) * 60 * 1000
  const hours = (time.hours || 0) * 60 * 60 * 1000
  const days = (time.days || 0) * 24 * 60 * 60 * 1000
  const weeks = (time.weeks || 0) * 7 * 24 * 60 * 60 * 1000
  const months = (time.months || 0) * 30 * 24 * 60 * 60 * 1000
  const years = (time.years || 0) * 365 * 24 * 60 * 60 * 1000
  return milliseconds + seconds + minutes + hours + days + weeks + months + years
}