import React from 'react'
import { IFosInterpreter, FosOptions, IStore, INode } from '../../fos/old/types'

import Root from './root'
import { useFos } from '../../lib/old/client'

type MainOptions = {
  demo: boolean
}

// export const MainView = ({store, root}: {store: IStore, root: INode}) => {


// }


export const MainView = ({ interpreter }: { interpreter: IFosInterpreter}) => {


  const activeItemInterpreter = interpreter.followEdgeFromAlias('activeItem')
  const pathInterpreter = interpreter.followEdgeFromAlias('path')


  const path = pathInterpreter.getValue() as unknown as string[]

  const initialStack = React.useMemo(() => path.reduce(
    (acc: [IFosInterpreter, ...IFosInterpreter[]], next: string): [IFosInterpreter, ...IFosInterpreter[]] => {
      const nextChild: IFosInterpreter = acc[0]?.followEdgeFromStubString(next)
      if(nextChild === undefined) {
        throw new Error(`could not find child ${next} in ${acc[0]?.getDisplayString()}`)
      }
      return [nextChild, ...acc] 
    },
   [interpreter]
  ) , [path])



  const breadcrumbs: {setPath: () => void, interpreter: IFosInterpreter}[] = []

  const Root = interpreter.getAction('showRoot')

  return <></> // <Root interpreter={interpreter} options={{breadcrumbs}} />
}


export default MainView