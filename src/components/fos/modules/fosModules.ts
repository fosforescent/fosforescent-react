


import cost from './cost'
import task from './task'
import description from './description'
import duration from './duration'
import probability from './probability'
import fosDocument from './document'
import resources from './resources'
import option from './option'
import root from './root'
import { FosReactOptions } from '..'
import { IFosNode } from '@fosforescent/fosforescent-js'
import { TrellisMeta, TrellisSerializedData } from '@syctech/react-trellis'
import { FosWrapper } from '../fosWrapper'
import { FosReactGlobal } from '@/components/fos'


const fosDataModules = {
  duration,
  description,
}

const fosNodeModules = {
  // cost,
  option,
  root,
  task,
  // probability,d
  // fosDocument,
  // resources,
}

const fosNodeModuleNames = Object.keys(fosNodeModules)
const fosDataModuleNames = Object.keys(fosDataModules)

type FosModuleProps = {
  node: FosWrapper
  options: FosReactOptions
  meta: TrellisMeta<FosWrapper, FosReactGlobal | undefined>
  state: TrellisSerializedData
  updateState: (state: TrellisSerializedData) => void
}

type FosNodeModule = {
  icon: JSX.Element,
  name: string,
  HeadComponent: React.FC<FosModuleProps>,
  // rowStyle?: React.CSSProperties,
  RowComponent: React.FC<FosModuleProps>,
}


type FosDataModule = {
  icon: JSX.Element,
  name: string,
  HeadComponent: React.FC<FosModuleProps>,
  // rowStyle?: React.CSSProperties,
  // RowComponent: React.FC<FosModuleProps>,
}

type FosNodeModuleName = keyof typeof fosNodeModules
type FosDataModuleName = keyof typeof fosDataModules

export {
  fosNodeModules,
  fosDataModules,
  fosNodeModuleNames,
  fosDataModuleNames
}

export type {
  FosNodeModule,
  FosDataModule,
  FosNodeModuleName,
  FosDataModuleName,
  FosModuleProps
}