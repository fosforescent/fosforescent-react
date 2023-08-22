import React, { ReactElement } from 'react'
import { ReactViewOptions } from './client'
import { IFosInterpreter } from 'fosforescent-js'
import { Input } from "@/components/ui/input"

const NameView = ({
  interpreter,
  options,
  }: {
  interpreter: IFosInterpreter
  options: ReactViewOptions
}) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newStack = interpreter.setValue(event.target.value)
    // options.setStack(newStack.slice(1, newStack.length - 1))
  }

  const value = interpreter.getValue()
  return (<Input type="text" placeholder="Name" onChange={handleChange} value={value} />)
}


export function CellView({
  interpreter,
  options,
}: {
  interpreter: IFosInterpreter
  options: ReactViewOptions
}) {
  const [showTree, setShowTree] = React.useState(true)

  if (interpreter.isName()) {
    return <NameView interpreter={interpreter} options={options} />
  } else if (interpreter.isTask()) {
    return <></>
  } else {
    return (
      <div style={{ border: '1px solid blue' }}>
        <div>Cell {interpreter.getDisplayString()}</div>
      </div>
    )
  }

}
export default CellView
