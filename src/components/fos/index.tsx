
import '../../global.css'
import '../../index.css'

import React, { ReactElement, useEffect, useState } from 'react'

import { HomeIcon } from '@radix-ui/react-icons'
import { Button } from "@/components/ui/button"
import { RootScreenHead } from './head'
import { RowBody } from './rowBody'
import {
  useDroppable,

} from '@dnd-kit/core';

import {  FosNodeContent,  FosContextData, FosPath, FosTrail,  IFosNode, FosRootNode } from "@fosforescent/fosforescent-js";

import { FosModule } from './modules/fosModules'
import { defaultContext } from './initialData'
import { ThemeProvider } from '../theme-provider'
import { Trellis, TrellisNodeInterface } from '@syctech/react-trellis'
import { suggestOption } from '@/lib/suggestOption'
import { suggestSteps } from '@/lib/suggestSteps'
import { suggestMagic } from '@/lib/suggestMagic'



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
    custom: FosModule[],
    active: FosModule,
  },
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

    return new FosRootNode(dataToUse, async (newData) => setData(newData))
  }, [data, setData])

  const global = getGlobal(options || {})

  return (
    <div className='w-full fos-root' > 
      <ThemeProvider defaultTheme={options?.theme || "system"}>
        <Trellis
          rootNode={rootNode as IFosNode}
          components={{
            head: RootScreenHead,
            rowBody: RowBody,
          }}
          global={global}
        />
      </ThemeProvider>
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



const getGlobal = (options: FosReactOptions) => {

  const global = {
    ...( options && options?.canPromptGPT && options?.promptGPT ? getPromptActions(options.promptGPT) : {}),
    ...( options && options?.canRedo ? { canRedo: true } : { canRedo: false }),
    ...( options && options?.canUndo ? { canUndo: true } : { canUndo: false }),
    ...( options && options?.canRedo ? { redo: options.redo } : {}),
    ...( options && options?.canUndo ? { undo: options.undo } : {}),
    ...( options ? { toast: options.toast } : {}),
    ...( options ? { theme: options.theme } : {}),
    ...( options ? { modules: options.modules } : {}),
    ...( options ? {  } : {}),
    ...( options ? { locked: options.locked } : { locked: false }),
  }

  return global
}

export type FosReactGlobal = ReturnType<typeof getGlobal>