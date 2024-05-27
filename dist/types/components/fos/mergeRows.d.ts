import { FosContext, FosNode } from "../../fos/temp-types";
import { FosModule } from "./modules/fosModules";
import { FosReactOptions } from ".";
export declare const MergeRowsComponent: ({ parentNode, context, dragging, rowDepth, dragOverInfo, locked, activeModule, options: fosReactOptions }: {
    parentNode: FosNode;
    context: FosContext;
    dragging: {
        id: string;
        node: FosNode;
    } | null;
    rowDepth: number;
    locked: boolean;
    dragOverInfo: {
        id: string;
        position: 'above' | 'below' | 'on';
        node: FosNode;
    } | null;
    activeModule?: FosModule | undefined;
    options: FosReactOptions;
}) => import("react/jsx-runtime").JSX.Element;
