
import {
  FETCH_SONGLIST,
  FETCH_SPOTIFYLIST,
  POST_SONG,
  DELETE_SONG,

  FETCH_USERLIST,
  EDIT_USER,
  DELETE_USER
} from "../actions"

const initialState = {
  songList: [],
  spotifyList: [],
  userList: [{
    firstName:'',
    lastName:'',
    email:'',
    password:''
  }],
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    /*-----------------song List-------------------*/
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
    case DELETE_SONG:
      return {
        ...state,
        songList: state.songList.filter(item => item.id !== action.payload)
      }
    case FETCH_SPOTIFYLIST:
      return {
        ...state,
        spotifyList: action.payload
      }
    /*-----------------user Admin---------------------*/
    case FETCH_USERLIST:
      return {
        ...state,
        userList: action.payload
      }
    case DELETE_USER:
      return {
        ...state, userList: state.userList.filter(user => user.id = !action.payload.id)
      }
    case EDIT_USER:
      return {
        // ...state, userList: {
        //   firstName: action.payload.firstName,
        //   lastName: action.payload.lastName,
        //   email: action.payload.email
        // }
      }
    default:
      return state
  }
}
