import React from 'react'
import {Meta, StoryFn} from "@storybook/react";

import Main from '@/components/fos'
import {ReactViewOptions, useFos} from '@/components/fos/client'
import { FosOptions } from 'fosforescent-js';

export default {
  // component: div,
  title: 'Workflow',
} as Meta;

interface TplProps {
  workflowName: string
}

const Template: StoryFn<TplProps> = (args: any) => {
  // const [_, node] = getExampleRoot().getTask(args.workflowName)
  // const [ct, setCt] = React.useState(0)
  // const view = getExampleRoot().getEdgeType('workflow')

  // const forceUpdate = () => setCt(ct + 1)

  const options: FosOptions = {}
  const fos = useFos(options)
  const interpreter = fos.getRoot()

  return (
    <div>
      {args.workflowName}
      <Main path={[]} storeData='' options={{}} />
    </div>
    // <WorkflowComponent node={node} edge={view} path={[[view, node]]} forceUpdate={forceUpdate} />
  )
}


export const WithDemo = Template.bind({})
WithDemo.args = {
  workflowName: 'with-demo',
}

export const WithoutDemo = Template.bind({})
WithDemo.args = {
  workflowName: 'without-demo',
}