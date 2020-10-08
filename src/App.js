import React, { useEffect } from 'react'
import './App.css'
import Login from './Components/Login'
import Player from './Components/Player'
import { getTokenFromUrl } from './Spotify'
import { useDataLayerValue } from './DataLayer'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi()

function App() {
  const [{user, token}, dispatch] = useDataLayerValue()

  // On refresh we check if we have a token from Spotify
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token)
      // Getting our user profile from Spotify
      spotify.getMe().then(user => {
        // Sends data we just got from Spotify to our Data Layer
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })

      // Getting Playlist data from Spotify
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      })

    }
  }, [])


  return (
    <div className="App">
      
      {token ? <Player spotify={spotify}/> : <Login />}
    
    </div>
  )
}

export default App
