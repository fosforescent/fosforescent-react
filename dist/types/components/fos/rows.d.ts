import { FosContext, FosNode } from "../../fos/temp-types";
import { FosModule } from './modules/fosModules';
import { FosReactOptions } from '.';
export declare const RowsComponent: ({ parentNode, rows, context, dragging, rowDepth, dragOverInfo, locked, activeModule, options }: {
    parentNode: FosNode;
    rows: FosNode[];
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
