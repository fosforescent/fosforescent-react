
import React from 'react'
import { Fos, FosOptions, IFosInstance, IFosInterpreter } from 'fosforescent-js'
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

  const fosInstance = options.mock ? MockFos : Fos

  const [optionsState, setOptionsState] = React.useState<Partial<FosOptions>>(options)


  const [fos, setFos] = React.useState<IFosInstance<any>>(fosInstance(optionsState))

  const rootAddress = fos.getRootAddress()

  

  React.useEffect(() => {
    setFos(fosInstance(optionsState))
  }, [rootAddress])


  return fos

}