import React, { ReactElement, useEffect, useState } from 'react'
import { IFosInterpreter } from 'fosforescent-js'
import {  ReactViewOptions } from '../../lib/client'

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

  return (<>
    {options.breadcrumbs.map((item, index) => {
      const handleClick = () => {
        item.setPath()
      }
      return (
        <Button key={index + 1} onClick={handleClick} variant="secondary">{item.interpreter.getName()}</Button>
      )
    })}
  </>)
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
      // options.setStack(newStack)
      
    }
    
    setActiveId(null);
  }


  const newOptions = {
    ...options,
    remainingPath: [],
    urlTrail: interpreter.getStack().map(x => x.getStubString()),
  }

  // const interpreterInstruction = React.useMemo(() => {
  //   return interpreter.getInstruction()
  // }, [interpreter])

  // const ScreenView = React.useMemo(() => {
  //   const screenComponent =  interpreter.getAction('showScreen')
  //   return screenComponent
  // }, [interpreterInstruction])

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
        { <ScreenView interpreter={interpreter} options={newOptions} dragging={activeId} />}
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
