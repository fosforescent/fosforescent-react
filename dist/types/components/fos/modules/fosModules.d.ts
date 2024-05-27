/// <reference types="react" />
import { FosNode } from '../../../fos/fosNode';
import { FosReactOptions } from '..';
declare const fosModules: {
    cost: FosModule;
    workflow: FosModule;
    duration: FosModule;
    probability: FosModule;
    fosDocument: FosModule;
    resources: FosModule;
};
declare const moduleNames: string[];
type ModuleProps = {
    node: FosNode;
    options: FosReactOptions;
};
type FosModule = {
    icon: JSX.Element;
    name: string;
    HeadComponent: React.FC<ModuleProps>;
    rowStyle?: React.CSSProperties;
    RowComponent?: React.FC<ModuleProps>;
};
type FosModuleName = keyof typeof fosModules;
export { fosModules, moduleNames, };
export type { FosModule, FosModuleName };
