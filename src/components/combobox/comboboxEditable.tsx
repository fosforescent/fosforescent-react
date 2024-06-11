"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { StepButton, } from "@/components/ui/button-step"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Input } from "@/components/ui/input"
import { BrainCircuit, PlusIcon, Trash2 } from "lucide-react"
import { Button } from "../ui/button"

import { InputDiv } from './inputDiv'

export function ComboboxEditable({
  values,
  searchMessage = "Search...",
  selectMessage = "Select...",
  emptyMessage = "No results",
  defaultValue,
  selectedIndex,
  handleTextEdit,
  isDragging,
  draggingOver,
  draggingOn,
  handleChange,
  deleteOption,
  addOption,
  toggleCollapse,
  suggestOption,
  keyDown,
  keyPresses,
  locked,
  hasFocus,
  focusChar,
  getFocus,
  ...props
}: {
  values: {value: string, label: string}[],
  getFocus: (char: number | null) => void,
  emptyMessage?: string,
  selectMessage?: string,
  searchMessage?: string,
  defaultValue?: string,
  selectedIndex: number,
  handleTextEdit: (value: string, focusChar: number) => void,
  handleChange: (value: string) => void,
  isDragging: boolean,
  draggingOver?: boolean,
  draggingOn?: boolean,
  addOption: () => void,
  deleteOption: (index:number) => void,
  toggleCollapse: () => void,
  suggestOption: () => void,
  keyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void,
  keyPresses: (e: React.KeyboardEvent<HTMLDivElement>) => void,
  hasFocus: boolean,
  focusChar: number | null,
  locked: boolean,
} & React.HTMLAttributes<HTMLButtonElement>) {

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(defaultValue)

  React.useEffect(() => {
    if (selectedIndex !== undefined){
      if (values.length < 1){
        throw new Error('values.length < 1');
      }
      // console.log('selectedIndex', selectedIndex, values, defaultValue, props )
      setValue(selectedIndex.toString() || defaultValue || "0")
    }
  }, [selectedIndex])




  const onTextChange = (value: string, cursorPos: number) => {
    if (locked){
      return
    }
    handleTextEdit(value, cursorPos)
    return false
  }



  const handleDeleteOption = (index: number) => {
    if (locked){
      return
    }
    // console.log('handleDeleteOption', index)
    deleteOption(index)
  }

 

  const dropStyle = draggingOver ? {
    // backgroundColor: 'rgba(230, 220, 200, .03)',
  } : {}

  const dropOnStyle = draggingOn ? {
    backgroundColor: 'rgba(230, 220, 200, .07)',
    border: '1px solid rgba(230, 220, 200, .3)',
    // transform: 'scale(1.05)',
  } : {}

  const draggingStyle = isDragging ? {
    backgroundColor: 'rgba(230, 220, 200, .03)',
    opacity: '0.5',
  } : {}

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>

      <div style={{
          position: 'relative',
          opacity: 1,
          height: 'auto',
          ...dropOnStyle,
          ...dropStyle,
          display: 'grid',
          gridTemplateColumns: '1fr .25rem',
          width: 'calc(100% - 2rem)',
        }}
        role="combobox"
        className={` `}
        >
          <InputDiv
          disabled={locked}
          autoFocus={hasFocus}
          getFocus={getFocus}
          placeholder={values.length > 1 ? "New Option" : "Enter a task to plan"}
          className="rounded-r-none w-full cursor-text"
          value={value
            ? values.find((item) => item.value === value)?.label || ""
            : selectMessage} 
          style={{
            width: 'calc(100% - 1.25rem)',
            fontSize: '1rem',
            fontWeight: 'normal',
            height: 'auto',
            // ...dropStyle,
            // ...dropOnStyle,
            ...draggingStyle,
          }}
          onChange={onTextChange}
          onClick={(e) => { /* console.log("here"); */ e.stopPropagation()}}
          onKeyDown={keyDown}
          onKeyUp={keyPresses}
          focusChar={focusChar}
          />
          <div className="flex w-5 justify-center items-center flex p-0"
          aria-expanded={open}>
            <CaretSortIcon className={`h-4 ${values.length > 1 ? "text-teal-100/80" : "opacity-80 fill-white" }`} style={{
              padding: '0px 0px 0px 0px',
            }} />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          {/* <CommandInput placeholder={searchMessage} className="h-9" /> */}
          <CommandEmpty>{emptyMessage}</CommandEmpty>
          <CommandGroup>
            {values.map((item, index) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? value : currentValue)
                  handleChange(currentValue)
                  setOpen(false)
                }}
                
              >
                {item.label || <span className="opacity-50">{`New Option`}</span>}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === item.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {values.length > 1 && (!(value === item.value)) && (<div>
                  <Trash2
                    className="h-4 w-4 opacity-50 hover:opacity-100 cursor-pointer"
                    color={"rgba(200, 100, 100, .7)"}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDeleteOption(index)
                    }} />
                </div>)}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup>
            <div  className="grid grid-cols-2 place-content-stretch gap-1">
              <div className="">
                <Button
                  onClick={() => {
                    addOption()
                    setOpen(false)
                  }}
                  className="justify-center bg-gray-100/30 text-gray-900 hover:bg-gray-200 h-10 w-full"
                >
                  <PlusIcon className="h-4" />
                </Button>
              </div>
              <div className="">
                <Button
                  onClick={() => {
                    suggestOption()
                    setOpen(false)
                  }}
                  className="bg-emerald-900 w-full">
                  <BrainCircuit className="h-4" />
                </Button>
              </div>
            </div>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

