const { axiosWithAuth, axiosWithSpotify, getToken } = require("../../utils/axiosWithAuth");

export const FETCH_SONGLIST = "FETCH_SONGLIST"
export const FETCH_USERID = "FETCH_USERID"
export const FETCH_SPOTIFYLIST = "FETCH_SPOTIFYLIST"
export const FETCH_SPOTIFYSONG = "FETCH_SPOTIFYSONG"
export const POST_SONG = "POST_SONG"


export const FETCH_USERLIST = "FETCH_USERLIST"
export const DELETE_USER = "DELETE_USER"
export const EDIT_USER = "EDIT_USER"

export const fetchSongList = (userID) => (dispatch) => {
 
    axiosWithAuth()
        .get(`songs/${userID}`)
        .then((res) => {    
            dispatch({ type: FETCH_SONGLIST, payload: res.data })
        })
        .catch((err) => console.log(err))
}

export const postSong = (userID, spotifyID) => (dispatch) => {

    axiosWithAuth()
        .post(`songs/${userID}`, spotifyID)
        .then(res => {
            console.log(res)
            dispatch({ type: POST_SONG, payload: res.data})
        })
    .catch(err => console.log(err))
}

export const fetchUser = (email) => (dispatch) => {
    axiosWithAuth().get('users').then(res => {
        dispatch({ type: FETCH_USERID, payload: res.data.filter(item => item.email === email )[0].id})
    })
}

export const fetchTracks = (spotifyIDs) => (dispatch) => {
    getToken()
    axiosWithSpotify()
        .get(`https://api.spotify.com/v1/tracks/?ids=${spotifyIDs.join(",")}`)
            .then(res => {
                dispatch({type: FETCH_SPOTIFYLIST, payload:res.data.tracks})
            })
}

export const fetchUserList = () => (dispatch) => {
    axiosWithAuth()
        .get('users')
        .then(res => {
            dispatch({ type: FETCH_USERLIST, payload: res.data })
        })
}
