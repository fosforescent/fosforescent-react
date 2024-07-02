import React from 'react'
import ReactDOM from 'react-dom/client'
import Main, { FosContextData } from '.'


import './global.css'
import './index.css'

const TestApp = () => {


  const [state, setState] = React.useState<FosContextData | undefined>()


  // const [activeModule, setActiveModule] = React.useState<FosModule | undefined>(fosModules.workflow)

  // const setActiveModuleWithLog = (module: FosModule | undefined) => {
  //   console.log('setActiveModule', module)
  //   setActiveModule(module)
  // }


  return (<div style={{
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }}>
    <div style={{
      width: "80%",
      height: "80%",
      overflowY: "auto",
      }}>
      <Main 
        data={state} 
        setData={setState} 
        options={{
          theme: "light",
          // activeModule,
          // setActiveModule: setActiveModuleWithLog,
        }}/>
    </div>
  </div>)
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TestApp />
  </React.StrictMode>,
)
