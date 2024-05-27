import React from 'react'
import ReactDOM from 'react-dom/client'
import Main, { FosContextData } from '.'


const TestApp = () => {


  const [state, setState] = React.useState<FosContextData | undefined>()

  return (<div>
    <Main data={state} setData={setState} />
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TestApp />
  </React.StrictMode>,
)
