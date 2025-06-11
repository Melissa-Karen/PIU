import { useState } from 'react'
import './App.css'
import PrimeiroComponente from './components/PrimeiroComponente'
import SegundoComponente from './components/SegundoComponente'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PrimeiroComponente />
      <SegundoComponente />
    </>
  )
}

export default App
