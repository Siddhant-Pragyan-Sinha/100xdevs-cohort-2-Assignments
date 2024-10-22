import { useState ,memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [title1, setTitle1] = useState("har");
  return (
    <div>
        <Btn buttonHandler={buttonHandler}></Btn>
        <Headers title={title1 + "hello"}></Headers>
        <Headers title="hello6"></Headers>
        <Headers title="hello6"></Headers>
        <Headers title="hello6"></Headers>
        <Headers title="hello6"></Headers>
    </div>
    
  )
  function buttonHandler(){
    setTitle1(Math.random());
  }
}

function Btn({buttonHandler}){

  

  
  return(
    <>
      <button onClick={buttonHandler}> Click me to change the title.</button>
    </>
  )
}
const Headers = memo(({title}) => {
  return (
    <h1>{title}</h1>
  )
});

export default App
