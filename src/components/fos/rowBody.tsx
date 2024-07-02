import React, { useEffect, useState } from 'react'


import { ComboboxEditable } from '../combobox/comboboxEditable'

import _  from 'lodash'
import { useWindowSize } from '../window-size'
import { suggestOption } from '@/lib/suggestOption'
import { FosNodeModule, FosNodeModuleName, fosNodeModules } from './modules/fosModules'

import { TrellisRowBodyComponentProps } from "@syctech/react-trellis"
import { IFosNode } from '@fosforescent/fosforescent-js'
import { FosReactGlobal } from '.'
import { ComboboxEditableTask } from '../combobox/comboboxEditableTask'
import { ChevronDownCircleIcon, ChevronRightCircleIcon, DiscIcon } from 'lucide-react'
import { FosWrapper } from './fosWrapper'

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
  
}: TrellisRowBodyComponentProps<FosWrapper, FosReactGlobal | undefined>) => {



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


  const options = getOptions(node.fosNode())


  // console.log('step', node.getNodeId(), nodeOptions)

  const selectedIndex = node.getData().option?.selectedIndex || 0
  const locked = false

  const moduleKey = node.getNodeType() as FosNodeModuleName
  // console.log('moduleKey', moduleKey)

  // console.log('rowBody', node.getNodeType(), global?.modules, global?.modules?.find( m => m.name === moduleKey))

  const nodeModule = fosNodeModules[moduleKey] as FosNodeModule
  const ModuleRowComponent = nodeModule.RowComponent

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
    suggestOptions(node.fosNode())
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

  // const handleGetFo

  const focusChar = meta.trellisNode.hasFocus()
  
  const isDragging = state.draggingNode ===  meta.trellisNode.getId()
  const draggingOver = state.draggingOverNode === meta.trellisNode.getId()

  const value = getDescription(node.fosNode())

  const isRoot = !meta.trellisNode.getParent()

  // console.log('isRoot', isRoot, meta.trellisNode.getId())


  const toggleCollapse = () => {
    meta.trellisNode.toggleCollapse()
  }


  
  const handleZoom = () => {
    console.log('zooming', node)
    meta.trellisNode.setZoom()
    console.log('zooming2', node)
    meta.trellisNode.refresh()
  }

  const handleDeleteRow = () => {
    meta.trellisNode.delete()
  }

  const handleGetFocus = () => {
    updateState({
      ...state,
      focusRoute: meta.trellisNode.getRoute().map(node => node.getId())
    })
  }

  const handleSetFocus = () => {
    meta.trellisNode.setFocus(focusChar)
  }



  const rowDepth = state.rowDepth - (meta.trellisNode.getRoute().length - state.focusRoute.length)

  // console.log('row display', node.getNodeType(), ModuleRowComponent)

  return (
    <div className="flex items-center">
      {rowDepth > 0 && children.length > 0
      && (<div className={`right-box `} style={{
          width: '1.5rem',
        }}>

        <div className={`pl-0`}>
          <span 
            onClick={toggleCollapse}
            className={`py-3 cursor-pointer`}
            >
          {meta.trellisNode.isCollapsed() ? (<ChevronRightCircleIcon size={'15px'}/>) : (<ChevronDownCircleIcon size={'15px'}/>)}
          </span>
        </div>
    </div>)}

    <div className={`left-box cursor-pointer`} style={{
      width: '1rem'
      
    }} onClick={handleZoom} >
      
        {/* <MenuComponent 
          node={node} 
          /> */}
        <DiscIcon
          width={'1rem'}
          height={'1rem'}
          style={{
            opacity: children.length > 0 ? 1 : .5
          }} />
          
    </div>

    
    <div className={`right-box grow`}>
      <ModuleRowComponent node={node} options={global} meta={meta} state={state} updateState={updateState} />
    </div>
  </div>)

}




