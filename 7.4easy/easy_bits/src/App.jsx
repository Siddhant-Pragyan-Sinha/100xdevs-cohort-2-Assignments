import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { notiAtom, msgAtom, jobsAtom, networkAtom, totalSel } from './atoms'



function App() {
  
  

  return (
    <RecoilRoot>
      <TopBar></TopBar>
    </RecoilRoot>
  )
}

function TopBar(){
  const networkCount = useRecoilValue(networkAtom)>100 ? "99+" : useRecoilValue(networkAtom) ;
  const jobsCount = useRecoilValue(jobsAtom)>100 ? "99+" : useRecoilValue(jobsAtom) ;
  const msgCount = useRecoilValue(msgAtom)>100 ? "99+" : useRecoilValue(msgAtom) ;
  const notiCount = useRecoilValue(notiAtom)>100 ? "99+" : useRecoilValue(notiAtom) ;
  const total = useRecoilValue(totalSel);
  return(
    <div>
      
        <button>Home</button>
        <button>Network ({networkCount})</button>
        <button>Jobs ({jobsCount})</button>
        <button>Messaging ({msgCount})</button>
        <button>Notifications ({notiCount})</button>
        <button>Me ({total})</button>
    </div>
  )
}

export default App
