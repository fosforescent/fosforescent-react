import { FosPath, IFosNode, FosTrail, FosRoute, FosNodeContent } from "@fosforescent/fosforescent-js"

export const suggestOption = async (
  promptGPT: (systemPrompt: string, userPrompt: string, options?: { temperature?: number | undefined; }) => Promise<{
    choices: {message: {
      role: string, content: string
    }, finishReason: string}[]
  }>,
  node: IFosNode,
  ) => {



  const past = node.getAncestors().reverse().map(([node, number], index) => {
    return node
  })

  

  const descriptions = past.map((node, index: number) => {
    const data = node.getData();
    return data.description?.content
  })
  
  const getOptionDescriptions = (node: IFosNode) => {
    if (node.getNodeType() === 'option') {

      const children = node.getChildren()
      const childDescriptions = children.map((child) => {
        return child.getData().description?.content
      })
      return childDescriptions

    } else if (node.getNodeType() === 'task') {
      return [node.getData().description?.content || ""]
    } else {
      throw new Error('node must be a task or option')
    }
  }
  const optionDescriptions = getOptionDescriptions(node)
  

  const [mainTask, ...contextTasks] = descriptions.slice().reverse()

  const systemPrompt = `You are part of a group of workers building a tree of subtasks to describe a project, which may be big or small.  As such, you do not provide information that is not directly related to the subtask at hand because it will probably be provided by another worker`

  const promptIntro = `PLEASE OUTPUT A SINGLE VALID JSON OBJECT INCLUDING: (1) THE key "description" WITH A DESCRIPTION OF THE NEW ALTERNATIVE TASK  (2) THE KEY "steps" WITH AN ARRAY OF STRINGS < 50 CHARS PER ENTRY REPRESENTING THE NEW TASK'S SUBTASKS.`

  const promptBody = `Please create an alternative task to the following tasks which serves the same purpose within its larger context: ${JSON.stringify(optionDescriptions)}.  For context, these are options of a subtask of ${contextTasks.join(' subtask of the task ')}.  Please be specific, representing a true alternative, not just an abstraction or restatement of the task.  Stop and consider "why would someone be doing this?" and then come up with another way to achieve that goal.  If there are already multiple existing alternatives, feel free to get creative and think outside the box.  `

  const promptConclusion = `Please output only single json array containing only strings.`

  const userPrompt = `${promptIntro} ${promptBody} ${promptConclusion}`

  console.log("PROMPT", userPrompt, systemPrompt)

  
  const response: any = await promptGPT(systemPrompt, userPrompt).catch((error: Error) => {
    console.log('error', error)
    throw new Error('error getting suggestions')
  });

  // const newSubscriptionData = response.subscriptionData


  // const response = {
  //   "id": "chatcmpl-8u1eZoEtgdhgl5jP5ntJELW7dFukJ",
  //   "object": "chat.completion",
  //   "created": 1708363415,
  //   "model": "gpt-3.5-turbo-1106",
  //   "choices": [
  //       {
  //           "index": 0,
  //           "message": {
  //               "role": "assistant",
  //               "content": "```json\n[\"Create user interface\", \"Implement backend logic\", \"Test new option functionality\"]\n```"
  //           },
  //           "logprobs": null,
  //           "finish_reason": "stop"
  //       }
  //   ],
  //   "usage": {
  //       "prompt_tokens": 150,
  //       "completion_tokens": 20,
  //       "total_tokens": 170
  //   },
  //   "system_fingerprint": "fp_840d6af8ef"
  // }

  const messages = response.choices.map( (choice: {message: {content: string }}) => choice.message.content) 

  console.log('messages', messages)
  const alternativeList = messages.map((message: string) => {
    const messageMatch = message.match(/.*(\{[^{}]*\}).*/m)
    if (!messageMatch || !messageMatch[1]) {
      throw new Error(`Could not parse response: ${message}`)
    }
    return JSON.parse(messageMatch[1])
  })

  const alternative = alternativeList[0]

  console.log('alternative', alternative, alternativeList)

  if( alternativeList.length > 1) {
    console.warn(`More than one alternative found`, alternativeList)
  }

  if (!alternative.description) {
    console.log('messages', messages)
    throw new Error(`No description found`)
  }
  
  if (!alternative.steps || alternative.steps.length === 0) {
    console.warn(`No steps found for task`, messages)
    throw new Error(`No steps found for task`)
  }



  const newNodeItems: FosNodeContent[] = alternative.steps.map((task: string) => {
    const newNodeData: FosNodeContent = {
      data: {
        description: {
          content: `generated step for ${alternative.description}: ${task}`,
        }
      },
      content: []
    }
    return newNodeData
  })

 
  console.log('suggestion1')
  const nodeData = node.getData()


  const child = node.newChild()

  const newChildData = child.getData()

  const newData = {
    ...newChildData,
    description: {
      content: alternative.description
    }
  }

  child.setData(newData)


  return
}