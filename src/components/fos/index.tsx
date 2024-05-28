import React, { ReactElement, useEffect, useState } from 'react'


import { HomeIcon } from '@radix-ui/react-icons'
import { Button } from "@/components/ui/button"
import { RootScreenView } from './root'
import { MergeScreenView } from './mergeScreen'
import {
  closestCorners,
  pointerWithin,
  DndContext, 
  DragEndEvent, 
  DragOverEvent, 
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor, 
  useSensor,
  useSensors,
  ClientRect,
  useDroppable,
  useDndContext,
  Active,
  DroppableContainer,
  Collision,
  Over,

} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  Coordinates
} from '@dnd-kit/utilities';

import { FosContext, FosNodeContent, FosNodeData, FosContextData, FosPath, FosTrail, FosNode } from '../../fos/temp-types';
import { DroppableContainersMap } from '@dnd-kit/core/dist/store/constructors';

import { StepRow } from './step';
import { FosModule } from './modules/fosModules'
import initData from './initialData'
import { ThemeProvider } from '../theme-provider'


export type FosReactOptions = Partial<{
  canPromptGPT: boolean,
  promptGPT: (systemPrompt: string, userPrompt: string, options?: { temperature?: number }) => Promise<{
    choices: {message: { content: string, role: string}, finishReason: string}[]
  }>,
  toast: (toastOpts: {
    title: string, 
    description: string,
    duration: number
  }) => void,
  canUndo: boolean,
  undo: () => void,
  canRedo: boolean,
  redo: () => void,
  modules: {
    core: string[],
    custom: FosModule[]
  },
  theme: "light" | "dark" | "system",
}>



export const MainView = ({ 
  data,
  setData,
  options,
} : {
  data: FosContextData | undefined,
  setData: (data: FosContextData) => void,
  options?: FosReactOptions
}) => {


  const context = React.useMemo(() => {
 
    const setDataWrapped = (e: any) => {
      console.log("Setting Data", e.focus)
      // console.trace()
      setData(e)
    }

    const dataToUse = data ? data : initData
    const newContext = new FosContext(dataToUse, setDataWrapped)
    return newContext
  }, [data, setData])


  const [activeId, setActiveId] = useState< { id: string, node: FosNode } | null>(null);

  const [dragOverInfo, setDragOverInfo] = useState<{ id: string, position: 'above' | 'below' | 'on', node: FosNode } | null>(null);


  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
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
  
  const getDragOverInfo = (over: Over | null, active: Active | null): {
    id: string;
    position: 'above' | 'below' | 'on';
    node: FosNode;
  } | null => {
    if (!over) {
      return null
    }
    if (!active) {
      return null
    }
    const currentActive = active.rect.current.translated;
    if (!currentActive) {
      return null
    }

    const currentPosition = dragOverInfo?.position || "on";

    const correction = currentPosition === 'below' ? 1 : currentPosition === 'above' ? -1 : 0;
    

    const activeCenter = currentActive.top + (currentActive.height / 2) + (correction * 12);

    const overCenter = over.rect.top + (over.rect.height / 2);

    const onHalfHeight = currentActive.height / 5;

    

    const above = activeCenter < overCenter - onHalfHeight;
    const below = activeCenter > overCenter + onHalfHeight;

    // const topYPos = over.rect.top + (over.rect.height / 2 * (currentActive.left - over.rect.left) / over.rect.width);
    // const bottomYPos = over.rect.top + over.rect.height - (over.rect.height / 2 * (currentActive.left - over.rect.left) / over.rect.width);

    // Corrected conditions
    // const above = activeCenter < topYPos;
    // const below = activeCenter > bottomYPos;
    const on = !above && !below; // Simplified check for 'on'

    // console.log('situation', above, below, on, topYPos, bottomYPos);
    // console.log('active', activeCenter);
    // console.log('target', topYPos, bottomYPos);
    if (above) {
      console.log('above', over.id);
    }
    if (below) {
      console.log('below', over.id);
    }
    if (on) {
      console.log('on', over.id);
    }


    const position = on ? 'on' : above ? 'above' : 'below' as "above" | "below" | "on"; // Adjusted ordering and removal of unnecessary null check
    const newDragOverInfo = { id: over.id, position, node: over.data.current?.node };

    return newDragOverInfo;
};

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    if (active && active.data.current) {
      setActiveId({ id: active.id, node: active.data.current.node });
    }
    // console.log('drag start', active.id, active.data, event)
  }
  
  function handleDragOver(event: DragOverEvent) {
    const { over, active } = event;
    // console.log('drag over', over, active, event, dragOverInfo)
    
    const dragInfo = getDragOverInfo(over, active);
    if (dragInfo) {
      if (dragInfo.id !== dragOverInfo?.id || dragInfo.position !== dragOverInfo?.position) {
        setDragOverInfo(dragInfo);
      }
    }
  }

  function handleDragEnd(event: DragEndEvent) {
    const {active, over} = event;
    console.log('drag end', active, over, event, dragOverInfo)
    // const dragInfo = getDragOverInfo(over, active);
    // setDragOverInfo(dragInfo);
    const dragInfo = dragOverInfo
    console.log('dragInfo', dragOverInfo)
    if (!over || !over.data.current){
      setActiveId(null);
      setDragOverInfo(null);
      return
    }
    if(!active || !active.data.current){
      setActiveId(null);
      setDragOverInfo(null);
      return
    }
    
    if (active.id === over?.id) {
      setActiveId(null);
      setDragOverInfo(null);
      return
    }
    if(!dragOverInfo){
      throw new Error('no dragInfo, but over is not null')
    }

    const activeNode = active.data.current.node
    const overNode = over.data.current.node



    if (dragInfo?.position === 'on') {
      context.moveNodeToTopChild(activeNode, overNode)
    } else if (dragInfo?.position === 'above') {
      context.moveNodeToOlderSibling(activeNode, overNode)
    } else if (dragInfo?.position === 'below') {
      context.moveNodeToYoungerSibling(activeNode, overNode)
    }

    

    // const reorderItems = (items: (string | null)[]) => {
    //   const oldIndex = items.indexOf(active.id);
    //   const newIndex = items.indexOf(over?.id || null);
    //   console.log('reorderItems', oldIndex, newIndex, items, active.id, over?.id)
      
    //   return arrayMove(items, oldIndex, newIndex);
    // };

    // const nodesWithId = node.getOptionContent().content.map((edge: [string, string]) => {
    //   console.log('edge', edge)
    //   return edge.join('-')
    // })
    // const newNodesWithId = reorderItems(nodesWithId)

    // console.log('newNodesWithId', newNodesWithId)

    // const newContent = newNodesWithId.filter((edge: string | null) => edge !== null).map((edge: string | null) => (edge as string).split('-')) as [string, string][]

    // console.log('newContent', newContent)
    // const nodeOptionData = node.getOptionContent()
    
    // const newContext = context.updateNodeOptionData(trail, { ...nodeOptionData, content: newContent })

    // context.setNodes(newContext.data.nodes)

    
    setActiveId(null);
    setDragOverInfo(null);
  }
    


  const trail = context.data.trail
  const setTrail = (newTrail: FosTrail) => {
    // console.log('setTrail', newTrail)
    context.setTrail(newTrail)
  }

  const node = context.getNode(trail);

  const customCollisionDetection = (args: {
    active: Active;
    collisionRect: ClientRect;
    droppableContainers: DroppableContainer[];
    pointerCoordinates: Coordinates | null;
}):Collision[] => {
    // const pointerCollisions = pointerWithin(args);

    // if (pointerCollisions.length > 0) {
    //   return pointerCollisions;
    // }
    if (!args.active.rect.current.translated || !args.active.rect.current.initial) {
      return []
    }
    if(!args.active.rect.current.translated){
      return []
    }

    // get items with y collisions
    const yTargets = args.droppableContainers.map((container) => {
      if(!container.rect.current) {
        return null
      }
      const aYTop = container.rect.current.top
      const ayTopCorrected = container.rect.current.top + 12 // (container.rect.current.height / 3) + 12
      const aYBottom = container.rect.current.top + container.rect.current.height 
      const aYBottomCorrected = container.rect.current.top + container.rect.current.height - 12 // (container.rect.current.height / 3) - 12
      const aYCenter = container.rect.current.top + container.rect.current.height / 3
      const bYTop = args.active.rect.current.translated!.top
      const bYBottom = args.active.rect.current.translated!.top + args.active.rect.current.translated!.height
      const bYCenter = args.active.rect.current.translated!.top + args.active.rect.current.translated!.height / 2


      if (bYCenter > ayTopCorrected && bYCenter < aYBottomCorrected){
        // get container x center and compare to window x center

        return container
      }
      return null

    }).filter((collision) => collision !== null);



    if (yTargets.length > 1) {
      const windowCenter = window.innerWidth / 2

      const xTranslation = args.active.rect.current.translated?.left - args.active.rect.current.initial?.left / window.innerWidth

      const yItemsWidth = yTargets
        .filter((container) => container !== null && container.rect.current)
        .map((container) => { return container!.rect.current!.width + 10})
        .reduce((x, y) => x + y)

      const offsetProportion = (yItemsWidth < window.innerWidth) ? yItemsWidth : window.innerWidth

      const [distance, closest] = yTargets.reduce((prev: [number, DroppableContainer | null], container: DroppableContainer | null) => {
        if(!container || !container.rect.current) {
          return prev
        }
        if(!args.active.rect.current.translated){
          return prev
        }
        if(!args.active.rect.current.initial){
          return prev
        }
        const containerCenter = container.rect.current.left + container.rect.current.width / 2
        const itemOffset = containerCenter - (offsetProportion / 2)
        const diff = Math.abs(itemOffset - xTranslation)
        // console.log(containerCenter, windowCenter, itemOffset, diff, prev[0])
        return (prev[0] < diff) ? prev : [diff, container] as [number, DroppableContainer | null]
      }, [window.innerWidth, null] as [number, DroppableContainer | null])

      if (closest === null) {
        return []
      } else {
        return [{ id: closest.id}]
      }
    }else{
      if (!yTargets[0]) {
        return []
      }
      return [{id: yTargets[0].id}  as Collision]
    }

  }


  return (
    <ThemeProvider defaultTheme={options?.theme || "system"}>
    <DndContext 
        sensors={sensors}
        collisionDetection={customCollisionDetection}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
      >
      <div className='w-full fos-root' > 
        <div className='flex w-full px-3 items-center overflow-x-scroll no-scrollbar'>
            {trail.length > 1 && trail.map((item, index) => {
              

              const breadcrumbTrail = trail.slice(0, index + 1) as [[string, string], ...[string, string][]]

              return (<BreadcrumbItem key={index} index={index} breadcrumbTrail={breadcrumbTrail} item={item} trail={trail} context={context} setTrail={setTrail} dragging={activeId} dragOverInfo={dragOverInfo} />)
            })}
        </div>
        <div className="w-full">
          {!node.hasMerge() 
            ? (<RootScreenView context={context} node={node} dragging={activeId} dragOverInfo={dragOverInfo}  options={options || {}} />) 
            : (<MergeScreenView context={context} node={node} dragging={activeId} dragOverInfo={dragOverInfo} options={options || {}} />)}
        </div>

      </div>

    </DndContext>
    </ThemeProvider>
  )
}


export default MainView




const BreadcrumbItem = ({
  index,
  breadcrumbTrail,
  item,
  trail,
  context,
  dragging,
  dragOverInfo,
  setTrail
} : {
  index: number,
  breadcrumbTrail: FosTrail,
  item: [string, string],
  trail: FosTrail,
  context: FosContext,
  dragging:  { id: string, node: FosNode } | null,
  dragOverInfo: { id: string, position: 'above' | 'below' | 'on'} | null,
  setTrail: (newTrail: FosTrail) => void
}) => {


  const node = context.getNode(breadcrumbTrail)
  
  const nodeId = node.getNodeId()
  const nodeType = node.getNodeType()

  const {
    isOver,
    setNodeRef,
    node: dndNode
   } = useDroppable({
    id: `${nodeType}-${nodeId}`,
    data: { node }
  });

  // console.log('dndNode', dndNode)

  // console.log('nodeid', `${nodeType}-${nodeId}`)
  // console.log('breadcrumbitem', item, breadcrumbTrail, index, trail)


  const displayNode = context.getNode(breadcrumbTrail)
  const displayNodeData = displayNode.getOptionContent()

  const truncatedDescription = displayNodeData.description.length > 20 ? displayNodeData.description.slice(0, 17) + '...' : displayNodeData.description

  const displayString = (breadcrumbTrail.length === 1) ? <HomeIcon /> :  truncatedDescription
  // console.log('displayString', displayString)


  const handleClick = () => {
    // console.log('handleClick', breadcrumbTrail, item, index, trail)
    setTrail(breadcrumbTrail)
  }

  // console.log('isOver', isOver, dragOverInfo, dragging)



  // const dndContext = useDndContext();
  // console.log('dndContext1', dndContext.activeNodeRect)
  // console.log('dndContext2', dndContext.droppableRects)

  return (<div className={isOver ? "scale-110 py-0 px-1" : `py-2 px-1`} ref={setNodeRef}>
    <Button key={index + 1} onClick={handleClick} variant="secondary" disabled={index === trail.length - 1}>{displayString}</Button>
  </div>)
}
