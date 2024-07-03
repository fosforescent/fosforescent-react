import React, { useMemo } from "react"
import { ComboboxOptions } from "@/components/combobox/comboboxOptions"
import { Button } from "@/components/ui/button"
import { Option } from "lucide-react"

import { SelectionPath, IFosNode } from "@fosforescent/fosforescent-js"
import { suggestOption } from "@/lib/suggestOption"
import { FosNodeModule, FosModuleProps } from "./fosModules"
import { FosReactOptions } from ".."
import { InputDiv } from "@/components/combobox/inputDiv"
import { TrellisMeta } from "@syctech/react-trellis"
import { ComboboxEditable } from "@/components/combobox/comboboxEditable"
import { FosWrapper } from "../fosWrapper"
import _ from 'lodash'

const ResourceComponent = ({ node, options, meta, state, updateState }: FosModuleProps) => {


  
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

  const thisRoute = node.getRoute().map(node => node.getId())

  const thisShouldFocus = _.isEqual(state.focusRoute, thisRoute) 
  
  return (<div>
    {<InputDiv
      value={value}
      onChange={handleTextChange}
      placeholder="Task description"
      getFocus={handleGetFocus}
      shouldFocus={thisShouldFocus}
    />}
  </div>)
}




const OptionRowComponent = ({ node, options: fosOptions, meta, state, updateState }: FosModuleProps) => {



  const getDescription = (node: FosWrapper) => {
    const data = node.getData()
    return data.description?.content || ""
  }


  
  const getOptions = (node: FosWrapper) => {
    if (node.getNodeType() === 'option'){
      console.log('node', node)
      return node.getOptions().map((child, index) => {
        return ({value: index.toString(), label: getDescription(child)})
      })
    }else if (node.getNodeType() === 'task'){
      return [{value: '0', label: getDescription(node)}]
    }else{
      console.log('node', node)
      throw new Error('getoptions must be used on a task or option node')
    }
  }

  const options = useMemo(() => {

    const theseOptions = getOptions(node)
    console.log('theseOptions', theseOptions)
    return theseOptions
  }, [state.focusChar, ])



  const selectedIndex = node.getData().option?.selectedIndex || 0


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
    const selectedIndex = node.getData().option?.selectedIndex || 0
    const options = node.getOptions()
    const selectedNode = options[selectedIndex]
    if (!selectedNode){
      console.log('options', options, node)
      throw new Error('selectedNode not found')
    }
    selectedNode.setData({description: {content: value}})
    // node.setData({description: {content: value}})
    console.log('handleTextEdit', value, focusChar, node)
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
    const newChild = node.newChild('task')
    const newChildRoute = newChild.getRoute()
    updateState({
      ...state,
      focusRoute: newChildRoute.map(node => node.getId()),
    })
  }

  const handleDeleteRow = () => {
    meta.trellisNode.delete()
  }
  
  const handleDeleteOption = () => {
    meta.trellisNode.delete()
  }


  const handleGetFocus = () => {
    meta.trellisNode.setFocus(focusChar)
  }

  const focusChar = meta.trellisNode.hasFocus()
  
  const isDragging = state.draggingNode ===  meta.trellisNode.getId()
  const draggingOver = state.draggingOverNode === meta.trellisNode.getId()

  const value = getDescription(node.fosNode())

  const isRoot = !meta.trellisNode.getParent()



  const thisRoute = node.getRoute().map(node => node.getId())

  const thisShouldFocus = _.isEqual(state.focusRoute, thisRoute)

  // if (options.length < 1){
  //   console.log('options', options, node.fosNode())
  //   throw new Error('options.length < 1')
  // }

  console.log('options', options, selectedIndex, node.fosNode())

  return (<div className="flex flex-initial grow">
    <ComboboxEditable
      className='w-full bg-transparent'
      handleTextEdit={handleTextEdit}
      handleChange={handleChange}
      suggestOption={handleSuggestOption}
      getFocus={handleGetFocus}
      hasFocus={!!thisShouldFocus}
      // shouldFocus={thisShouldFocus}
      focusChar={focusChar}
      deleteOption={handleDeleteOption}
      // deleteRow={handleDeleteRow}
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
  icon: <Option />,
  name: 'option',
  HeadComponent: ResourceComponent,
  RowComponent: OptionRowComponent,
}

export default module