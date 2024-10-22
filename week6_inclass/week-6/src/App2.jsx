import React, { useContext, useState } from 'react'
import {BrowserRouter,Routes, Route, useNavigate} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context'


function App2() {
    const [cnt, setCnt] = useState(0);

    return (
        <div>
            <CountContext.Provider value={{cnt, setCnt}}>
                <Count></Count>
            </CountContext.Provider>
        </div>  
    )
}

function Count(){
    const {cnt} = useContext(CountContext);
    return(
        <div>
            {cnt}
            <Buttons></Buttons>
        </div>
    )
}

function Buttons(){
    const {cnt, setCnt} = useContext(CountContext);
    return(
        <div>
        
        <div>
            <button onClick={()=>{
                setCnt(cnt+1);
            }}>Increase</button>
        </div>

        <div>
            <button onClick={()=>{
                setCnt(cnt-1);
            }}>Decrease</button>
        </div>
            
        </div>
        
    )
}

export default App2