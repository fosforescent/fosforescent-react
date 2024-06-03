import { ComboboxOptions } from "@/components/combobox/comboboxOptions"
import { Button } from "@/components/ui/button"
import { PenBox } from "lucide-react"

import { SelectionPath, FosNode } from "@fosforescent/fosforescent-js"
import { suggestOption } from "@/lib/suggestOption"
import { FosModule } from "./fosModules"
import { FosReactOptions } from ".."

const ResourceComponent = ({ node, options }: { node: FosNode, options: FosReactOptions }) => {


  
  const handleSuggestOption = async () => {
    if (options?.canPromptGPT && options?.promptGPT){
      const [newContext, newSubscriptionData] = await suggestOption(options.promptGPT, node)
      if (newContext){
        node.context.setNodes(newContext.data.nodes)
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
  

  return (<div>
    <ComboboxOptions node={node} suggestOption={handleSuggestOption} canSuggestOption={options?.canPromptGPT || false} />
  </div>)
}



const module: FosModule = {
  icon: <PenBox />,
  name: 'workflow',
  HeadComponent: ResourceComponent,

}

export default module