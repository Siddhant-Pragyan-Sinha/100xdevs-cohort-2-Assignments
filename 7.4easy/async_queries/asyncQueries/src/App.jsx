
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { networkAtom, totalNotificationSelector } from './atoms'
import { useEffect } from 'react'
import axios from 'axios'


function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(networkAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // useEffect(() => {
  //   // fetch
  //   const url = 'http://localhost:3000/random';
  //   axios.get(url)
  //     .then(async(res) => {
  //       console.log(res);
  //       await new Promise(r => setTimeout(r, 5000));
  //       setNetworkCount({
  //         network: res.data.randomNumber, 
  //         jobs: 9, 
  //         messaging: 31, 
  //         notifications: 31
  //     })
  //     })
  // }, [])

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App