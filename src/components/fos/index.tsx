import '../../global.css'
import '../../index.css'

import React, { ReactElement, useEffect, useState, forwardRef } from 'react'

import { HomeIcon } from '@radix-ui/react-icons'
import { Button } from "@/components/ui/button"
import { RootScreenHead } from './head'
import { RowBody } from './rowBody'
import {
  useDroppable,

} from '@dnd-kit/core';

import {  FosNodeContent,  FosContextData, FosPath, FosTrail,  IFosNode, FosRootNode } from "@fosforescent/fosforescent-js";

import { FosDataModule, fosDataModules } from './modules/fosModules'
import { defaultContext } from './initialData'
import { Trellis, TrellisNodeInterface } from '@syctech/react-trellis'
import { suggestOption } from '@/lib/suggestOption'
import { suggestSteps } from '@/lib/suggestSteps'
import { suggestMagic } from '@/lib/suggestMagic'
import { FosWrapper } from './fosWrapper'
import { FosRowsComponent } from './rows'



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
  activeModule: FosDataModule,
  setActiveModule: (module: FosDataModule | undefined) => void,
  modules: FosDataModule[],
  theme: "light" | "dark" | "system",
  locked: boolean
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


  const dataToUse: FosContextData = data ? data : defaultContext  

  const rootNode = React.useMemo(() => {

    console.log('dataToUse', dataToUse)
    const setDataWithLog = (newData: FosContextData) => {
      console.log('setData', newData)
      setData(newData)
    }

    const fosRootNode = new FosRootNode(dataToUse, async (newData) => setDataWithLog(newData))
    const wrappedRootNode = new FosWrapper(fosRootNode)
    return wrappedRootNode
  }, [data, setData])


  const [activeModule, setActiveModule] = useState<FosDataModule | undefined>(fosDataModules.description)

  const setActiveModuleWithLog = (module: FosDataModule | undefined) => {
    console.log('setActiveModule', module)
    setActiveModule(module)
  }

  const optionsWithModule = {
    ...(options || {}),
    activeModule,
    setActiveModule: setActiveModuleWithLog,
  }

  const global: FosReactGlobal = getGlobal(optionsWithModule || { activeModule: fosDataModules.description })

  const theme = options?.theme ? options.theme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"


  console.log('global', global, options)

  // console.log('theme', theme)

  return (
    <div className={`w-full fos-root ${theme}`} >
        <Trellis
          rootNode={rootNode}
          components={{
            head: RootScreenHead,
            // row: FosRowComponent,
            rows: FosRowsComponent,
            rowBody: RowBody,
          }}
          global={global || {}}
          theme={theme}
        />
    </div>)
}


export default MainView

const getPromptActions = (promptGPT: (systemPrompt: string, userPrompt: string, options?: {
  temperature?: number | undefined;
}) => Promise<{
  choices: {
      message: {
          role: string;
          content: string;
      };
      finishReason: string;
  }[];
}>) => {
  return {
    suggestOptions: async (node: IFosNode) => await suggestOption(promptGPT, node),
    suggestSteps: async (node: IFosNode) => await suggestSteps(promptGPT, node),
    suggestMagic: async (node: IFosNode) => await suggestSteps(promptGPT, node), 
  }
}



const getGlobal = (options: FosReactOptions): Partial<FosReactOptions> => {
  console.log('options', options)
  const global = {
    ...( options && options?.canPromptGPT && options?.promptGPT ? {
      canPromptGPT: true,
      promptGPT: options.promptGPT,
    } : {
      canPromptGPT: false,
    }),
    ...( options && options?.canRedo ? { canRedo: true } : { canRedo: false }),
    ...( options && options?.canUndo ? { canUndo: true } : { canUndo: false }),
    ...( options && options?.canRedo ? { redo: options.redo } : {}),
    ...( options && options?.canUndo ? { undo: options.undo } : {}),
    ...( options ? { toast: options.toast } : {}),
    ...( options ? { theme: options.theme } : {}),
    ...( options ? { activeModule: options.activeModule || fosDataModules.description } : { activeModule: fosDataModules.description }),
    ...( options ? { setActiveModule: options.setActiveModule } : {}),
    ...( { modules: [...(options.modules || []), ...Object.values(fosDataModules) ] } ),
    ...( options ? { locked: options.locked } : { locked: false }),
  }

  return global
}

export type FosReactGlobal = ReturnType<typeof getGlobal>