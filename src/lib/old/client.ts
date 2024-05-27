
import React from 'react'
import { FosOptions, IFosInstance, IFosInterpreter } from '../../fos/old/types'
import { Fos } from '../../fos/old/index'
import { MockFos } from './mock'

export type ReactViewOptions = {
  breadcrumbs: {setPath: () => void , interpreter: IFosInterpreter}[],
  // setStack: (stack: IFosInterpreter[]) => void,
}

/**
 * type FosComponent = React.JSXElementConstructor<{interpreter: IFosInterpreter}>
 * Should be interchangeable with ReactView below
 */

export const useFos = (options: Partial<FosOptions> & { mock?: boolean } = {}) => {

  // const fosInstance = options.mock ? MockFos : Fos
  const fosInstance = MockFos

  const [optionsState, setOptionsState] = React.useState<Partial<FosOptions>>(options)


  const [fos, setFos] = React.useState<IFosInstance<any>>(fosInstance(optionsState))

  const rootAddress = "fake" // fos.getExpression()

  

  React.useEffect(() => {
    setFos(fosInstance(optionsState))
  }, [rootAddress])


  return fos

}