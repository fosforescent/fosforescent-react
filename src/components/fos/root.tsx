import React, { ReactElement, useEffect, useState } from 'react'
import { QuestionMarkCircledIcon, MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import { Apple, BrainCircuit, CircleEllipsis, DollarSign, Timer, Hammer, Dices, PenBox, ScrollText, FileText, Boxes } from 'lucide-react'

// import { TreeIcon } from '@radix-ui/react-icons'
import {  FosContext, FosTrail, FosNode, FosPath, FosNodeContent } from "../../fos/temp-types"

import { Button } from '../ui/button';
import { Input } from '../ui/input';

import { RowsComponent } from './rows';


import { useWindowSize } from '../window-size';
import { MergeRowsComponent } from './mergeRows';


import { FosModule, FosModuleName, fosModules } from './modules/fosModules';
import { FosReactOptions } from '.';



export function RootScreenView({
  context,
  // updateNodes,
  node,
  
  // updateNodes,
  dragging,
  dragOverInfo,
  // trail,
  // updateTrail,
  options: fosReactOptions
}: {
  context: FosContext,
  // updateNodes: (nodes: any) => void,
  node: FosNode,
  // updateNodes: (nodes: FosContext) => void
  dragOverInfo: { id: string, position: 'above' | 'below' | 'on', node: FosNode } | null,

  dragging:  { id: string, node: FosNode } | null
  options: FosReactOptions
  // trail: FosTrail
  // updateTrail: (trail: FosTrail) => void
}) {


  // const availableModules = (Object.keys(fosModules) as FosModuleName[]).map((module: FosModuleName) => fosModules[module as FosModuleName]).filter((module: FosModule) => {
  //   console.log('module', module.name, module.name !== 'workflow', node.getRoute().length > 1)
  //   return (node.getRoute().length <= 1) ?  (module.name !== 'workflow') : true 
  // })

  const availableModules = (Object.keys(fosModules) as FosModuleName[]).map((module: FosModuleName) => fosModules[module as FosModuleName])
  // console.log('availableModules', availableModules)
  // const workflowIsAvailable = availableModules.find((module: FosModule) => module.name === 'workflow')

  const [activeModule, setActiveModule] = useState<FosModule | undefined >( node.getRoute().length > 1 ? fosModules.workflow : undefined)


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
    {<div style={{padding: '15px 0px'}}>
      <RootScreenHead node={node} context={context} activeModule={activeModule} setActiveModule={setActiveModule} availableModules={availableModules} options={fosReactOptions} />
        {/* <AddOption /> */}
    </div>}
    <div>
      {node.hasMerge() 
        ? <MergeRowsComponent rowDepth={rowDepth} context={context} dragging={dragging} parentNode={node} dragOverInfo={dragOverInfo} locked={context.locked} activeModule={activeModule} options={fosReactOptions}  />
        : <RowsComponent rows={rows} rowDepth={rowDepth} context={context} dragging={dragging} parentNode={node} dragOverInfo={dragOverInfo} locked={context.locked} activeModule={activeModule} options={fosReactOptions} />}
    </div>


      {/* {node.data.duration && <GanttComponent root={node} />} */}
      {/* <DataComponent node={node} trail={trail} forceUpdate={forceUpdate} /> */}
      {/* {node.data.cost && <CostComponent root={node} forceUpdate={forceUpdate} />} */}
  </div>)

}





export const RootScreenHead = ({  
  node,
  context,
  activeModule,
  setActiveModule,
  availableModules,
  options: fosReactOptions
}: {
  node: FosNode,
  context: FosContext,
  activeModule: FosModule | undefined,
  setActiveModule: (module: FosModule | undefined) => void,
  availableModules: FosModule[],
  options: FosReactOptions
}) => {


  /**
   * 
   * Validate value before showing
   * 
   * If value has native value, then apply appropriately to component
   */

  const [showAllActions, setShowAllActions] = React.useState(false)



  // console.log('canSuggest', canSuggest, appState.info.subscription?.apiCallsAvailable, appState.info.subscription?.apiCallsUsed, appState.info.subscription, appState.info, appState)



  const handleAllActionsButtonClick = () => {
    if (showAllActions) {
      if (activeModule !== undefined){
        setActiveModule(undefined)
      } else {
        setShowAllActions(false)  
      }
    } else {
      setShowAllActions(true)
    }
  }


  const handleModuleClick = (module: FosModule) => {
    setActiveModule(module)
    setShowAllActions(false)
  }

  const HeadComponent = activeModule?.HeadComponent || (() => <></>)

  // console.log('activeModule', activeModule, availableModules)

  return (<>
    <div>
      <div>
        <div className={`flex-row flex w-full px-1 `}>
          <div className={`px-0 flex-grow overflow-x-hidden transition-all duration-500 ${showAllActions ? 'w-none' : ''}`}>
            <HeadComponent node={node} options={fosReactOptions} />
          </div>
          <div className={`px-3 flex flex-row w-auto transition-all duration-500 items-stretch`}>
  
            {showAllActions && (

              (availableModules).map((module: FosModule, index: number) => {
                return <Button key={index} onClick={() => handleModuleClick(module)} variant='ghost' className={`h-full ${activeModule?.name === module.name ? 'bg-stone-900' : 'bg-stone-700'}`}>{module.icon}</Button>
              })
            )}
  
            <div className={`overflow-x-hidden h-full`}>
              <Button onClick={handleAllActionsButtonClick}  variant='ghost' className='self-center h-full'>
                {showAllActions 
                  ? <CircleEllipsis className='rotate-90' />  
                  : <CircleEllipsis />}
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </>)
}


