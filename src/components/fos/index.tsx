import React, { ReactElement, useEffect, useState } from 'react'

import { HomeIcon } from '@radix-ui/react-icons'
import { Button } from "@/components/ui/button"
import { RootScreenHead } from './head'
import { RowBody } from './rowBody'
import {
  useDroppable,

} from '@dnd-kit/core';

import { FosContext, FosNodeContent,  FosContextData, FosPath, FosTrail,  FosPeer } from "@fosforescent/fosforescent-js";

import { FosModule } from './modules/fosModules'
import initData from './initialData'
import { ThemeProvider } from '../theme-provider'
import { Trellis, TrellisNodeInterface } from '@syctech/react-trellis'



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


  const dataToUse: FosContextData = data ? data : initData

  const rootNode = React.useMemo(() => {
 

    const newContext = new FosContext(dataToUse)

    const rootNode = newContext.getRootNode()

    return rootNode
  }, [setData])

  const peer = React.useMemo(() => {
    
    const setDataWrapped = (e: FosContextData) => {
      console.log("Setting Data", e.focus, data)
      // console.trace()
      setData(e)
    }

    const newPeer = new FosPeer({
      pushToRemote: async (newData: FosContextData) => setDataWrapped(newData),
      pullFromRemote: async () => dataToUse,
      pushCondition: async (peerData: FosContextData) => true,
      pullCondition: async (peerData: FosContextData) => !data,
      data: dataToUse,
      mergeData: (newData: FosContextData, baseData: FosContextData) => newData
    })
    rootNode.addPeer(newPeer)

    return newPeer
  }, [setData])

  useEffect(() => {
    rootNode.pushToPeer(peer)

  }, [data])



  return (
    <div className='w-full fos-root' > 
      <ThemeProvider defaultTheme={options?.theme || "system"}>
        <Trellis
          rootNode={rootNode}
          components={{
            head: RootScreenHead,
            rowBody: RowBody,
          }}
        />
      </ThemeProvider>
    </div>)
}


export default MainView



