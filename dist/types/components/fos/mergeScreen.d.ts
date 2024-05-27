import { FosContext, FosNode } from "../../fos/temp-types";
import { FosReactOptions } from '.';
export declare function MergeScreenView({ context, node, dragging, dragOverInfo, options, }: {
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
