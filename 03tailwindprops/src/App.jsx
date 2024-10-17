import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-black text-yellow-400 p-4 rounded-xl mb-5'>Tailwind Test</h1>
      <Card name='Ahmed' text='my name is muhammad ahmed karim nagda and i am a web developer' btnText='visit my portfolio' />
      <Card name='abdul samad' text='my name is abdul samad and i am a web developer ' btnText='visit me website' />
      <Card />
    </>
  )
}

export default App
