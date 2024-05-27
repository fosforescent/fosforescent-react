declare const useLongPress: (onLongPress: any, onClick: any, { shouldPreventDefault, delay }?: {
    shouldPreventDefault?: boolean | undefined;
    delay?: number | undefined;
}) => {
    onMouseDown: (e: any) => void;
    onTouchStart: (e: any) => void;
    onMouseUp: (e: any) => void;
    onMouseLeave: (e: any) => void;
    onTouchEnd: (e: any) => void;
};
export default useLongPress;
