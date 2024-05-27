import { on } from 'events';
import React, { useEffect, useRef } from 'react';

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
  ...props
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  

  useEffect(() => {
    if (autoFocus && divRef.current) {
      console.log('here', focusChar, autoFocus)
      divRef.current.focus();
    }
  }, [autoFocus]);

  const updateInput = () => {
    console.log('input', divRef.current);
    if (!divRef.current) {
      return;
    }
    const cursorPosition = getCursorPosition(divRef.current);
    console.log('updateInput', cursorPosition);
    value ? onChange(value, cursorPosition) : onChange('', cursorPosition);
    setCursorPosition(divRef.current, cursorPosition);
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {

    updateInput();
  };

  const handleFocus = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!divRef.current) {
      return;
    }
    const cursorPosition = getCursorPosition(divRef.current);
    onFocus && onFocus(cursorPosition);
  };


  useEffect(() => {
    if (divRef.current) {
      if (value === undefined) {
        divRef.current.innerText = '';
      } else {
        divRef.current.innerText = value;
      }
    }
  }, [value]);
  
  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    if (value !== undefined){
      updateInput();
    }
  };

  useEffect(() => {
    if (divRef.current) {
      if (value) {
        divRef.current.innerText = value;
      } else {
        divRef.current.innerText = '';
      }
    }
  }, [value]);


  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown && onKeyDown(e);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyUp && onKeyUp(e);
  }

  const hasFocus = divRef?.current === document.activeElement;

  return (
    <div
      ref={divRef}
      contentEditable={!disabled}
      autoFocus={autoFocus}
      placeholder={placeholder}
      className={`h-full w-full border-none ${!value ? 'text-white/50' : 'text-white'} ${className}`}
      style={{
        ...style,
        position: 'relative'
      }}
      onInput={handleInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      // onMouseUp={handleMouseUp}
      {...props}
      suppressContentEditableWarning={true}
    >
      {value || ''}
      {!value && !hasFocus && <span>{placeholder}</span>}
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
