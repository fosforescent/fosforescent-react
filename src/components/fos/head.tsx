import React, { ReactElement, useEffect, useState } from 'react'
import { QuestionMarkCircledIcon, MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import { Apple, BrainCircuit, CircleEllipsis, DollarSign, Timer, Hammer, Dices, PenBox, ScrollText, FileText, Boxes } from 'lucide-react'


import { Button } from '../ui/button';


import { FosDataModule, FosDataModuleName, FosModuleProps, fosDataModules } from './modules/fosModules';
import { FosReactOptions } from '.';



import { TrellisComponents, TrellisHeadComponentProps } from "@syctech/react-trellis"
import { IFosNode } from '@fosforescent/fosforescent-js';
import { FosWrapper } from './fosWrapper';

import { FosReactGlobal } from '@/components/fos';

export const RootScreenHead = ({  
  node,
  global,
  meta,
  state,
  updateState,
  ...props
}: TrellisHeadComponentProps<FosWrapper, FosReactGlobal | undefined>) => {


  /**
   * 
   * Validate value before showing
   * 
   * If value has native value, then apply appropriately to component
   */

  const [showAllActions, setShowAllActions] = React.useState(false)


  if (!global){
    throw new Error('global is undefined')
  }

  // console.log('children', node.getChildren().map((child) => child.getNodeType()))

  const setActiveModule = (module: FosDataModule | undefined) => {
    console.log('setActiveModule', module, global)
    global?.setActiveModule && global.setActiveModule(module)
  }


  const handleAllActionsButtonClick = () => {
    if (showAllActions) {
      if (global?.activeModule !== undefined){
        setActiveModule(undefined)
      } else {
        setShowAllActions(false)  
      }
    } else {
      setShowAllActions(true)
    }
  }


  const handleModuleClick = (module: FosDataModule) => {
    console.log('handleModuleClick', module)
    setActiveModule(module)
    setShowAllActions(false)
  }



  const isRoot = node.getNodeType() === "root"

  // console.log('isRoot', isRoot, global?.activeModule)

  
  const activeModule = isRoot ? undefined : global.activeModule


  const availableModules = isRoot ? global?.modules?.filter((mod) => mod.name !== "workflow") : global?.modules

  const HeadComponent = activeModule?.HeadComponent || (() => <></>)

  // console.log('activeModule', activeModule, availableModules, global)

  return (<>
    <div>
      <div>
        <div className={`flex-row flex w-full px-1 bg-card border`}>
          <div className={`px-0 flex-grow overflow-x-hidden transition-all duration-500 ${showAllActions ? 'w-none' : ''}`}>
            <HeadComponent node={node} options={global} meta={meta.trellisNode.getMeta()} state={state} updateState={updateState} />
          </div>
          {!isRoot && <div className={`px-3 flex flex-row w-auto transition-all duration-500 items-stretch`}>
  
            {showAllActions && (

              (availableModules || []).map((module: FosDataModule, index: number) => {
                return <Button key={index} onClick={() => handleModuleClick(module)} variant='ghost' className={`h-full ${activeModule?.name === module.name ? 'bg-accent-foreground/20' : 'bg-accent-foreground/50'}`}>{module.icon}</Button>
              })
            )}
  
            <div className={`overflow-x-hidden h-full`}>
              <Button onClick={handleAllActionsButtonClick}  variant='ghost' className='self-center h-full'>
                {showAllActions 
                  ? <CircleEllipsis className='rotate-90' />  
                  : <CircleEllipsis />}
              </Button>
            </div>

          </div>}
        </div>
      </div>
    </div>
  </>)
}


