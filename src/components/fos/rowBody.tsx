import React, { useEffect, useState } from 'react'


import { ComboboxEditable } from '../combobox/comboboxEditable'

import _  from 'lodash'
import { useWindowSize } from '../window-size'
import { suggestOption } from '@/lib/suggestOption'
import { FosModule } from './modules/fosModules'

import { TrellisRowBodyComponentProps } from "@syctech/react-trellis"
import { IFosNode } from '@fosforescent/fosforescent-js'
import { FosReactGlobal } from '.'

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
  global, 
  meta
  
}: TrellisRowBodyComponentProps<IFosNode, FosReactGlobal>) => {



  const getDescription = (node: IFosNode) => {
    const data = node.getData()
    return data.description?.content || ""
  }


  
  const getOptions = (node: IFosNode) => {
    if (node.getNodeType() === 'option'){
      return node.getChildren().map((child, index) => {
        return ({value: index.toString(), label: getDescription(child)})
      })
    }else if (node.getNodeType() === 'task'){
      return [{value: '0', label: getDescription(node)}]
    }else{
      throw new Error('getoptions must be used on a task or option node')
    }
  }





  const options = getOptions(node)




  // console.log('step', node.getNodeId(), nodeOptions)

  const selectedIndex = node.getData().option?.selectedIndex || 0

  if(selectedIndex === undefined) {
    console.log('selectedOption', options)
  }

  
  const handleUndo = () => {
    global.undo && global.canUndo && global.undo()
  }

  const handleRedo = () => {
    global.redo && global.canRedo && global.redo()
  }


  const handleSuggestOption = async () => {
    global.suggestOptions && await global.suggestOptions(node)
  }
  
  const locked = false

  const ModuleRowComponent = global.modules?.active?.RowComponent || (() => <></>)

  const handleTextEdit = (value: string) => {
    node.setData({description: {content: value}})
  }

  const handleChange = (value: string) => {
    node.setData({option: {selectedIndex: parseInt(value)}})
  }

  const handleKeyPresses = (e: React.KeyboardEvent<HTMLDivElement>) => {
    meta.keyPresses(e)
  }
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    meta.keyDowns(e)
  }


  return (
      <div>
        <div className="flex flex-initial grow">
          <ComboboxEditable 
            className='w-full bg-transparent'
            handleTextEdit={handleTextEdit}
            handleChange={handleChange}
            suggestOption={handleSuggestOption}
            getFocus={meta.getFocus}
            hasFocus={meta.hasFocus}
            focusChar={meta.focusChar}
            isDragging={meta.isDragging}
            draggingOver={meta.draggingOver}
            draggingOn={meta.draggingOn}
            keyDown={handleKeyDown}
            keyPresses={handleKeyPresses}
            selectedIndex={selectedIndex}
            values={options}
            locked={global.locked || false }
            // defaultValue={selectedNodeDescription}
            defaultValue={selectedIndex.toString()}
            />

        </div>
        {ModuleRowComponent && <div className={`right-box`}>
          <ModuleRowComponent node={node} options={global} />
        </div>}
      </div>)

}




