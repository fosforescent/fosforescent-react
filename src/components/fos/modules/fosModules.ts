


import cost from './cost'
import workflow from './workflow'
import duration from './duration'
import probability from './probability'
import fosDocument from './document'
import resources from './resources'
import { FosReactOptions } from '..'
import { IFosNode } from '@fosforescent/fosforescent-js'

const fosModules = {
  // cost,
  workflow,
  duration,
  // probability,
  // fosDocument,
  // resources,
}

const moduleNames = Object.keys(fosModules)

type ModuleProps = {
  node: IFosNode
  options: FosReactOptions
}

type FosModule = {
  icon: JSX.Element,
  name: string,
  HeadComponent: React.FC<ModuleProps>,
  rowStyle?: React.CSSProperties,
  RowComponent?: React.FC<ModuleProps>,
}

type FosModuleName = keyof typeof fosModules

export {
  fosModules,
  moduleNames,
}

export type {
  FosModule,
  FosModuleName
}