import { FosContext, FosNode } from '../../fos/temp-types';
import { FosModule } from './modules/fosModules';
import { FosReactOptions } from '.';
export declare const StepRow: ({ node, updateNodes, rowDepth, handleTextEdit, handleChange, addYoungerSibling, moveLeft, moveRight, deleteRow, moveDown, moveUp, deleteOption, addOption, locked, toggleCollapse, dragOverInfo, dragging, dragItem, activeModule, options: fosReactOptions }: {
    node: FosNode;
    updateNodes: (newNodes: FosContext) => void;
    rowDepth: number;
    handleTextEdit: (value: string, focusChar: number) => void;
    handleChange: (value: string) => void;
    addYoungerSibling: () => void;
    moveLeft: () => void;
    moveRight: () => void;
    moveUp: () => void;
    moveDown: () => void;
    deleteOption: (index: number) => void;
    deleteRow: () => void;
    addOption: () => void;
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
    activeModule: FosModule | undefined;
    options: FosReactOptions;
}) => import("react/jsx-runtime").JSX.Element;
export declare function MenuComponent({ node, hasChildren, context, updateNodes, }: {
    node: FosNode;
    hasChildren: boolean;
    context: FosContext;
    updateNodes: (nodes: FosContext) => void;
}): import("react/jsx-runtime").JSX.Element;
