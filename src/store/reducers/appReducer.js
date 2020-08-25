import {USERPAGE, SUCCESSFUL_FIND} from '../actions/actions';

export const initialState = {
  id: '',
  spotifyID:'',
  user_id: '',
  error: '',
}

export const appReducer = (state = initialState, action) => {  
  switch (action.type) {
    case USERPAGE:
      return {...state, error:''}

    case SUCCESSFUL_FIND:
      return { ...state, state: action.payload}


    default:
      return {state}
  }
}