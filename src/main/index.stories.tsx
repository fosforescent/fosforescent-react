import React from 'react'
// import WorkflowComponent from './workflow'
// import { getExampleRoot } from '../../lib/fos/demo/example-workflows'

export default {
  // component: div,
  title: 'Workflow',
}

const Template = (args: any) => {
  // const [_, node] = getExampleRoot().getTask(args.workflowName)
  // const [ct, setCt] = React.useState(0)
  // const view = getExampleRoot().getEdgeType('workflow')

  // const forceUpdate = () => setCt(ct + 1)

  return (
    // <WorkflowComponent node={node} edge={view} path={[[view, node]]} forceUpdate={forceUpdate} />
    <div>{args.workflowName}</div>
  )
}

export const CarrotDinner = Template.bind({})
CarrotDinner.args = {
  workflowName: 'carrot-dinner',
}

export const Lasagna = Template.bind({})
Lasagna.args = {
  workflowName: 'lasagna',
}
