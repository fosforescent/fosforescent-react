'use client'

import React, { ReactElement } from 'react'
import { ReactViewOptions } from '../../lib/old/client'
import { IFosInterpreter, INode } from '../../fos/old/types'
import Cell from './cell'
import { Crosshair1Icon, DiscIcon, QuestionMarkCircledIcon, PlayIcon, DragHandleDots2Icon, DotsVerticalIcon, ComponentNoneIcon, TrashIcon, PlusCircledIcon  } from '@radix-ui/react-icons'
import { Button } from "@/components/ui/button"
import {useSortable} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function RowView({
  interpreter,
  options,
  dragging,
}: {
  interpreter: IFosInterpreter
  options: ReactViewOptions
  dragging: string | null
}) {
  // const [showTree, setShowTree] = React.useState(true)

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: interpreter.getStubString()});
  
  const style = {
    padding: '5px 10px 5px 0px',
    transform: CSS.Transform.toString(transform),
    transition,
    ...(dragging && dragging !== interpreter.getStubString()) ? {opacity: 0.7} : {}
  };

  const newOptions = {
    ...options, 
    setStack: (newStack: IFosInterpreter[]) => {
      // options.setStack(newStack.slice(1, newStack.length))
    }
  }

  return (
    <div style={style} className="flex" ref={setNodeRef} {...attributes} {...listeners}>
      <div className="flex-none w-14 flex">
        <div className="flex w-50">
          <span
            style={{
              padding: '10px 0px',
              opacity: dragging === interpreter.getStubString() ? '1' : '0' 
            }} >
            <DragHandleDots2Icon />
          </span>
          <ZoomComponent 
            options={options}
            interpreter={interpreter}
          />
          <MenuComponent
            options={options}
            interpreter={interpreter}
          />
        </div>
      </div>
      <div className="flex-initial w-96">
        {interpreter.getChildren().map((child, index) => {
          const childOptions = newOptions
          return <Cell key={child.getStubString()} interpreter={child} options={childOptions} />
        })}
      </div>
      <div className="flex-none w-14 flex">
        <AddDep 
          options={options}
          interpreter={interpreter}
        />
      </div>
    </div>
  )
}


const AddDep = ({
  interpreter,
  options,
}: {
  interpreter: IFosInterpreter
  options: ReactViewOptions
}) => {

  const availableInstructions = interpreter.getAvailableInstructions()

  if (availableInstructions.length === 0) {
    throw new Error('no available instructions')
  }

  const handleAddDep = () => {
    const newStack = interpreter.getBlank(availableInstructions[0] as INode)
    // options.setStack(newStack.slice(1, newStack.length))
  }

  return availableInstructions.length > 0 ? (
    <Button 
      onClick={handleAddDep} variant='ghost'
      style={{padding: '15px 15px 15px 15px'}}
      >
      <PlusCircledIcon />
    </Button>
  ) : (
    <></>
  )
}


const MenuComponent = ({
  options,
  interpreter,
  }: {
  options: ReactViewOptions,
  interpreter: IFosInterpreter,
}) => {

return (<Dialog>
  <DialogTrigger><DotsVerticalIcon /></DialogTrigger>
  <DialogContent>
    <DialogHeader>Actions</DialogHeader>
  <DialogDescription className="flex justify-center">
      <Button variant={"secondary"} className='bg-emerald-900'><QuestionMarkCircledIcon /></Button>
      <Button variant={"secondary"} className='bg-emerald-900'><PlayIcon /></Button>
      <Button variant={"destructive"}><TrashIcon /></Button>
      <Button variant={"destructive"}><ComponentNoneIcon /></Button>
    {/* <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar> */}
    </DialogDescription>
  </DialogContent>
</Dialog>)
  
}


function ZoomComponent({
  options,
  interpreter,
}: {
  options: ReactViewOptions
  interpreter: IFosInterpreter
}) {

  return (
      <span
        style={{ padding: '10px 5px 10px 0px'}}
        onClick={() => {
          console.log('zooming', interpreter.getStack().map(x => x.getStubString()), interpreter.getChildren()[0]?.getStack().map(x => x.getStubString()))
          // options.setStack(interpreter.getStack())
        }}
      >
      <DiscIcon />
      </span>
  )
}

export default RowView