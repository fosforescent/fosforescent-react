import React from 'react';
export interface InputDivProps {
    value: string;
    onChange: (value: string, cursorPos: number) => void;
    onFocus?: (char: number) => void;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
    onKeyUp?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
    style?: React.CSSProperties;
    className?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    placeholder: string;
    focusChar?: number;
    getFocus: () => void;
}
export declare const InputDiv: React.FC<InputDivProps>;
export default InputDiv;
