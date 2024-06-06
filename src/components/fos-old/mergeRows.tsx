
// import { TreeIcon } from '@radix-ui/react-icons'
import { FosNodeData, FosContext, FosPath, FosContextData, FosTrail, FosNode, FosRoute } from "@fosforescent/fosforescent-js"
// import RowView from './row';
import { StepRow } from '../fos/rowBody';
import { MergeRow } from './mergeRow';

import { Button } from '@/components/ui/button';
import { TrashIcon, PlusCircledIcon, MinusIcon, PlusIcon  } from '@radix-ui/react-icons'
import { DragOverlay } from '@dnd-kit/core';
import { useWindowSize } from "../window-size";
import { FosModule } from "../fos/modules/fosModules";
import { FosReactOptions } from "../fos";

export const MergeRowsComponent = ({
  parentNode,
  context,
  // value,
  dragging,
  rowDepth,
  dragOverInfo,
  locked,
  activeModule,
  options: fosReactOptions

}:{
  parentNode: FosNode,
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

  const rows = parentNode.getMergeChildren()
  const selectedIndex = parentNode.getMergedIndex()
 


  const items = rows.map(({ node } : { node: FosNode } , index: number) => {

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
        rows.map(({ node, added, removed } , i) => {

          const nodeOptions = node.getNodeData()

          const handleChange = (e: string) => {
            console.log('handleChange', e)
            const updatedNode = {...nodeOptions , selectedOption: parseInt(e)}
            const newContext = context.setNode(node, updatedNode)
            updateNodes(newContext)
            // selectStateSet(e.target.value)
          }

        
          const toggleCollapse = () => {
            const nodeData = node.getNodeData()
            const updatedNode = {...nodeData, collapsed: !nodeOptions.collapsed}
            console.log('collapseNodeData', nodeData, nodeOptions.collapsed, updatedNode)
            node.setNodeData(updatedNode)
          }
        


          const moveLeft = () => {
            console.log('moveLeft', i)
            context.moveNodeLeft(node.getRoute())
          }

          const moveRight = () => {
            console.log('moveRight', i)
            context.moveNodeRight(node.getRoute())
          }


          const moveUp = () => {
            console.log('moveUp', i)
          }

          const moveDown = () => {
            console.log('moveDown', i)
          }
        
          const item = items[i]

          if (item === undefined) {
            throw new Error('item is undefined')
          }
          
          return (<div key={i} className={`HERE-${i}`}>
              <MergeRow
                node={node}
                dragItem={item}
                dragging={dragging}
                dragOverInfo={dragOverInfo}
                locked={locked}
                moveLeft={moveLeft}
                moveRight={moveRight}
                moveUp={moveUp}
                moveDown={moveDown}
                toggleCollapse={toggleCollapse}
                handleChange={handleChange}
                rowDepth={rowDepth}
                added={added}
                removed={removed}
                options={fosReactOptions}
              />
          </div>)
      })}

  </div>)
}

