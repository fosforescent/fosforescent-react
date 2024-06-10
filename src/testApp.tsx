import React from 'react'
import ReactDOM from 'react-dom/client'
import Main, { FosContextData } from '.'


const TestApp = () => {


  const [state, setState] = React.useState<FosContextData | undefined>()

  return (<div style={{
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }} className="border-3 border-black">
    <div style={{
      width: "80%",
      height: "80%",
      overflowY: "auto",
      }} className='border-black border-1'>
      <Main data={state} setData={setState} options={{
        theme: "dark"
      }}/>
    </div>
  </div>)
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TestApp />
  </React.StrictMode>,
)
