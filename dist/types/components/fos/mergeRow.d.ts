import { FosContext, FosNode } from '../../fos/temp-types';
import { FosReactOptions } from '.';
export declare const MergeRow: ({ node, rowDepth, handleChange, moveLeft, moveRight, moveDown, moveUp, locked, toggleCollapse, dragOverInfo, dragging, dragItem, added, removed, options }: {
    node: FosNode;
    rowDepth: number;
    handleChange: (value: string) => void;
    moveLeft: () => void;
    moveRight: () => void;
    moveUp: () => void;
    moveDown: () => void;
    toggleCollapse: () => void;
    dragOverInfo: {
        id: string;
        position: 'above' | 'below' | 'on';
        node: FosNode;
    } | null;
    locked: boolean;
    dragging: {
        id: string;
        node: FosNode;
    } | null;
    dragItem: {
        id: string;
        data: {
            node: FosNode;
        };
    };
    added?: boolean | undefined;
    removed?: boolean | undefined;
    options: FosReactOptions;
}) => import("react/jsx-runtime").JSX.Element;
export declare function MenuComponent({ node, hasChildren, context, }: {
    node: FosNode;
    hasChildren: boolean;
    context: FosContext;
}): import("react/jsx-runtime").JSX.Element;
