
import {
  FETCH_SONGLIST,
  FETCH_USERS,
  FETCH_SPOTIFYSONG,
  FETCH_SPOTIFYLIST,
  POST_SONG,
  FETCH_USERID,
} from "../actions"

const initialState = {
  songList: [],
  userID: '',
  spotifyList:[],
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
    default:
      return state
  }
}
