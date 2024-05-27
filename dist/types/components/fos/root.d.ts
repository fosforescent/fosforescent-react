import { FosContext, FosNode } from "../../fos/temp-types";
import { FosModule } from './modules/fosModules';
import { FosReactOptions } from '.';
export declare function RootScreenView({ context, node, dragging, dragOverInfo, options: fosReactOptions }: {
    context: FosContext;
    node: FosNode;
    dragOverInfo: {
        id: string;
        position: 'above' | 'below' | 'on';
        node: FosNode;
    } | null;
    dragging: {
        id: string;
        node: FosNode;
    } | null;
    options: FosReactOptions;
}): import("react/jsx-runtime").JSX.Element;
export declare const RootScreenHead: ({ node, context, activeModule, setActiveModule, availableModules, options: fosReactOptions }: {
    node: FosNode;
    context: FosContext;
    activeModule: FosModule | undefined;
    setActiveModule: (module: FosModule | undefined) => void;
    availableModules: FosModule[];
    options: FosReactOptions;
}) => import("react/jsx-runtime").JSX.Element;
