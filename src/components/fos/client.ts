
import React from 'react'
import { Fos, FosOptions, IFosInstance, IFosInterpreter } from 'fosforescent-js'

export type ReactViewOptions = {
  breadcrumbs: {setPath: () => void , interpreter: IFosInterpreter}[],
  // setStack: (stack: IFosInterpreter[]) => void,
}

/**
 * type FosComponent = React.JSXElementConstructor<{interpreter: IFosInterpreter}>
 * Should be interchangeable with ReactView below
 */

export const useFos = (options: Partial<FosOptions> = {}) => {
  const [fos, setFos] = React.useState<IFosInstance>(Fos(options))

  const rootAddress = fos.getRootAddress()

  React.useEffect(() => {
    setFos(Fos(options))
  }, [rootAddress])

  return fos

}