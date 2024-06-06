import React, { useEffect, useState } from 'react'


import { FosContext, FosNodeData, FosPath, FosTrail, FosRoute, FosNode } from "@fosforescent/fosforescent-js"

import { ComboboxEditable } from '../combobox/comboboxEditable'

import _  from 'lodash'
import { useWindowSize } from '../window-size'
import { suggestOption } from '@/lib/suggestOption'
import { FosModule } from './modules/fosModules'

import { TrellisRowBodyComponentProps } from "@syctech/react-trellis"

export const RowBody = ({
  node,
  // rowDepth,
  // handleTextEdit,
  // handleChange,
  // addYoungerSibling,
  // moveLeft,
  // moveRight,
  // deleteRow,
  // moveDown,
  // moveUp,
  // deleteOption,
  // addOption,
  // locked,
  // toggleCollapse,
  // dragOverInfo,
  // dragging,
  // dragItem,
  // activeModule,
  // options: fosReactOptions
}: TrellisRowBodyComponentProps) => {


  const context = node.context

  const options = node.getNodeData().options.map((item, index) => {
    return ({value: index.toString(), label: item.description})
  })



  const nodeOptions = node.getNodeData()

  // console.log('step', node.getNodeId(), nodeOptions)

  const selectedIndex = nodeOptions.selectedOption;

  if(selectedIndex === undefined) {
    console.log('selectedOption', nodeOptions)
  }


 

 
  const hasFocus = _.isEqual(context.data.focus.route, node.getRoute())
  
  const focusChar = context.data.focus.char

  const setFocus = (newFocusChar: number) => {
    console.log('setFocus', newFocusChar)
    if (newFocusChar === focusChar){
      return
    }
    context.setFocus(node.getRoute(), newFocusChar)
  }

  // const moveFocusUp = () => {
  //   context.moveFocusUp()
  // }

  // const moveFocusDown = () => {
  //   context.moveFocusDown()    
  // }

  // console.log('here', node.context.data.focus)
  const moveFocusUp = () => {
    const newContext = node.moveFocusUp()
    // if (newContext){
    //   updateNodes(newContext)
    // }
  }

  const moveFocusDown = () => {
    const newContext = node.moveFocusDown()
    // if (newContext){
    //   updateNodes(newContext)
    // }
  }

  
  const handleUndo = () => {
    console.log('undo', fosReactOptions?.canUndo)
    if (fosReactOptions?.canUndo && fosReactOptions?.undo){
      fosReactOptions?.undo()
    }
  }

  const handleRedo = () => {
    console.log('redo', fosReactOptions?.canRedo)
    if (fosReactOptions?.canRedo && fosReactOptions?.redo){
      fosReactOptions?.redo()
    }
  }


  const handleSuggestOption = async () => {
    if (fosReactOptions?.canPromptGPT && fosReactOptions?.promptGPT){
      const [newContext, newSubscriptionData] = await suggestOption(fosReactOptions.promptGPT, node)
      if (newContext){
        context.setNodes(newContext.data.nodes)
      }else{
        fosReactOptions?.toast && fosReactOptions.toast({
          title: 'Error',
          description: 'No suggestions could be generated',
          duration: 5000,
        })
      }
    } else {
      console.error('No authedApi')
      const err =  new Error('No authedApi')
      err.cause = 'unauthorized'
      throw err
    }
  }
  
  const getFocus = () => {
    console.log('HERE focus')
    context.setFocus(node.getRoute(), focusChar)
  }

  // console.log('mergeDiff', mergeDiff, nodeOptions, node.context.data.nodes[nodeOptions.mergeNode!], hasMergeID, hasMerge)

  // console.log('mergeDiff', mergeDiff)

  // const isMaxDepth =  !(rowDepth > 0 && children.length > 0)

  const windowSize = useWindowSize()

  // console.log('hasFocus', hasFocus)

  const ModuleRowComponent = activeModule?.RowComponent

  return (
      <div>
        <div className="flex flex-initial grow">
          <ComboboxEditable 
            className='w-full bg-transparent'
            handleTextEdit={handleTextEdit}
            handleChange={handleChange}
            getFocus={getFocus}
            addYoungerSibling={addYoungerSibling}
            moveLeft={moveLeft}
            moveRight={moveRight}
            deleteRow={deleteRow}
            addOption={addOption}
            moveFocusDown={moveFocusDown}
            moveFocusUp={moveFocusUp}
            toggleCollapse={toggleCollapse}
            deleteOption={deleteOption}
            suggestOption={handleSuggestOption}
            moveDown={moveDown}
            moveUp={moveUp}
            handleRedo={handleRedo}
            handleUndo={handleUndo}
            selectedIndex={selectedIndex}
            values={options}
            locked={context.locked || locked}
            setFocus={setFocus}
            isDragging={dragging ? (dragging.id === `${dragItem?.id}`) : false }
            hasFocus={hasFocus}
            focusChar={focusChar}
            variant="text-mimic"
            // defaultValue={selectedNodeDescription}
            defaultValue={selectedIndex.toString()}
            />

        </div>
        {ModuleRowComponent && <div className={`right-box`}>
          <ModuleRowComponent node={node} options={fosReactOptions} />
        </div>}
      </div>)

}




