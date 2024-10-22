import { useEffect, useMemo, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [count, setcount] = useState(0);
  const [inputVal, setInputVal] = useState(0);

  // let sum = 0;
  // for(let i=1; i<=inputVal; i++){
  //   sum+=i;
  // }
  
  let sum = useMemo(()=>{
    let sum1 = 0;
    for(let i=1; i<=inputVal; i++){
      sum1+=i;
    }
    return sum1;      
  }, [inputVal])
  return (
    <div>
      <button onClick={() => setcount(count+1)}>{"counter "+count}</button>
      <div></div>
      <input type="text" onChange={(e) => {
        setInputVal(e.target.value);
      }}></input>
      <div>{sum}</div>
    </div>
  );
}




export default App;
