// import { useParams } from  'react-router';
const { axiosWithAuth, axiosWithSpotify, getToken } = require("../../utils/axiosWithAuth");

/*----------------song list-----------------*/
export const FETCH_SONGLIST = "FETCH_SONGLIST"
export const FETCH_USERID = "FETCH_USERID"
export const FETCH_SPOTIFYLIST = "FETCH_SPOTIFYLIST"
export const FETCH_SPOTIFYSONG = "FETCH_SPOTIFYSONG"
export const POST_SONG = "POST_SONG"
export const DELETE_SONG = "DELETE_SONG"

/*------------------user Admin----------------*/
export const FETCH_USERLIST = "FETCH_USERLIST"
export const DELETE_USER = "DELETE_USER"
export const EDIT_USER = "EDIT_USER"

/*-----------------------song list------------------------*/
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

export const deleteSong = (userID, id) => (dispatch) => {
    axiosWithAuth().delete(`songs/${userID}/${id}`)
        .then(res => {
            console.log(res.data.message.split(' '))
            dispatch({type: DELETE_SONG, payload: Number(res.data.message.split(' ')[3])})
    })
}

/*---------------------user Admin-------------------------*/

export const fetchUserList = () => (dispatch) => {
    axiosWithAuth()
        .get('users')
        .then(res => {
            dispatch({ type: FETCH_USERLIST, payload: res.data })
            
        })
        
}
// const user = useParams().id
export const deleteUser = (id) => (dispatch) => {
    console.log('delete user', id)
    axiosWithAuth()
    
        .delete(`users/${id}`)
        .then(res => {
            dispatch({ type: DELETE_USER, payload: res.data})
            console.log('user deleted')
            window.location.reload(true)
        })
        .catch(err => {
            console.log(err)
        })
        
}
export const editUser = (id, info) => (dispatch) => {
    axiosWithAuth()
    .put(`users/${id}`, info)
    .then(res => {
        dispatch({ type: EDIT_USER, payload: res.data})
        window.location.reload(true)
    })
    .catch(error => {
        console.log(error.message)
    })
}