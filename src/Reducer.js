// Creating a default initial state
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Temporary personal token while building REMOVE WHEN COMPLETE
    token: 'BQCoETiRZiQPBlag7eaU8jbTGVqQDrlnS6X1erKsHrL2A39Qln8ytLpgnrfpfebKBI8jDQpuayOI7Ki-iTw7FATuNAHSxtjWf77tmyft-1dynEE9NGChPpRVpkM4MfB4hfc--0ZaWx4lOrmAwYbM94ssnfyKqaA'
}

const reducer = (state, action) => {
    console.log(action)

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        // I keep getting an empty array from Spotify regarding my playlists... LOOK INTO THIS
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }

        default:
            return state
    }
}

export default reducer