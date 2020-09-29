export const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectUri = "http://localhost:3000/"

const clientId = "b05a2f2293884c5ba6a010271f59d891"

const scopes = ["user-read-currently-playing", "user-read-recently-played", "user-read-playback-state", "user-top-read", "user-modify-playback-state"]

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

// Extracting the Access Token received from Spotify after authentication
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
        
        return initial
    }, {})
} 