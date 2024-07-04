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
          // canPromptGPT: true,
          // promptGPT: promptGPTMock,
        }}/>
    </div>
  </div>)
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TestApp />
  </React.StrictMode>,
)


const promptGPTMock = async (
  systemPrompt: string, 
  userPrompt: string, 
  options?: { temperature?: number | undefined; } | undefined
): Promise<{ choices: { message: { content: string; role: string; }; finishReason: string; }[]; }> => {

  const optionMatch = userPrompt.match(/(.*)(\n|$)/)
  const subtaskMatch = userPrompt.match(/(.*)(\n|$)/)
  const durationMatch = userPrompt.match(/(.*)(\n|$)/)

  if (optionMatch){
    return {
      choices: [{
        message: {
          content: `Option: ${optionMatch[1]}`,
          role: 'option',
        },
        finishReason: 'complete',
      }]
    }
  }

  if (subtaskMatch){
    return {
      choices: [{
        message: {
          content: `Subtask: ${subtaskMatch[1]}`,
          role: 'subtask',
        },
        finishReason: 'complete',
      }]
    }
  }

  if (durationMatch){
    return {
      choices: [{
        message: {
          content: `Duration: ${durationMatch[1]}`,
          role: 'duration',
        },
        finishReason: 'complete',
      }]
    }
  }

  throw new Error('could not match prompt to any known type')

}
