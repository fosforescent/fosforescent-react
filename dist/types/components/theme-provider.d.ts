/// <reference types="react" />
type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: string;
    storageKey?: string;
    rootSelector?: string;
};
type ThemeProviderState = {
    theme: string;
    setTheme: (theme: string) => void;
};
export declare function ThemeProvider({ children, defaultTheme, storageKey, rootSelector, ...props }: ThemeProviderProps): import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => ThemeProviderState;
export {};
