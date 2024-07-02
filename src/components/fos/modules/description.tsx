import { ComboboxOptions } from "@/components/combobox/comboboxOptions"
import { Button } from "@/components/ui/button"
import { PenBox } from "lucide-react"

import { SelectionPath, IFosNode } from "@fosforescent/fosforescent-js"
import { suggestOption } from "@/lib/suggestOption"
import { FosDataModule, FosModuleProps, FosNodeModule, FosNodeModuleName, fosNodeModules } from "./fosModules"
import { FosReactOptions } from ".."
import { InputDiv } from "@/components/combobox/inputDiv"
import { TrellisMeta } from "@syctech/react-trellis"



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

  const moduleKey = node.getNodeType() as FosNodeModuleName
  // console.log('moduleKey', moduleKey)

  // console.log('rowBody', node.getNodeType(), global?.modules, global?.modules?.find( m => m.name === moduleKey))

  const nodeModule = fosNodeModules[moduleKey] as FosNodeModule
  const ModuleHeadComponent = nodeModule.HeadComponent


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
    {<ModuleHeadComponent node={node} options={options} meta={meta} state={state} updateState={updateState} />}
  </div>)
}



const module: FosDataModule = {
  icon: <PenBox />,
  name: 'workflow',
  HeadComponent: ResourceComponent,
}

export default module