import React, { useState } from 'react'
import {BrowserRouter,Routes, Route, useNavigate} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const Dashboard = React.lazy(()=> import('./components/Dashboard'));
const Landing = React.lazy(()=> import('./components/Landing'));


function App() {
  
  

  return (
    <div>
      <BrowserRouter>
        <Appbar></Appbar>
        <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/' element={<Landing></Landing>}></Route>
          
        </Routes>
        </React.Suspense>
      </BrowserRouter>
    </div>
    
  )
}

function Appbar(){
  const nav = useNavigate();
  return(
    <div>
      <div style={{background:"black" , color:"white"}}> 
          This is top bar 
          <button onClick={() => {
            nav("/dashboard");
          }}>Dashboard</button>
          <button onClick={() => {
            nav("/");
          }}>Landing</button>
      </div>
    </div> 
  )
}

export default App
