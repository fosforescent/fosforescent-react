import React, { useMemo } from "react"
import { ComboboxOptions } from "@/components/combobox/comboboxOptions"
import { Button } from "@/components/ui/button"
import { Option, Wand } from "lucide-react"

import { SelectionPath, IFosNode } from "@fosforescent/fosforescent-js"
import { suggestOption } from "@/lib/suggestOption"
import { FosNodeModule, FosModuleProps } from "./fosModules"
import { FosReactOptions } from ".."
import { InputDiv } from "@/components/combobox/inputDiv"
import { TrellisMeta } from "@syctech/react-trellis"
import { ComboboxEditable } from "@/components/combobox/comboboxEditable"
import { FosWrapper } from "../fosWrapper"
import _ from 'lodash'
import { suggestMagic } from "@/lib/suggestMagic"

const ResourceComponent = ({ node, options, meta, state, updateState }: FosModuleProps) => {


  const canPrompt = options?.canPromptGPT && options?.promptGPT

  const handleSuggestMagic = async () => {
    console.log('handleSuggestMagic', options)
    if (options?.canPromptGPT && options?.promptGPT){
      try {
        await suggestMagic(options.promptGPT, node.fosNode())
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

  const thisRoute = node.getRoute().map(node => node.getId())

  const thisShouldFocus = _.isEqual(state.focusRoute, thisRoute) 

  return (<div>
    {<OptionRowComponent
      node={node}
      options={options}
      meta={meta}
      state={state}
      updateState={updateState}
    />}
    {canPrompt && <Button
        onClick={handleSuggestMagic}
        className={`bg-emerald-900 text-white-900 px-2 shadow-none`}
      >
      <Wand height={'1rem'} width={'1rem'}/>
    </Button>}
  </div>)
}




const OptionRowComponent = ({ node, options: fosOptions, meta, state, updateState }: FosModuleProps) => {



  const getDescription = (node: FosWrapper) => {
    const data = node.getData()
    return data.description?.content || ""
  }


  
  const getOptions = (node: FosWrapper) => {
    if (node.getNodeType() === 'option'){
      // console.log('node', node)
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
    // console.log('theseOptions', theseOptions)
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
    // console.log('handleTextEdit', value, focusChar, node)
  }

  const handleChange = (value: string) => {
    node.setData({option: {selectedIndex: parseInt(value)}})
  }


  const handleSetFocus = (newFocusChar: number) => {
    meta.trellisNode.setFocus(newFocusChar)
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    meta.trellisNode.keyUpEvents(e)

    // console.log('keybup', focusChar, value.length)
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

  const value = getDescription(node)

  const isRoot = !meta.trellisNode.getParent()



  const thisRoute = node.getRoute().map(node => node.getId())

  const thisShouldFocus = _.isEqual(state.focusRoute, thisRoute)

  // if (options.length < 1){
  //   console.log('options', options, node.fosNode())
  //   throw new Error('options.length < 1')
  // }
  const canPrompt = fosOptions?.canPromptGPT && fosOptions?.promptGPT

  console.log('canPrompt', canPrompt)

  return (<div className="flex flex-initial grow">
    <ComboboxEditable
      className='w-full bg-transparent'
      handleTextEdit={handleTextEdit}
      handleChange={handleChange}
      suggestOption={canPrompt ? handleSuggestOption : null}
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