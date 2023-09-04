import { useState } from 'react'
import CallHomePage from './components/CallHomePage'
import SwitchBetween from './components/SwitchBetween'
import { useEffect } from 'react'
import ProfilePage from './components/ProfilePage'

function App() {
  const [auth, setAuth] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      setAuth(true)
    }
    else {
      setAuth(false)
    }
  }, [auth])

  return (
    <>
      {auth ? (
        <CallHomePage auth={auth} setAuth={setAuth} />
      ) : (
        <SwitchBetween setAuth={setAuth} />
      )}
    </>
  )
}

export default App
