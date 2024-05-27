import * as React from "react";
import { FosNode } from "@/fos/temp-types";
export declare function ComboboxOptions({ searchMessage, selectMessage, emptyMessage, node, variant, canSuggestOption, suggestOption, ...props }: {
    emptyMessage?: string;
    selectMessage?: string;
    searchMessage?: string;
    node: FosNode;
    variant?: "default" | "text-mimic";
    canSuggestOption: boolean;
    suggestOption: () => void;
} & React.HTMLAttributes<HTMLButtonElement>): import("react/jsx-runtime").JSX.Element;
