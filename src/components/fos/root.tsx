import React, { ReactElement, useEffect, useState } from 'react'
import { IFosInterpreter } from '../../../lib/fos/interpreter/types'
import {  ReactViewOptions } from './client'
import { useRouter, useParams } from 'next/navigation'

import { HomeIcon } from '@radix-ui/react-icons'
import { Button } from "@/components/ui/button"
import { ScreenView } from './screen'
import {
  closestCenter,
  DndContext, 
  DragEndEvent, 
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor, 
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Breadcrumbs = ({
  interpreter,
  options,
}: {
  interpreter: IFosInterpreter,
  options: ReactViewOptions 
}) => {
  const router = useRouter()

  console.log('breadcrumbs', options.remainingPath.map(x => x.getDisplayString()), interpreter.getDisplayString())
  return (<>
    {options.remainingPath.length > 0 && <Button key={0} onClick={() => router.push('/')} variant="secondary"><HomeIcon /></Button>}
    {options.remainingPath.slice(0, options.remainingPath.length - 1).map((item, index) => {
      console.log('url trail', options.urlTrail)
      if (options.urlTrail[index] === undefined) {
        console.log('url trail', options.urlTrail, index, interpreter.getDisplayString(), interpreter.getChildren().map(x => x.getDisplayString()), options.remainingPath.map(x => x.getDisplayString()))
        throw new Error('url trail is undefined')
      }
      const urlPath = reverseArray(item.getStack()).map(x => x.getStubString()).join('/')
      // const urlPath = options.urlTrail[index] as string
      const handleClick = () => {
        router.push('/' + urlPath)
      }
      return (
        <Button key={index + 1} onClick={handleClick} variant="secondary">{item.getName()}</Button>
      )
    })}
  </>)

}

function reverseArray <T>(array: T[]): T[] {
  const copy = [...array]
  copy.reverse()
  return copy
}

const Root = ({
  interpreter,
  options,
}: {
  interpreter: IFosInterpreter
  options: ReactViewOptions
}) => {
  // const router = useRouter()

  // const id = useParams()

  // const [selected, setSelected] = React.useState<number>(0)
  const [activeId, setActiveId] = useState<string | null>(null);

  // const selectedChild = React.useMemo(() => {
  //   const tasks = interpreter.getTasks()
  //   if (!tasks || tasks.length === 0) {
  //     throw new Error('no tasks')
  //   }
  //   return interpreter.getTasks()[selected] as IFosInterpreter
  // }, [interpreter, selected])

  // useEffect(() => {
  //   if (selectedChild !== undefined) {
  //     options.setStack(selectedChild.getStack())
  //   } 
  // }, [selected])

  // useEffect(() => {
  //   if(interpreter && selected === undefined) {
  //     const tasks = interpreter.getTasks()
  //     if (tasks && tasks.length > 0){
  //       setSelected(0)
  //     }
  //     console.log ('tasks here', tasks, interpreter.getDisplayString())
  //     interpreter.getChildren().map((x) => {
  //       console.log('tassks', x.getStubString())
  //       return x
  //     })
  //   }
  // }, [interpreter, selected])

  
  // const handleWorkflowSelect = (e: any) => {
  //   setSelected(e.target.value)
  // }

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      }
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }), 
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      }
    })
  );
  
  function handleDragStart(event: DragStartEvent) {
    const {active} = event;
    
    setActiveId(active.id);
  }
  
  function handleDragEnd(event: DragEndEvent) {
    const {active, over} = event;
    console.log('drag end', active, over)
    
    if (active.id !== over?.id) {
      const reorderItems = (items: (string | null)[]) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over?.id || null);
        
        return arrayMove(items, oldIndex, newIndex);
      };
      console.log('selectedChild info - children', interpreter.getChildren().map(x => x.getDisplayString()), 
      'selectedChildOrder', interpreter.getDisplayString(), 
      'new Order', reorderItems(interpreter.getChildren().map((task) => task.getStubString())))
      const newStack = interpreter.reorderTargetEdges(reorderItems(interpreter.getChildren().map((task) => task.getStubString()))) 
      console.log('reordered edge stack', newStack.map(x => x.getDisplayString()))
      options.setStack(newStack)
    }
    
    setActiveId(null);
  }

  console.log('interpreters', options.remainingPath.map(x => x.getDisplayString()), interpreter.getDisplayString())

  const newOptions = {
    ...options,
    remainingPath: [],
    urlTrail: interpreter.getStack().map(x => x.getStubString()),
  }

  const interpreterToDisplay = options.remainingPath[options.remainingPath.length - 1] || interpreter

  return (
    <DndContext 
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
      <div className='w-full'> 
        <div className='flex w-full'>
          <div className='grow'>
            <Breadcrumbs options={options} interpreter={interpreter}/>
          </div>
          {/* <div className='flex-none'>
            <Select onValueChange={handleWorkflowSelect} value={selected.toString()}>
              <SelectTrigger className="w-[180px]">
                {selectedChild.getName()}
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Workflows</SelectLabel>
              {interpreter.getTasks().map((task: IFosInterpreter, index: number) => (
                <SelectItem key={index} value="index">{task.getName()}</SelectItem>
              ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div> */}
        </div>
        <div className="w-full">
        { <ScreenView interpreter={interpreterToDisplay} options={newOptions} dragging={activeId} />}
        </div>
        {/* <div>
          {path.map((client, index) => (
            <BreadcrumbComponent
              key={index}
              name={client.getCurrentName()}
              forceUpdate={forceUpdate}
              url={getURLFromPath(path.slice(0, index + 1))}
              current={index === path.length - 1}
            />
          ))}
        </div>
        <TaskView client={currentClient} forceUpdate={forceUpdate} /> */}
      </div>
    </DndContext>
  )
}

export default Root
