
import {
  FETCH_SONGLIST,
  FETCH_SPOTIFYSONG,
  FETCH_SPOTIFYLIST,
  POST_SONG,
  FETCH_USERID,
  FETCH_USERLIST,
  EDIT_USER,
  DELETE_USER
} from "../actions"

const initialState = {
  songList: [],
  userID: '',
  spotifyList: [],
  userList: [],
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONGLIST:
      return {
        ...state,
        songList: action.payload,
      }
    case POST_SONG:
      return {
        ...state,
        songList: [...state.songList, action.payload]
      }
    case FETCH_USERID:
      return {
        ...state,
        userID: action.payload
      }
    case FETCH_SPOTIFYLIST:
      return {
        ...state,
        spotifyList: action.payload
      }
    case FETCH_USERLIST:
      return {
        ...state,
        userList: action.payload
      }
    default:
      return state
  }
}
