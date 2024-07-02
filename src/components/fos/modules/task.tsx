import { ComboboxOptions } from "@/components/combobox/comboboxOptions"
import { Button } from "@/components/ui/button"
import { PenBox } from "lucide-react"

import { SelectionPath, IFosNode } from "@fosforescent/fosforescent-js"
import { suggestOption } from "@/lib/suggestOption"
import { FosNodeModule, FosModuleProps } from "./fosModules"
import { FosReactOptions } from ".."
import { InputDiv } from "@/components/combobox/inputDiv"
import { TrellisMeta } from "@syctech/react-trellis"

import { ComboboxEditableTask }  from "@/components/combobox/comboboxEditableTask"
import { FosWrapper } from "../fosWrapper"


const ResourceComponent = ({ node, options, meta }: FosModuleProps) => {


  
  const handleSuggestOption = async () => {
    if (options?.canPromptGPT && options?.promptGPT){
      try {
        await suggestOption(options.promptGPT, node.fosNode())
      } catch (err) {
        options?.toast && options.toast({
          title: 'Error',
          description: `No suggestions could be generated: ${err}`,
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

  const thisType = node.getNodeType()

  const value = node.getData().description?.content || ""

  const handleTextChange = (value: string, focusChar: number | null) => {
    node.setData({
      description: {
        content: value,
      }
    })
    meta.trellisNode.setFocus(focusChar)

  }

  const handleGetFocus = () => {
    meta.trellisNode.setFocus(meta.focus.focusChar)
  }
  
  return (<div>
    {<InputDiv
      value={value}
      onChange={handleTextChange}
      placeholder="Task description"
      getFocus={handleGetFocus}
    />}
  </div>)
}




const WorkflowRowComponent = ({ node, options: fosOptions, meta, state, updateState }: FosModuleProps) => {



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

  const options = getOptions(node.fosNode())



  const selectedIndex = node.getData().option?.selectedIndex || 0
  const locked = false



  const children = node.getChildren()


  if(selectedIndex === undefined) {
    console.log('selectedOption', options)
  }

  const suggestOptions = async (node: IFosNode) => {
    fosOptions?.promptGPT && suggestOption(fosOptions.promptGPT, node)
  }

  
  const handleUndo = () => {
    fosOptions.undo && fosOptions.canUndo && fosOptions.undo()
  }

  const handleRedo = () => {
    fosOptions.redo && fosOptions.canRedo && fosOptions.redo()
  }


  const handleSuggestOption = async () => {
    suggestOptions(node.fosNode())
  }
  
  
  const handleTextEdit = (value: string, focusChar: number | null) => {
    meta.trellisNode.setFocus(focusChar)
    node.setData({description: {content: value}})
  }

  const handleChange = (value: string) => {
    node.setData({option: {selectedIndex: parseInt(value)}})
  }


  const handleSetFocus = (newFocusChar: number) => {
    meta.trellisNode.setFocus(newFocusChar)
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    meta.trellisNode.keyUpEvents(e)

    console.log('tda', focusChar, value.length)
    if (e.key === 'Enter' && focusChar === value.length){
      meta.trellisNode.moveFocusDown()
    }
    if (e.key === 'Backspace' && focusChar === 0){
      meta.trellisNode.moveFocusUp()
    }
    // if (e.altKey && e.ctrlKey){
    //   console.log('test', selectedIndex, node.getChildren().length );
    //   handleChange( selectedIndex ? ( (selectedIndex - 1 + (children.length)) % children.length ).toString() : "0" )
    // }

  }
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    meta.trellisNode.keyDownEvents(e)
  }

  const handleAddOption = () => {
    const thisParent = node.getParent()
    if (!thisParent){
      throw new Error('Cannot add option to task with no parent')
    }
    const optionNode = node.newChild("option")

    console.log('optionNode', optionNode.getId(), thisParent)

    const newThisNode = optionNode.newChild("task")
    const thisNodeData = node.getData()
    newThisNode.setData({ 
      ...thisNodeData,
      option: {
        selectedIndex: thisNodeData.option?.selectedIndex || 0,
      } 
    })
    newThisNode.setChildren(node.getChildren())
    
    const newParentChildren = thisParent.getChildren().map(child => {

      console.log()
      if(child.getId() === node.getId()){
        return optionNode
      } else {
        return child
      }
    })

    console.log('newParentChildren', newParentChildren, thisParent.getChildren())

    thisParent.setChildren(newParentChildren)


    const newTaskNode = optionNode.newChild("task")


    console.log('newTaskParent', optionNode)

    const newTaskIndex = optionNode.fosNode().getChildren().findIndex(child => {
      // console.log('child.getId() === newTaskNode.getId()', child.getId(), newTaskNode.getId())
      return child.getId() === newTaskNode.getId()
    })

    if (newTaskIndex < 0){
      console.log("optionNode in parent", optionNode)
      console.log('newTaskIndex', newTaskIndex, optionNode.getChildren(), newTaskNode.getId())
      throw new Error('Task node not found in parent')
    }


    const optionNodeData = optionNode.getData()
    console.log('newTaskIndex', newTaskIndex, optionNodeData.option?.selectedIndex, optionNodeData.option?.selectedIndex === undefined)

    optionNode.setData({
      ...optionNodeData,
      option: {
        selectedIndex: newTaskIndex
      }
    })

    updateState({
      ...state,
      focusRoute: newTaskNode.getRoute().map(node => node.getId())
    })

    console.log("ADD OPTION", thisParent);

    return newTaskNode
 
  }

  const handleDeleteRow = () => {
    meta.trellisNode.delete()
  }


  const handleGetFocus = () => {
    meta.trellisNode.setFocus(focusChar)
  }

  const focusChar = meta.trellisNode.hasFocus()
  
  const isDragging = state.draggingNode ===  meta.trellisNode.getId()

  // console.log('isDragging', state)

  const draggingOver = state.draggingOverNode === meta.trellisNode.getId()

  const value = getDescription(node.fosNode())

  const isRoot = !meta.trellisNode.getParent()

  // console.log('isRoot', isRoot, meta.trellisNode.getId())

  return (<div className="flex flex-initial grow">
    <ComboboxEditableTask 
      className='w-full bg-transparent'
      handleTextEdit={handleTextEdit}
      // handleChange={handleChange}
      suggestOption={handleSuggestOption}
      getFocus={handleGetFocus}
      hasFocus={!!focusChar}
      focusChar={focusChar}
      deleteRow={handleDeleteRow}
      isDragging={isDragging}
      draggingOver={draggingOver}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      selectedIndex={selectedIndex}
      values={options}
      locked={fosOptions.locked || false }
      setFocus={handleSetFocus}
      // defaultValue={selectedNodeDescription}
      defaultValue={selectedIndex.toString()}
      addOption={handleAddOption}
      />

  </div>)
}








const module: FosNodeModule = {
  icon: <PenBox />,
  name: 'workflow',
  HeadComponent: ResourceComponent,
  RowComponent: WorkflowRowComponent,
}

export default module