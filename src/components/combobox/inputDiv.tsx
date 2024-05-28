import React, { useEffect, useRef } from 'react';
import moduleStyles from './inputDiv.module.css';
import { ThemeProvider } from '../theme-provider';


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

export const InputDiv: React.FC<InputDivProps> = ({
  value,
  onChange,
  onFocus,
  onClick,
  onKeyDown,
  onKeyUp,
  style,
  className,
  disabled,
  autoFocus,
  placeholder,
  focusChar,
  getFocus,
  ...props
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  
  const hasFocus = divRef?.current === document.activeElement;

  useEffect(() => {
    if (autoFocus && divRef.current) {
      console.log("GOT FOCUS")
      divRef.current.focus();
    }
  }, [autoFocus]);

  useEffect(() => {
    if (!hasFocus){
      return
    }
    if(!divRef.current){
      return 
    }
    setCursorPosition(divRef.current, focusChar || 0)
  }, [focusChar]);

  const updateInput = () => {

    if (!divRef.current) {
      return;
    }
    const cursorPosition = getCursorPosition(divRef.current);
    const newValue = divRef.current.innerText;
    onChange(newValue, cursorPosition);    

  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {

    updateInput();
  };

  const handleFocus = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!divRef.current) {
      return;
    }
    updateInput();
  };

  
  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) {
      return;
    }
    getFocus();
    updateInput();
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown && onKeyDown(e);
    if (!divRef.current) {
      return;
    }
    updateInput();
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyUp && onKeyUp(e);
    if (!divRef.current) {
      return;
    }
    updateInput();
  }


  const placeholderClassName = divRef.current?.innerText ? moduleStyles.inputDiv : moduleStyles.emptyInputDiv


  return (
      <div
        ref={divRef}
        contentEditable={!disabled}
        placeholder={placeholder}
        className={`h-full w-full border-none ${!value ? 'empty' : ''} ${className} ${placeholderClassName}`}
        style={{
          ...moduleStyles,
          ...style,
          position: 'relative'
        }}
        onInput={updateInput}
        onFocus={handleFocus}
        // onBlur={handleBlur}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        // onMouseUp={handleMouseUp}
        suppressContentEditableWarning={true}
        tabIndex={0}
      >
        {value}
      </div>
  );
};

export default InputDiv;



const getCursorPosition = (divElement: HTMLDivElement) => {


  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) {
    console.warn('selection is null or rangeCount is 0');
    return 0;
  }

  let cursorPosition = 0;
  const range = selection.getRangeAt(0);
  const preCaretRange = range.cloneRange();
  preCaretRange.selectNodeContents(divElement);
  preCaretRange.setEnd(range.endContainer, range.endOffset);

  const iterator = document.createNodeIterator(
    divElement,
    NodeFilter.SHOW_TEXT,
    null,
  );

  let currentNode;
  while ((currentNode = iterator.nextNode())) {
    if (currentNode === range.endContainer) {
      cursorPosition += range.endOffset;
      break;
    } else {
      cursorPosition += currentNode.textContent?.length ?? 0;
    }
  }

  return cursorPosition;
};



const setCursorPosition = (divElement: HTMLDivElement, pos: number) => {
  const range = document.createRange();
  const selection = window.getSelection();
  
  const iterator = document.createNodeIterator(
    divElement,
    NodeFilter.SHOW_TEXT,
    null,
  );
  
  let currentNode;
  let currentPos = 0;
  while ((currentNode = iterator.nextNode())) {
    const nodeLength = currentNode.textContent?.length ?? 0;
    if (currentPos + nodeLength >= pos) {

      range.setStart(currentNode, pos - currentPos);
      range.collapse(true);
      selection?.removeAllRanges();
      selection?.addRange(range);
      return;
    }
    currentPos += nodeLength;
  }
  // If position is out of bounds, place cursor at the end
  range.setStart(divElement, divElement.childNodes.length);
  range.collapse(true);
  selection?.removeAllRanges();
  selection?.addRange(range);
};
