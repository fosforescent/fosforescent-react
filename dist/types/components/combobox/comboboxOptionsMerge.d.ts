import * as React from "react";
import { FosNode } from "@/fos/temp-types";
export declare function ComboboxOptionsMerge({ searchMessage, selectMessage, emptyMessage, node, variant, ...props }: {
    emptyMessage?: string;
    selectMessage?: string;
    searchMessage?: string;
    node: FosNode;
    variant?: "default" | "text-mimic";
} & React.HTMLAttributes<HTMLButtonElement>): import("react/jsx-runtime").JSX.Element;
