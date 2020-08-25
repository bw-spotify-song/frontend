const { axiosWithAuth, axiosWithSpotify } = require("../../utils/axiosWithAuth");

export const FETCH_SONGLIST = "FETCH_SONGLIST"
export const FETCH_USERID = "FETCH_USERID"
export const FETCH_SPOTIFYLIST = "FETCH_SPOTIFYLIST"
export const FETCH_SPOTIFYSONG = "FETCH_SPOTIFYSONG"
export const POST_SONG = "POST_SONG"

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