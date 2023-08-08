import React, { useState, useEffect, useMemo } from 'react'
import { IFosInterpreter, IStore, Fos } from 'fosforescent-js'
import Root from '@/components/fos/root'

export const MainView = ({path, storeData}: { path: string[], storeData: string}) => {


  const [urlHead, ...urlTail] = React.useMemo (() => path.length > 0 ? path as [string, ...string[]]: [], [path.join('/')])
  const [activeItem, setActiveItem] = React.useState(undefined)

  

  const [store, initialRoot] = React.useMemo(() => {
    const localStoreData = localStorage.getItem('store') || ''
    const storeDataParsed = storeData ? JSON.parse(storeData) : {}
    const localStoreDataParsed = localStoreData ? JSON.parse(localStoreData) : {}
    if(storeData && storeDataParsed.rootsHistory !== undefined) {
      const store = new Store(storeData)
      console.log("GOT STORE FROM SERVER")
      return [store, urlHead ? store.getRootFromStubString(urlHead as string) : store.getRoot()] as [IStore, IFosInterpreter]
    }else if(localStoreData && localStoreDataParsed.rootsHistory !== undefined) {
      const store = new Store(localStoreData)
      return [store, urlHead ? store.getRootFromStubString(urlHead as string) : store.getRoot()] as [IStore, IFosInterpreter]
    } else {
      const store = new Store()
      const startRootInterpreter = urlHead ? store.getRootFromStubString(urlHead as string) : store.getRoot()
      console.log('start root interpreter', startRootInterpreter.getName())
      const result = addExamples(startRootInterpreter) as [IFosInterpreter, ...IFosInterpreter[]]
      console.log('resutl', startRootInterpreter.getDisplayString(), result[result.length - 1]?.getDisplayString())
      store.setRoot(result[result.length - 1] as IFosInterpreter)
      console.log('added examples', result.map(x => x.getDisplayString()))
      return [store, result[result.length - 1]] as [IStore, IFosInterpreter]
    }
  }, [path])


  const initialStack = React.useMemo(() => urlTail.reduce(
    (acc: [IFosInterpreter, ...IFosInterpreter[]], next: string) => {
      console.log('next', next, acc[0]?.getDisplayString(), urlTail, acc.map(x => x.getDisplayString()))
      const nextChild = acc[0]?.followEdgeFromStubString(next) as IFosInterpreter
      if(nextChild === undefined) {
        throw new Error(`could not find child ${next} in ${acc[0]?.getDisplayString()}`)
      }
      return [nextChild as IFosInterpreter, ...acc] 
    },
   [initialRoot]
  ) as [IFosInterpreter, ...IFosInterpreter[]], [path])


  const [rootStack, setRootStack] = React.useState<IFosInterpreter[]>(initialStack)

  const updateRootStack = (newStack: IFosInterpreter[]) => {
    console.log('updating root stack', newStack.map(x => x.getDisplayString()))
    if(!newStack || newStack.length === 0) {
      console.log('new stack', newStack)
      throw new Error('new stack cannot be empty')
    }
    store.setRoot(newStack[newStack.length - 1] as IFosInterpreter)
    userService.setData({store: store.toJSON()}).then((serverData: string) => {
      console.log('server data', serverData)
      localStorage.setItem('store', JSON.stringify(serverData))
      setRootStack(newStack)
    })
  }

  useEffect(() => {
    const reversedRootStack = reverseArray(rootStack)
    console.log('new url', rootStack.map(x => x.getDisplayString()))
    const newUrl = reversedRootStack.map(x => x.getStubString()).join('/')
    console.log('new url', newUrl)
    router.push('/' + newUrl)
  }, [rootStack])


  const [rootInterpreter, ...interpreterChainTail] = React.useMemo(() => reverseArray(rootStack), [rootStack] ) as [IFosInterpreter, ...IFosInterpreter[]]

  console.log('root interpreter', rootInterpreter.getDisplayString(), interpreterChainTail.map(x => x.getDisplayString()))

  return rootStack && rootStack.length > 0 ? <Root interpreter={rootInterpreter} options={{remainingPath: interpreterChainTail, urlTrail: urlHead ? [urlHead] : [], setStack: updateRootStack}} /> : (
    <div>
      
    </div>
  )
}

function reverseArray<T>(array: T[]): T[] {
  const copy = [...array]
  copy.reverse()
  return copy
}

export default MainView