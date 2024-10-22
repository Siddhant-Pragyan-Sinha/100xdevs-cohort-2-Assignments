import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="grid grid-cols-3">
          <div class="text-center bg-sky-500/100 md:col-span-1 col-span-3">hey</div>
          <div class="text-center bg-sky-500/60 md:col-span-1 col-span-3">hey</div>
          <div class="text-center bg-sky-500/30 md:col-span-1 col-span-3">hey</div>
      </div>
    </>
  )
}

export default App
