import { FosModule } from "./fosModules";
import { FosNode } from "../../../fos/fosNode";
import { SelectionPath } from "../../../fos/temp-types";
export declare const setCostInfo: (node: FosNode, { marginal, budget }: {
    marginal: number;
    budget?: {
        available: number;
    } | undefined;
}) => import("../../../fos/fosContext").FosContext;
export declare const getCostInfo: (thisNode: FosNode, index?: number) => CostInfo;
type CostInfo = {
    min: number;
    max: number;
    average: number;
    current: number;
    minPaths: SelectionPath[];
    maxPaths: SelectionPath[];
    marginal: number;
    budget?: {
        available: number;
    };
};
declare const module: FosModule;
export default module;
