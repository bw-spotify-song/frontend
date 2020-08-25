import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const USERPAGE = 'USERPAGE';
export const SUCCESSFUL_FIND = 'SUCCESSFUL_FIND';
// export const ADDSONGS = 'ADDSONG';

export const userPage = () => (dispatch) => {
    dispatchEvent({ type: USERPAGE })

    axiosWithAuth().get('https://lambdabackend.herokuapp.com/songs/2')
    .then(response => {
        console.log(response)
        dispatch({ type: SUCCESSFUL_FIND, payload: response})
    })
    .catch(err => {
        console.log('error:', err)
    })
}