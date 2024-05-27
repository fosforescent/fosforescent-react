import { FosContextData } from '../../fos/temp-types';
import { FosModule } from './modules/fosModules';
export type FosReactOptions = Partial<{
    canPromptGPT: boolean;
    promptGPT: (systemPrompt: string, userPrompt: string, options?: {
        temperature?: number;
    }) => Promise<{
        choices: {
            message: {
                content: string;
                role: string;
            };
            finishReason: string;
        }[];
    }>;
    toast: (toastOpts: {
        title: string;
        description: string;
        duration: number;
    }) => void;
    canUndo: boolean;
    undo: () => void;
    canRedo: boolean;
    redo: () => void;
    modules: {
        core: string[];
        custom: FosModule[];
    };
}>;
export declare const MainView: ({ data, setData, options, }: {
    data: FosContextData | undefined;
    setData: (data: FosContextData) => void;
    options?: Partial<{
        canPromptGPT: boolean;
        promptGPT: (systemPrompt: string, userPrompt: string, options?: {
            temperature?: number;
        }) => Promise<{
            choices: {
                message: {
                    content: string;
                    role: string;
                };
                finishReason: string;
            }[];
        }>;
        toast: (toastOpts: {
            title: string;
            description: string;
            duration: number;
        }) => void;
        canUndo: boolean;
        undo: () => void;
        canRedo: boolean;
        redo: () => void;
        modules: {
            core: string[];
            custom: FosModule[];
        };
    }> | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export default MainView;
