import React from 'react'
// import { TreeIcon } from '@radix-ui/react-icons'
import { FosNodeData, FosContext, FosPath, FosContextData, FosTrail, FosNode, FosRoute } from "../../fos/temp-types"
// import RowView from './row';
import { StepRow } from './step';
import { MergeRow } from './mergeRow';

import { Button } from '@/components/ui/button';
import { TrashIcon, PlusCircledIcon, MinusIcon, PlusIcon, MagicWandIcon  } from '@radix-ui/react-icons'
import { DragOverlay } from '@dnd-kit/core';
import { useWindowSize } from "../window-size";
import { BrainCircuit, CircleEllipsis } from "lucide-react";
import { suggestSteps } from '@/lib/suggestSteps';

import { suggestMagic } from '@/lib/suggestMagic';
import { FosModule } from './modules/fosModules';

import { FosReactOptions } from '.';


export const RowsComponent = ({
  parentNode,
  rows,
  context,
  // value,
  dragging,
  rowDepth,
  dragOverInfo,
  locked,
  activeModule,
  options
}:{
  parentNode: FosNode,
  rows: FosNode[],
  context: FosContext,
  dragging:  { id: string, node: FosNode } | null,
  // value?: any
  rowDepth: number
  locked: boolean
  dragOverInfo:  { id: string, position: 'above' | 'below' | 'on', node: FosNode } | null,
  activeModule?: FosModule,
  options: FosReactOptions
}) => {
  

  const handleAddNewRow = (index?: number) => {

    const newNodes = context.addNewTaskToOption(parentNode.getRoute(), index);
    context.setNodes(newNodes.data.nodes)
  }

  const [showMore, setShowMore] = React.useState(false)




  
  // console.log('canSuggest', canSuggest, appState.info.subscription?.apiCallsAvailable, appState.info.subscription?.apiCallsUsed, appState.info.subscription, appState.info, appState)

  const handleSuggest = async () => {
    if (options?.canPromptGPT && options?.promptGPT){
      const [newContext, newSubscriptionData] = await suggestSteps(options.promptGPT, parentNode)
      if (newContext){
        context.setNodes(newContext.data.nodes)
      }else{
        options?.toast && options.toast({
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
  
  const handleMagicWand = async () => {
    if (options?.canPromptGPT && options?.promptGPT){
      const newContext = await suggestMagic(options.promptGPT, parentNode)
      if (newContext){
        context.setNodes(newContext.data.nodes)
      }else{
        options?.toast && options.toast({
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

  const items = rows.map((node: FosNode, index: number) => {

    const nodeId = node.getNodeId()
    const nodeType = node.getNodeType()

    return {
      id: `${nodeType}-${nodeId}`,
      data: { node }
    }
  })

  const updateNodes = (newNodes: FosContext) => {
    // console.log('updateNodesCalledFromRows', newNodes.data.nodes)
    context.setNodes(newNodes.data.nodes)
  }

  // console.log('rows', rows)

  const windowSize = useWindowSize()
  const isSmallWindow = windowSize.width !== undefined && windowSize.width < 500

  return (
  <div>

      {rows.length > 0 && 
        rows.map((node, i) => {

          const moveLeft = () => {
            console.log('moveLeft', i)
            context.moveNodeLeft(node.getRoute())
          }

          const moveRight = () => {
            console.log('moveRight', i)
            context.moveNodeRight(node.getRoute())
          }

          const deleteRow = () => {
            console.log('deleteRow', i)
            node.deleteNode()
          }

          const moveUp = () => {
            console.log('moveUp', i)
          }

          const moveDown = () => {
            console.log('moveDown', i)
          }

          const deleteOption = (index: number) => {
            // console.log('deleteOption', i)
            node.deleteOption(index)
          }

          const handleAddOption = (index?: number) => {
            console.log('handleAddOption', index)
            const newNodes = context.addOptionToNode(node.getRoute(), undefined, index);
            updateNodes(newNodes)
          }

          const handleAddYoungerSibling = () => {
            context.addYoungerSibling(node.getRoute())
          }
        
        

        
          const item = items[i]

          if (item === undefined) {
            throw new Error('item is undefined')
          }
          
          return (<div key={i} className={`HERE-${i}`}>
              <DragRow
                item={item}
                node={node}
                context={context}
                locked={locked}
                rowDepth={rowDepth}
                addOption={handleAddOption}
                addYoungerSibling={() => handleAddYoungerSibling()}
                moveLeft={moveLeft}
                moveRight={moveRight}
                deleteRow={deleteRow}
                updateNodes={updateNodes} 
                moveDown={moveDown}
                moveUp={moveUp}
                deleteOption={deleteOption}
                dragging={dragging}
                dragOverInfo={dragOverInfo}
                index={i}
                activeModule={activeModule}
                options={options}
                />
          </div>)
      })}
  {parentNode.getRoute().length - context.data.trail.length === 0 && <div className='py-3' key={`-1`}>
      <Button 
        onClick={() => handleAddNewRow()}
        className={` bg-secondary text-white-900 hover:bg-secondary/80 h-9 ml-3`}
        // style={{padding: !isSmallWindow ? '15px 15px 15px 15px' : '31px 3px'}}
        >
        <PlusCircledIcon height={'1.5rem'} width={'1.5rem'}/>
      </Button>
      {options?.promptGPT && <Button className='bg-emerald-900 h-9 ml-3 hover:brightness-150 hover:bg-emerald-900' disabled={!options?.canPromptGPT} onClick={handleSuggest} title="Get suggested steps"><BrainCircuit /></Button>}
      {options?.promptGPT && <Button className='bg-emerald-900 h-9 ml-3 hover:brightness-150 hover:bg-emerald-900' disabled={!options?.canPromptGPT} onClick={handleMagicWand} title="Get suggested steps"><MagicWandIcon height={"1.5rem"} width={"1.5rem"} /></Button>}
      {/* <Button onClick={() => setShowMore(!showMore)}  variant='ghost'>
        {showMore ? <CircleEllipsis /> : <CircleEllipsis className='rotate-90' />}
      </Button> */}

    </div>}
  </div>)
}


const DragRow = ({
  item,
  context, 
  dragging,
  dragOverInfo,
  index,
  updateNodes,
  rowDepth,
  addYoungerSibling,
  moveLeft,
  moveUp, 
  moveDown,
  deleteOption,
  moveRight,
  deleteRow,
  addOption,
  locked,
  node,
  options,
  activeModule
} : {
  item: { id: string, data: { node: FosNode } }
  index: number
  dragging:  { id: string, node: FosNode } | null,
  dragOverInfo:  { id: string, position: 'above' | 'below' | 'on', node: FosNode } | null,
  updateNodes: (nodes: any) => void
  rowDepth: number
  context: FosContext
  // handleTextEdit: (value: string) => void,
  // handleChange: (value: string) => void,
  addYoungerSibling: () => void,
  moveLeft: () => void,
  moveRight: () => void,
  deleteRow: () => void,
  addOption: () => void,
  moveUp: () => void,
  moveDown: () => void,
  deleteOption: (index: number) => void,
  locked: boolean,
  node: FosNode,
  activeModule: FosModule | undefined
  options: FosReactOptions
}) => {

  


  // const [nodeOptions, selectedNode, selectedIndex] = context.getNodeOptionsAndObj(rightNode);

  const nodeOptions = node.getNodeData()


  const handleChange = (e: string) => {
    console.log('handleChange', e)
    const updatedNode = {...nodeOptions , selectedOption: parseInt(e)}
    const newContext = context.setNode(node, updatedNode)
    updateNodes(newContext)
    // selectStateSet(e.target.value)
  }

  const handleTextEdit = (e: string, focusChar: number) => {
    // console.log('handleTextEdit', e, focusChar)
    // const updatedNode = {...selectedNodeValue, value: {...selectedNodeValue.value, description: e}}
    const updatedNode = {...node.getOptionContent(), description: e}
    const newNodeData = node.updateOptionData(updatedNode)
    const newContext = context.setNode(node, newNodeData)
    const newContextWithNewFocus = newContext.setFocus(node.getRoute(), focusChar)
    updateNodes(newContextWithNewFocus)
  }

  const toggleCollapse = () => {
    const nodeData = node.getNodeData()
    const updatedNode = {...nodeData, collapsed: !nodeOptions.collapsed}
    console.log('collapseNodeData', nodeData, nodeOptions.collapsed, updatedNode)
    node.setNodeData(updatedNode)
  }


  // console.log('dragrow', item, trail,)
  return (
    // <RowComponent key={index} nodes={nodes} left={leftNode} right={rightNode} dragging={dragging} blank={false} updateRow={updateNodes} />
      <div  className="flex w-full">
        {!node.hasMerge() ? (<StepRow
          node={node}
          dragItem={item}
          updateNodes={updateNodes} 
          dragging={dragging}
          dragOverInfo={dragOverInfo}
          locked={locked}
          handleChange={handleChange}
          handleTextEdit={handleTextEdit}
          addYoungerSibling={addYoungerSibling}
          addOption={addOption}
          moveRight={moveRight}
          moveLeft={moveLeft}
          deleteRow={deleteRow}
          rowDepth={rowDepth}
          toggleCollapse={toggleCollapse}
          moveDown={moveDown}
          moveUp={moveUp}
          deleteOption={deleteOption}
          activeModule={activeModule}
          options={options}
        />) : (<MergeRow
          node={node}
          dragItem={item}
          updateNodes={updateNodes} 
          dragging={dragging}
          dragOverInfo={dragOverInfo}
          locked={locked}
          handleChange={handleChange}
          moveRight={moveRight}
          moveLeft={moveLeft}
          rowDepth={rowDepth}
          toggleCollapse={toggleCollapse}
          moveDown={moveDown}
          moveUp={moveUp}
          options={options}
        />)}
        {/* <DragOverlay>
          {dragging === item.id ? <DragOverlayDisplay 
            node={node}
          /> : null}
        </DragOverlay> */}
      </div>
  )

}



// const DragOverlayDisplay = ({ 
//   node
// } : {
//   node: FosNode
// }) => {



//   return (<div
//     className="w-full h-16 bg-blue-100" 
//     style={{border: '5px solid green'}}>
//     <div className="flex justify-center items-center h-full">
//       <div className="text-2xl">
//         {node.getNodeId()}
//       </div>
//     </div>
//   </div>)

// }
