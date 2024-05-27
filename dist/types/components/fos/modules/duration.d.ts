import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FosModule } from './fosModules';
import { FosNode } from '../../../fos/fosNode';
import { SelectionPath } from '../../../fos/temp-types';
export declare const durationDisplay: (time: number) => string;
export declare const DurationInput: ({ value: time, onUpdate, ...props }: {
    value: number;
    onUpdate: (value: number) => void;
} & Partial<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>) => import("react/jsx-runtime").JSX.Element;
type DurationData = {
    marginal: number;
};
type DurationInfo = {
    min: number;
    max: number;
    average: number;
    current: number;
    minPaths: SelectionPath[];
    maxPaths: SelectionPath[];
    marginal: number;
};
export declare const getDurationInfo: (thisNode: FosNode, index?: number) => DurationInfo;
export declare const setDurationInfo: (node: FosNode, value: DurationData) => import("../../../fos/fosContext").FosContext;
export declare const checkDurationInfo: (node: FosNode) => boolean;
declare const module: FosModule;
export default module;
