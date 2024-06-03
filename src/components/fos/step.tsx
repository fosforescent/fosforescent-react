import React, { useEffect, useState } from 'react'



import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"


import { TrashIcon, PlayIcon, Folder, MinusCircleIcon, ChevronDownCircleIcon, ChevronRightCircleIcon, LucideCheck, XIcon, ChevronLeftCircleIcon } from "lucide-react"
import { QuestionMarkCircledIcon, ComponentNoneIcon, Crosshair1Icon, DiscIcon, DragHandleDots2Icon, DotsVerticalIcon, PlusCircledIcon, } from "@radix-ui/react-icons"


import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"

import { CSS } from '@dnd-kit/utilities';

import { RowsComponent } from './rows';
import { FosContext, FosNodeData, FosPath, FosTrail, FosRoute, FosNode } from "@fosforescent/fosforescent-js"

import { ComboboxEditable } from '../combobox/comboboxEditable'

import { useDraggable, useDroppable } from '@dnd-kit/core';
import _, { update } from 'lodash'
import { useWindowSize } from '../window-size'
import { suggestOption } from '@/lib/suggestOption'
import { FosModule } from './modules/fosModules'
import { FosReactOptions } from '.'

export const StepRow = ({
  node,
  rowDepth,
  handleTextEdit,
  handleChange,
  addYoungerSibling,
  moveLeft,
  moveRight,
  deleteRow,
  moveDown,
  moveUp,
  deleteOption,
  addOption,
  locked,
  toggleCollapse,
  dragOverInfo,
  dragging,
  dragItem,
  activeModule,
  options: fosReactOptions
}: {
  node: FosNode,
  rowDepth: number,
  handleTextEdit: (value: string, focusChar: number) => void,
  handleChange: (value: string) => void,
  addYoungerSibling: () => void,
  moveLeft: () => void,
  moveRight: () => void,
  moveUp: () => void,
  moveDown: () => void,
  deleteOption: (index: number) => void,
  deleteRow: () => void,
  addOption: () => void,
  toggleCollapse: () => void,
  dragOverInfo: { id: string, position: 'above' | 'below' | 'on', node: FosNode } | null,
  locked: boolean,
  dragging: { id: string, node: FosNode } | null,
  dragItem: { id: string, data: { node: FosNode } },
  activeModule: FosModule | undefined,
  options: FosReactOptions
}) => {


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

  
  const children = node.getChildren(selectedIndex)


  const nodeId = node.getNodeId()
  const nodeType = node.getNodeType()
  // const nodeItemId = `${nodeType}-${nodeId}`
  // const dragItemNodeId = `${dragItem?.data.node.getNodeType()}-${dragItem?.data.node.getNodeId()}`


  const isDraggingParent = !!(dragging && dragging.node && node.isChildOf(dragging.node))

  const nodeItemId = `${nodeType}-${nodeId}`
  const nodeItemIdMaybeParent = dragging && isDraggingParent ? dragging.id : nodeItemId


  const {
    attributes,
    listeners,
    setNodeRef: setDragNodeRef,
    transform,
    // transition,
  } = useDraggable({id: nodeItemIdMaybeParent, data: { node: isDraggingParent ? dragging.node : node } });


  const {
    setNodeRef: setDropNodeRef,
    isOver,
  } = useDroppable({
    id: nodeItemIdMaybeParent,
    disabled: isDraggingParent || locked,
    data: { node }
  });

 

  // console.log('transformstyle', transform)

  const dragStyle = {
    transform: CSS.Transform.toString(transform),
    // transition,
    ...(dragging && dragging.id !== `${dragItem?.id}`) ? {opacity: 0.9} : {}
  };
  


  const draggingOn = !!isOver && dragOverInfo?.position === 'on'

  const dropOnStyle = draggingOn ? {
    backgroundColor: 'rgba(230, 220, 200, .07)',
    // transform: 'scale(1.05)',
  } : {}

  const draggingStyle = dragging?.id === nodeItemId ? {
    opacity: 0.5
  } : {}

  const isNotDragging = dragging ? (dragging.id !== nodeItemId) : true

  const isDropping = isOver && dragOverInfo && dragOverInfo.id === nodeItemId


  const dropStyle = (isDropping) ? {
    ...(dragOverInfo.position === 'above' ? {
      paddingTop: '12px',
      // backgroundColor: 'rgba(230, 220, 200, .1)',
      // background: 'linear-gradient(rgba(230, 220, 200, .1) 0%, rgba(230, 220, 200, .1) 30%, rgba(230, 220, 200, 0) 30%, rgba(230, 220, 200, 0) 100%)',
      transition: 'padding-top 0.3s ease padding-bottom 0.3s ease transform 0.3s ease',
      transform: 'translateY(12px)'
    } : {}),
    ...(dragOverInfo.position === 'below' ? {
      transform: 'translateY(-12px)',
      transition: 'padding-top 0.3s ease padding-bottom 0.3s ease transform 0.3s ease',
      // backgroundColor: 'rgba(230, 220, 200, .1)',
      // background: 'linear-gradient(rgba(230, 220, 200, 0) 0%, rgba(230, 220, 200, 0) 70%, rgba(230, 220, 200, .1) 70%, rgba(230, 220, 200, .1) 100%)',
      paddingBottom: '12px',
    } : {}),
    // ...(dragOverInfo.position === 'on' ? {
    //   transform: 'scale(1.1)',
    // } : {}),
    // backgroundColor: 'rgba(255, 230, 230, 0.1)',
  } : {
    overflow: 'hidden',
    backgroundColor: 'transparent',
  }

  // const dropStyleComboBox = (isOver && dragOverInfo && dragOverInfo.id === `${nodeType}-${nodeId}`) ? {
    // ...(dragOverInfo.position === 'above' ? {
    //   paddingTop: '16px',
    // } : {}),
    // ...(dragOverInfo.position === 'below' ? {
    //   paddingBottom: '16px',
    // } : {}),
  //   ...(dragOverInfo.position === 'on' ? {
  //     transform: 'scale(1.3)',
  //   } : {}),
  //   backgroundColor: 'rgba(255, 230, 230, 0.1)',
  // } : {
  //   backgroundColor: 'transparent',
  // }

  // console.log('focus', _.isEqual(context.data.focus.route, node.getRoute()), context, node.getRoute(), context.data.focus.route)
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
  const isSmallWindow = windowSize.width && windowSize.width < 500


  const maxRowDepth = windowSize.width ? Math.floor( (windowSize.width - 500 )/ 100) : 0

  // console.log('hasFocus', hasFocus)

  const ModuleRowComponent = activeModule?.RowComponent

  return (
 
  <div className={`w-full border-t ${hasFocus ? "bg-white/5" : ''} max-w-svw border-box`}>
  <div style={{...dragStyle}} className="flex w-full rounded-sm" ref={setDragNodeRef} {...attributes} {...listeners}  >
    <div style={{
      ...dropStyle,
      width: 'calc(100%)',
      paddingLeft: `${(maxRowDepth - rowDepth) * 1.5}rem`,
    }}  
      ref={setDropNodeRef} 
      className={`flex items-center cursor-text `}>
      {rowDepth > 0 && children.length > 0
        && (<div className={`right-box `} style={{
          width: '1.6rem'
        }}>

        <div className={`pl-1`}>
          <span 
            onClick={toggleCollapse}
            className={`py-3 cursor-pointer`}
            >
          {nodeOptions.collapsed ? (<ChevronRightCircleIcon size={'15px'}/>) : (<ChevronDownCircleIcon size={'15px'}/>)}
          </span>
        </div>
      </div>)}
      <div className={`left-box`} style={{
        width: '2rem'
      }}>
        <span className='px-1'>
          <MenuComponent 
            node={node} 
            hasChildren={children.length > 0}
            context={context}
             />
            
        </span> 
      </div>

      <div className="flex flex-initial grow">
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
            draggingOver={!!isOver}
            draggingOn={draggingOn}
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
      </div>
    </div>
  </div>
  <div className={` `}>
    {!nodeOptions.collapsed && rowDepth > 0 && children.length > 0 && (
      <RowsComponent 
        rows={children} 
        rowDepth={rowDepth - 1} 
        context={context} 
        dragging={dragging}
        dragOverInfo={dragOverInfo}
        parentNode={node}
        locked={context.locked || locked}
        activeModule={activeModule}
        options={fosReactOptions}
        />
    )}
  </div>

  </div>)

}








export function MenuComponent({
  node,
  // allowedChildren,
  hasChildren,
  context,

}: {
  node: FosNode,
  hasChildren: boolean
  context: FosContext
}) {

  const [menuOpen, setMenuOpen] = React.useState(false)


  const onLongPress = () => {
    setMenuOpen(true)
  }
  
  const onClick = () => {
    zoom()
  }

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };


  const zoom = () => {
    context.setTrail(node.getRoute())
  }

  const deleteNode = () => {
    
    const newContext = context.deleteNode(node.getRoute())
    newContext.updateData(newContext.data)
    setMenuOpen(false)
  }

  const snipNode = () => {

  
    const newContext = context.snipNode(node.getRoute())
    newContext.updateData(newContext.data)
    setMenuOpen(false)

  }



  // const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  return (
    <>      
      <Sheet  open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetContent  side={"left"}>
            <SheetHeader>
              Actions
            </SheetHeader>
              <div>
                {/* <div className='w-60' style={{padding: '15px 0'}}>
                  <ChangeInstruction nodes={nodes} leftNode={leftNode} rightNode={rightNode} updateNodes={updateNodes} path={path} setMenuOpen={setMenuOpen}/>              
                </div> */}
                <div className='flex items-center px-3'>
                  <div className='flex w-60 justify-around'>
                    {/* <Button variant={"secondary"} className='bg-emerald-900'><QuestionMarkCircledIcon /></Button> */}
                    {/* <Button variant={"secondary"} className='bg-emerald-900'><PlayIcon /></Button> */}
                    <Button variant={"destructive"} onClick={snipNode}><ComponentNoneIcon /></Button>
                    <Button variant={"destructive"} onClick={deleteNode}><TrashIcon /></Button>
                  </div>
  
  
                </div>
              </div>
          </SheetContent>
        </Sheet>
        <Button
          variant={"secondary"}
          style={{ background: 'transparent', padding: '10px 10px 10px 0px'}}
          onKeyDown={(e: any) => { e.stopPropagation(); setMenuOpen(true);}}
          onClick={onClick}
          >
        <DiscIcon  style={{
          opacity: hasChildren ? 1 : .5
        }} />
        </Button>
      {/* //   <Button
      //     variant={"secondary"}
      //     style={{ background: 'transparent', padding: '10px 10px 10px 0px'}}
      //     onClick={() => setMenuOpen(true)}
      //     >
      //     <DotsVerticalIcon />
      //   </Button> */}
    </>
  )
}

