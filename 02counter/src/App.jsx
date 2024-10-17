import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let value = 20
  let [value, setValue] = useState(0)
  const addValue = () => {
    setValue(prevCounter => prevCounter + 1 )
    setValue(prevCounter => prevCounter + 1 )
    setValue(prevCounter => prevCounter + 1 )
    setValue(prevCounter => prevCounter + 1 )
    setValue(prevCounter => prevCounter + 1 )
   
  
  }

  return (
    <>
      <h1>React Counter</h1>
      <h2>Counter Value : {value}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button>Remove Value</button>
    </>
  )
}

export default App
