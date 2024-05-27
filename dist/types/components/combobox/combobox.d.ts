import * as React from "react";
export declare function Combobox({ values, searchMessage, selectMessage, emptyMessage, defaultValue, variant, ...props }: {
    values: {
        value: string;
        label: string;
    }[];
    emptyMessage?: string;
    selectMessage?: string;
    searchMessage?: string;
    defaultValue?: string;
    variant?: "default" | "text-mimic";
} & React.HTMLAttributes<HTMLButtonElement>): import("react/jsx-runtime").JSX.Element;
