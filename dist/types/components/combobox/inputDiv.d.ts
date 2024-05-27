import React from 'react';
interface InputDivProps {
    value: string | undefined;
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
}
export declare const InputDiv: React.FC<InputDivProps>;
export default InputDiv;
