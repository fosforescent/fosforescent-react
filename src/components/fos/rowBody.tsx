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
  meta,
  state,
  updateState
  
}: TrellisRowBodyComponentProps<IFosNode, FosReactGlobal | undefined>) => {



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
      console.log('node', node)
      throw new Error('getoptions must be used on a task or option node')
    }
  }


  if (!global){
    throw new Error('global not defined')
  }


  const options = getOptions(node)


  // console.log('step', node.getNodeId(), nodeOptions)

  const selectedIndex = node.getData().option?.selectedIndex || 0
  const locked = false


  const ModuleRowComponent = global?.activeModule?.RowComponent || (() => <></>)

  const children = node.getChildren()


  if(selectedIndex === undefined) {
    console.log('selectedOption', options)
  }

  const suggestOptions = async (node: IFosNode) => {
    global?.promptGPT && suggestOption(global.promptGPT, node)
  }

  
  const handleUndo = () => {
    global.undo && global.canUndo && global.undo()
  }

  const handleRedo = () => {
    global.redo && global.canRedo && global.redo()
  }


  const handleSuggestOption = async () => {
    suggestOptions(node)
  }
  
  
  const handleTextEdit = (value: string, focusChar: number | null) => {
    node.setData({description: {content: value}})
    meta.trellisNode.setFocus(focusChar)
  }

  const handleChange = (value: string) => {
    node.setData({option: {selectedIndex: parseInt(value)}})
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    meta.trellisNode.keyUpEvents(e)


    // if (e.altKey && e.ctrlKey){
    //   console.log('test', selectedIndex, node.getChildren().length );
    //   handleChange( selectedIndex ? ( (selectedIndex - 1 + (children.length)) % children.length ).toString() : "0" )
    // }

  }
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    meta.trellisNode.keyDownEvents(e)
  }

  const handleAddOption = () => {
    // console.log('addOption')
    // addOption()
  }

  const handleDeleteOption = (index: number) => {
    // console.log('deleteOption', index)
    // deleteOption(index)
  }

  const handleToggleCollapse = () => {
    meta.toggleCollapse()
  }

  const focusChar = meta.trellisNode.hasFocus()
  
  const isDragging = state.draggingNode ===  meta.trellisNode.getId()
  const draggingOver = state.draggingOverNode === meta.trellisNode.getId()

  const value = getDescription(node)

  const isRoot = !meta.trellisNode.getParent()

  console.log('isRoot', isRoot, meta.trellisNode.getId())

  return (
      <div className="flex flex-initial grow">
        <div className="flex flex-initial grow">
          <ComboboxEditable 
            className='w-full bg-transparent'
            handleTextEdit={handleTextEdit}
            handleChange={handleChange}
            suggestOption={handleSuggestOption}
            // getFocus={meta.acquireFocus}
            hasFocus={!!focusChar}
            focusChar={focusChar}
            isDragging={isDragging}
            draggingOver={draggingOver}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            selectedIndex={selectedIndex}
            values={options}
            locked={global.locked || false }
            // defaultValue={selectedNodeDescription}
            defaultValue={selectedIndex.toString()}
            addOption={handleAddOption}
            deleteOption={handleDeleteOption}
            />

        </div>
        {ModuleRowComponent && <div className={`right-box`}>
          <ModuleRowComponent node={node} options={global} meta={meta} />
        </div>}
      </div>)

}




