import React, { ReactElement, useEffect, useState } from 'react'
import { QuestionMarkCircledIcon, MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import { Apple, BrainCircuit, CircleEllipsis, DollarSign, Timer, Hammer, Dices, PenBox, ScrollText, FileText, Boxes } from 'lucide-react'

// import { TreeIcon } from '@radix-ui/react-icons'
import {  FosContext, FosTrail, FosNode, FosPath, FosNodeContent } from "@fosforescent/fosforescent-js"

import { Button } from '../ui/button';


import { FosModule, FosModuleName, fosModules } from './modules/fosModules';
import { FosReactOptions } from '.';



import { TrellisHeadComponentProps } from "@syctech/react-trellis"

export const RootScreenHead = ({  
  node,
  context,
  activeModule,
  setActiveModule,
  availableModules,
  options: fosReactOptions
}: TrellisHeadComponentProps) => {


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


