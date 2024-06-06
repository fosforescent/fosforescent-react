import React, { ReactElement, useEffect, useState } from 'react'
import { QuestionMarkCircledIcon, MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import { BrainCircuit } from 'lucide-react'

// import { TreeIcon } from '@radix-ui/react-icons'
import {  FosContext, FosTrail, FosNode, FosPath } from "@fosforescent/fosforescent-js"

import { Button } from '../ui/button';
import { Input } from '../ui/input';

import { RowsComponent } from './rows';

import { suggestSteps } from '@/lib/suggestSteps'

import { useWindowSize } from '../window-size';
import { MergeRowsComponent } from './mergeRows';
import { ComboboxOptionsMerge } from '../combobox/comboboxOptionsMerge';
import { FosReactOptions } from '../fos';
import { FosModule } from '../fos/modules/fosModules';


export function MergeScreenView({
  context,
  // updateNodes,
  node,
  
  // updateNodes,
  dragging,
  dragOverInfo,
  // trail,
  // updateTrail,
  options,
}: {
  context: FosContext,
  // updateNodes: (nodes: any) => void,
  node: FosNode,
  // updateNodes: (nodes: FosContext) => void
  dragOverInfo: { id: string, position: 'above' | 'below' | 'on', node: FosNode } | null,

  dragging:  { id: string, node: FosNode } | null
  options: FosReactOptions,
  // trail: FosTrail
  // updateTrail: (trail: FosTrail) => void
}) {



  const rows = node.getChildren()

  // console.log('root - node', node, context)
  // const value = nodes[leftNode]?.value



  const windowSize = useWindowSize()

  const rowDepth = React.useMemo(() => {
    if (windowSize.width !== undefined){
      return Math.floor( (windowSize.width - 500 )/ 100) 
      // return 1
    } else {
      return 0
    }
  }, [windowSize])
  // console.log('rowDepth', rowDepth)
  // console.log('screen items', )
  // console.log('screen', leftNode, rightNode, trail, nodes, dragging)
  
  return (<div>
    {node.getRoute().length > 1 && (<div style={{padding: '15px 0px'}}>
      <MergeScreenHead node={node} context={context} options={options} />
        {/* <AddOption /> */}
    </div>)}
    <div>
      {node.hasMerge() 
        ? <MergeRowsComponent rowDepth={rowDepth} context={context} dragging={dragging} parentNode={node} dragOverInfo={dragOverInfo} locked={context.locked} options={options} />
        : <RowsComponent rows={rows} rowDepth={rowDepth} context={context} dragging={dragging} parentNode={node} dragOverInfo={dragOverInfo} locked={context.locked} options={options} />}
    </div>


      {/* {node.data.duration && <GanttComponent root={node} />} */}
      {/* <DataComponent node={node} trail={trail} forceUpdate={forceUpdate} /> */}
      {/* {node.data.cost && <CostComponent root={node} forceUpdate={forceUpdate} />} */}
  </div>)

}





export const MergeScreenHead = ({  
  node,
  context,
  options

}: {
  node: FosNode,
  context: FosContext,
  options: FosReactOptions
}) => {


  /**
   * 
   * Validate value before showing
   * 
   * If value has native value, then apply appropriately to component
   */

  const [showActions, setShowActions] = React.useState(false)

  const changeName = (name: string) => {
    console.log('changeName', name)
  }
  

   
  
  // console.log('canSuggest', canSuggest, appState.info.subscription?.apiCallsAvailable, appState.info.subscription?.apiCallsUsed, appState.info.subscription, appState.info, appState)

  const handleSuggest = async () => {
    if (!options?.promptGPT || !options?.canPromptGPT) return
    const [newContext, newSubscriptionData] = await suggestSteps(options?.promptGPT, node)
    newContext && context.setNodes(newContext.data.nodes)
  }
  

  return (<>
    <div>

      <div>
        <div className={`flex-row flex w-full px-1`}>
          <div className="px-3">
            <Button onClick={() => setShowActions(!showActions)}  variant='ghost'>
              {showActions ? <MinusIcon /> : <PlusIcon />}
            </Button>
          </div>
          <div className="px-0">
            <Options node={node} />
          </div>
          {showActions && <div className="px-3">
            {options?.promptGPT && <Button variant={"secondary"} className='bg-emerald-900' disabled={!options?.canPromptGPT} onClick={handleSuggest}><BrainCircuit /></Button>}
             
            {/* <Button variant={"secondary"} className='bg-emerald-900'><PlayIcon /></Button> */}
          </div>}
        </div>
      </div>
    </div>
  </>)
}


const Options = ({
  node,
}: {
  node: FosNode,
}) => {

 
  return (
    <div>
      <ComboboxOptionsMerge node={node}/>
    </div>
  )
}





