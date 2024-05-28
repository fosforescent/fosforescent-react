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


import { TrashIcon, PlayIcon, Folder, MinusCircleIcon, ChevronDownCircleIcon, ChevronRightCircleIcon, LucideCheck, XIcon, Merge } from "lucide-react"


import { Crosshair1Icon, DiscIcon, DragHandleDots2Icon, DotsVerticalIcon, PlusCircledIcon, QuestionMarkCircledIcon, ComponentNoneIcon } from '@radix-ui/react-icons'

import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "../ui/button"

import { CSS } from '@dnd-kit/utilities';

import { RowsComponent } from './rows';
import { FosContext, FosNodeData, FosPath, FosTrail, FosRoute, FosNode, FosNodeContent } from '../../fos/temp-types'


import { useDraggable, useDroppable } from '@dnd-kit/core';

import _, { update } from 'lodash'
import { diff } from 'deep-object-diff'
import { useWindowSize } from '../window-size'
import { ComboboxMerge } from '../combobox/comboboxMerge'
import { MergeRowsComponent } from './mergeRows'
import { ArrayChange, Change } from 'diff'
import { FosReactOptions } from '.'


export const MergeRow = ({
  node,
  rowDepth,
  handleChange,
  moveLeft,
  moveRight,
  moveDown,
  moveUp,
  locked,
  toggleCollapse,
  dragOverInfo,
  dragging,
  dragItem,
  added,
  removed,
  options
}: {
  node: FosNode,
  rowDepth: number,
  handleChange: (value: string) => void,
  moveLeft: () => void,
  moveRight: () => void,
  moveUp: () => void,
  moveDown: () => void,
  toggleCollapse: () => void,
  dragOverInfo: { id: string, position: 'above' | 'below' | 'on', node: FosNode } | null,
  locked: boolean,
  dragging: { id: string, node: FosNode } | null,
  dragItem: { id: string, data: { node: FosNode } }
  added?: boolean,
  removed?: boolean,
  options: FosReactOptions
}) => {


  const context = node.context

 

  const nodeOptions = node.getNodeData()

  // console.log('step', node.getNodeId(), nodeOptions)

  const selectedIndex = nodeOptions.selectedOption;

  if(selectedIndex === undefined) {
    console.log('selectedOption', nodeOptions)
  }

  
  const children = node.getChildren(selectedIndex)


  const nodeId = node.getNodeId()
  const nodeType = node.getNodeType()


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


  const hasFocus = _.isEqual(context.data.focus.route, node.getRoute())
  
  const focusChar = context.data.focus.char

  const setFocus = (newFocusChar: number) => {
    // console.log('setFocus', newFocusChar)
    if (newFocusChar === focusChar){
      return
    }
    context.setFocus(node.getRoute(), newFocusChar)
  }



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




  const windowSize = useWindowSize()
  const isSmallWindow = windowSize.width && windowSize.width < 500

  const acceptMerge = () => {
    const newContext = node.acceptMerge()
    newContext.updateData(newContext.data)
  }

  const rejectMerge = () => {
      const newContext = node.rejectMerge()
      newContext.updateData(newContext.data)
    }

  const bothMerge = () => {
    const newContext = node.bothMerge()
    newContext.updateData(newContext.data)
  }
  

  const optionDescriptions: JSX.Element[] = node.hasMerge() 
    ? node.getMergeOptions().map((option, i: number) => {

      // console.log('option', option.description)
      return (<>
        {option.description.map((segment, index) => (<span
          className={`${segment.added ? 'bg-emerald-950/90' : segment.removed ? 'text-destructive bg-destructive-950/90' : ''}`}
          key={index}
        >
          {segment.value}
        </span>))}
      </>)
    }, [])
    : node.getNodeData().options.map((option, i: number) => {
      return (
        <span key={i}>{option.description}</span>
      )
    })

  return (
 
  <div className="w-full">
  <div style={{...dragStyle}} className="flex w-full rounded-sm" ref={setDragNodeRef} {...attributes} {...listeners}  >
    <div style={dropStyle}  
      ref={setDropNodeRef} 
      className={`flex items-center h-16 w-full`}>

      <div className={`flex-none w-25 flex`}>

        <div className={`flex ${!isSmallWindow ? "w-100" : "w-25"} pl-3`}>
          {rowDepth > 0 && children.length > 0
            ? (<span 
                onClick={toggleCollapse}
                className='px-3 py-3'
                >
              {nodeOptions.collapsed ? (<ChevronRightCircleIcon size={'15px'}/>) : (<ChevronDownCircleIcon size={'15px'}/>)}
              </span>) 
            : !isSmallWindow ? (<span className='px-3'>&nbsp;&nbsp;&nbsp;&nbsp;</span>) : (<></>)
          }
          
  
          <span className='px-1'>
            <MenuComponent 
              node={node} 
              hasChildren={children.length > 0}
              context={context}
               />
              
          </span>
          <span
            className="pr-1 py-3"
            style={{
              opacity: dragging?.id === `${dragItem?.id}` ? '1' : '0' 
            }} >
            <DragHandleDots2Icon />
          </span>
        </div>
      </div>
      <div className="flex flex-initial w-full">
    
        <div className='flex'style={{
              width: '60vw',
            }} >
          <ComboboxMerge 
            className='w-full bg-transparent'
            // handleTextEdit={handleTextEdit}
            handleChange={handleChange}
            // addYoungerSibling={addYoungerSibling}
            moveLeft={moveLeft}
            moveRight={moveRight}
            // deleteRow={deleteRow}
            // addOption={addOption}
            moveFocusDown={moveFocusDown}
            moveFocusUp={moveFocusUp}
            toggleCollapse={toggleCollapse}
            // deleteOption={deleteOption}
            moveDown={moveDown}
            moveUp={moveUp}
            added={added}
            removed={removed}
            // handleRedo={handleRedo}
            // handleUndo={handleUndo}
            selectedIndex={selectedIndex}
            values={optionDescriptions}
            // locked={true}
            setFocus={setFocus}
            // draggingOver={!!isOver}
            // draggingOn={draggingOn}
            isDragging={dragging ? (dragging.id === `${dragItem?.id}`) : false }
            hasFocus={hasFocus}
            // focusChar={focusChar}
            variant="text-mimic"
            // defaultValue={selectedNodeDescription}
            defaultValue={selectedIndex.toString()}
            />
          {<div style={{minWidth: '80px'}} className="flex items-center justify-end">
            <Button className="bg-amber-200/70 p-1 h-7 " onClick={bothMerge}><Merge  size={"1rem"} /> </Button>
            <Button className="bg-emerald-700 p-1 h-7" onClick={acceptMerge}><LucideCheck size={"1rem"}/> </Button>
            <Button variant={"destructive"} className="p-1 h-7" onClick={rejectMerge}><XIcon  size={"1rem"} /> </Button>
          </div>}

        </div>
      </div>

    </div>
  </div>
  <div className={`${!isSmallWindow ? "pl-8" : "pl-2" }`}>
    {!nodeOptions.collapsed && rowDepth > 0 && children.length > 0 && (
      <MergeRowsComponent 
        rowDepth={rowDepth - 1} 
        context={context} 
        dragging={dragging}
        dragOverInfo={dragOverInfo}
        parentNode={node}
        locked={true}
        options={options}
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

