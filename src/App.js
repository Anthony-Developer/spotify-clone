import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Player from './Components/Player'
import { getTokenFromUrl } from './Spotify'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi()

function App() {
  const [token, setToken] = useState(null)

  // On refresh we check if we have a token from Spotify
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token

    if (_token) {
      setToken(_token)
      spotify.setAccessToken(_token)
      // Getting our user profile from Spotify
      spotify.getMe().then(user => {
        console.log('I am ', user)
      })
    }
  }, [])

  return (
    <div className="App">
      
      {token ? <Player /> : <Login />}
    
    </div>
  )
}

export default App
