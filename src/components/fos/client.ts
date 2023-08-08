import { IFosInterpreter } from '../../../lib/fos/interpreter/types'

export type ReactViewOptions = {
  remainingPath: IFosInterpreter[],
  urlTrail: string[],
  setStack: (stack: IFosInterpreter[]) => void,
}

/**
 * type FosComponent = React.JSXElementConstructor<{interpreter: IFosInterpreter}>
 * Should be interchangeable with ReactView below
 */