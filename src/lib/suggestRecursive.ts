import { FosContext, FosPath, FosNode, FosTrail, FosRoute, FosNodeData, FosNodeContent} from "@/fos/temp-types"


export const suggestRecursive = async <T, S>(
    promptGPT: (systemPrompt: string, userPrompt: string, options?: { temperature?: number | undefined; }) => Promise<{
      choices: {message: {
        role: string, content: string
      }, finishReason: string}[]
    }>,
    node: FosNode,
    {
      pattern, 
      parsePattern,
      systemPromptBase,
      getUserPromptBase,
      systemPromptRecursive,
      getUserPromptRecursive,
      getResourceInfo,
      setResourceInfo,
      checkResourceInfo
    } : {
      pattern: RegExp,
      parsePattern: (response: string, node: FosNode) => S,
      systemPromptBase: string,
      getUserPromptBase: (nodeDescription: string, parentDescriptions: string[], node: FosNode) => string,
      systemPromptRecursive: string,
      getUserPromptRecursive: (nodeDescription: string, parentDescriptions: string[], node: FosNode) => string,
      getResourceInfo: (node: FosNode) => T,
      setResourceInfo: (node: FosNode, resourceInfo: S) => FosContext,
      checkResourceInfo: (node: FosNode) => boolean
    }
  ) => {
  const trail = node.getRoute()
  const [root, ...trailWithoutRoot] = trail

  console.log('starting to suggest', node.getRoute(), node.context)

  const descriptions = trailWithoutRoot.map((edge: [string, string], index: number) => {
    const route: FosRoute = [root, ...trailWithoutRoot.slice(0, index + 1)]
    const thisNode = node.context.getNode(route)
    const thisNodeOptionContent = thisNode.getOptionContent()
    return thisNodeOptionContent.description
  })

  const getChildTimes = async (node: FosNode, index: number, parentDescriptions: string[]): Promise<FosContext> => {
    const nodeContent = node.getOptionContent(index)
    const children = node.getChildren(index)

    console.log('getChildTimes', node.getRoute(), node.getData(), node.context)

    if (children.length === 0) {

      

      const resourceInfo = checkResourceInfo(node)
      console.log('resourceInfo', resourceInfo)

      if (!resourceInfo){
  
        let thisContext: FosContext = node.context;


        const systemPrompt = systemPromptBase
        const userPrompt = getUserPromptBase(nodeContent.description, parentDescriptions, node)

        console.log('systemPrompt', systemPrompt, userPrompt)
        if (!systemPrompt || !userPrompt) throw new Error('missing prompt');

        const response: any = await promptGPT(systemPrompt, userPrompt).catch((error: Error) => {
          console.log('error', error)
          throw new Error('error getting suggestions')
        });

        const results = response.choices.map( (choice: {message: {content: string }}) => {
          
          const messageMatch = choice.message.content.match(pattern)
          if (!messageMatch || !messageMatch[1]) {
            throw new Error(`Could not parse response: ${choice.message.content}`)
          }
          return JSON.parse(messageMatch[1])
        }) 


        const resultParsed = results[0]

        const updatedNode = thisContext.getNode(node.getRoute())

        thisContext = setResourceInfo(updatedNode, parsePattern(resultParsed, updatedNode))

        return thisContext
      } else {
        return node.context
      }

    } else {

        let thisContext: FosContext = node.context;
  
        for (const child of children) {

          const itemNodeData = child.getNodeData()
          const itemOptions = itemNodeData.options
          let j = 0;
          for (const option of itemOptions) {
            const childOfNewContext = thisContext.getNode(child.getRoute())
            thisContext = await getChildTimes(childOfNewContext, j++, [...parentDescriptions, option.description])
          }
        }

        const thisNodeWithTimesContext = thisContext.getNode(node.getRoute())

        const resourceInfo = checkResourceInfo(thisNodeWithTimesContext)

        console.log('resourceInfo', resourceInfo)

        if (!resourceInfo){

          const systemPrompt = systemPromptRecursive
          const userPrompt = getUserPromptRecursive(nodeContent.description, parentDescriptions, thisNodeWithTimesContext)
  
          console.log('systemPrompt', systemPrompt, userPrompt)
          if (!systemPrompt || !userPrompt) throw new Error('missing prompt');
                
          const response: any = await promptGPT(systemPrompt, userPrompt).catch((error: Error) => {
            console.log('error', error)
            throw new Error('error getting suggestions')
          });

          const results = response.choices.map( (choice: {message: {content: string }}) => {
          
          const messageMatch = choice.message.content.match(pattern)
          if (!messageMatch || !messageMatch[1]) {
            throw new Error(`Could not parse response: ${choice.message.content}`)
          }
          return JSON.parse(messageMatch[1])
        }) 


        const resultParsed = results[0]

        const updatedNode = thisContext.getNode(thisNodeWithTimesContext.getRoute())
        
        thisContext = setResourceInfo(thisContext.getNode(updatedNode.getRoute()), parsePattern(resultParsed, updatedNode))

  
        return thisContext
      } 
      
      return thisContext
      
    }
  }

  const contextWithTimes: FosContext = await getChildTimes(node, node.getNodeData().selectedOption, descriptions)

  console.log('contextWithTimes', contextWithTimes.data.nodes)

  return contextWithTimes

}

