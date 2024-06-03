import { FosContext, FosPath, FosNode, FosTrail, FosRoute, FosNodeData } from "@fosforescent/fosforescent-js"

export const suggestSteps = async (
  promptGPT: (systemPrompt: string, userPrompt: string, options?: { temperature?: number | undefined; }) => Promise<{
    choices: {message: {
      role: string, content: string
    }, finishReason: string}[]
  }>,
  node: FosNode,
  ) => {
  const trail = node.getRoute()
  const [root, ...trailWithoutRoot] = trail
  const token = localStorage.getItem('token')

  const {
    description,
    content  
  } = node.getOptionContent()
  

  const descriptions = trailWithoutRoot.map((edge: [string, string], index: number) => {
    const route: FosRoute = [root, ...trailWithoutRoot.slice(0, index + 1)]
    const thisNode = node.context.getNode(route)
    const thisNodeOptionContent = thisNode.getOptionContent()
    return thisNodeOptionContent.description
  })
    
  const [mainTask, ...contextTasks] = descriptions.slice().reverse()

  const systemPrompt = `You are part of a group of workers building a tree of subtasks to describe a project, which may be big or small.  As such, you do not provide information that is not directly related to the subtask at hand because it will probably be provided by another worker`

  const promptIntro = `PLEASE OUTPUT SINGLE VALID JSON ARRAY OF STRINGS < 50 CHARS PER ENTRY.  `

  const promptBody = `Please create 3-7 subtasks of the following task: ${mainTask}.  For context, this is a subtask of ${contextTasks.join(' subtask of the task ')}.  Please do not provide subtasks which are likely included in other branches.  If necessary, group information into a single subtask`

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
  const taskSets = messages.map((message: string) => {
    const messageMatch = message.match(/.*(\[[^\][]*\]).*/m)
    if (!messageMatch || !messageMatch[1]) {
      throw new Error(`Could not parse response: ${message}`)
    }
    return JSON.parse(messageMatch[1])
  })

  if (taskSets.length === 0) {
    console.log('messages', messages)
    throw new Error(`No task sets found`)
  }
  
  if (taskSets.length > 1) {
    console.warn(`More than one task set found`, messages)
  }

  const newTasks = taskSets[0]

  const newNodeItems = newTasks.map((task: string) => {
    const newNodeData: FosNodeData = {
    description: `${description}: ${task}`,
    selectedOption: 0,
    collapsed: false,
    options: [{
      description: task,
      data: {},
      content: []
    }],
    }
    return newNodeData
  })

 
  console.log('suggestion1')
  const nodeData = node.getNodeData()

  if (content.length > 0){
    // add new tasks to new option
    console.log('suggestion1')


    const newContext = node.context.addOptionToNode(node.getRoute(), { description, data: {}, content: [] });
    const addChildrenIndex = nodeData.options.length


    const newNode = newContext.getNode(node.getRoute())
    const newNodeData = newNode.getNodeData()

    newNode.setNodeData({
      ...newNodeData, 
      selectedOption: addChildrenIndex
    })

  }


  const newContext = node.context.addChildrenToNode(node, newNodeItems)
  // newContext.setNodes(newContext.data.nodes)
  return [newContext, null]
  // return [newContext, newSubscriptionData]
}