import { FosContext, FosNode } from "@/fos/temp-types";
export declare const suggestRecursive: <T, S>(promptGPT: (systemPrompt: string, userPrompt: string, options?: {
    temperature?: number | undefined;
}) => Promise<{
    choices: {
        message: {
            role: string;
            content: string;
        };
        finishReason: string;
    }[];
}>, node: FosNode, { pattern, parsePattern, systemPromptBase, getUserPromptBase, systemPromptRecursive, getUserPromptRecursive, getResourceInfo, setResourceInfo, checkResourceInfo }: {
    pattern: RegExp;
    parsePattern: (response: string, node: FosNode) => S;
    systemPromptBase: string;
    getUserPromptBase: (nodeDescription: string, parentDescriptions: string[], node: FosNode) => string;
    systemPromptRecursive: string;
    getUserPromptRecursive: (nodeDescription: string, parentDescriptions: string[], node: FosNode) => string;
    getResourceInfo: (node: FosNode) => T;
    setResourceInfo: (node: FosNode, resourceInfo: S) => FosContext;
    checkResourceInfo: (node: FosNode) => boolean;
}) => Promise<FosContext>;
