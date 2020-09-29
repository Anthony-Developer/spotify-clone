import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './Components/Login'
import { getTokenFromUrl } from './Spotify'

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token

    if (_token) {
      setToken(_token)
    }

    console.log('I have a token', _token)
  }, [])

  return (
    <div className="App">
      
      <Login />
    
    </div>
  )
}

export default App
