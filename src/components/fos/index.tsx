import React from 'react'
import { IFosInterpreter, FosOptions } from 'fosforescent-js'
import Root from './root'
import { useFos } from './client'

type MainOptions = {
  demo: boolean
}

export const MainView = ({path, storeData, options}: { path: string[], storeData?: string, options?: Partial<MainOptions>}) => {


  const [activeItem, setActiveItem] = React.useState(undefined)



  const fos = useFos()

  const initialStack = React.useMemo(() => path.reduce(
    (acc: [IFosInterpreter, ...IFosInterpreter[]], next: string): [IFosInterpreter, ...IFosInterpreter[]] => {
      const nextChild: IFosInterpreter = acc[0]?.followEdgeFromStubString(next)
      if(nextChild === undefined) {
        throw new Error(`could not find child ${next} in ${acc[0]?.getDisplayString()}`)
      }
      return [nextChild, ...acc] 
    },
   [fos.getRoot() ]
  ) , [path])



  const breadcrumbs: {setPath: () => void, interpreter: IFosInterpreter}[] = []


  return <Root interpreter={fos.getRoot()} options={{breadcrumbs}} />
}


export default MainView