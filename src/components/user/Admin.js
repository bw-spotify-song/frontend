import React, { useEffect } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { fetchUserList, deleteUser, editUser } from '../../store/actions/appActions'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'


const Admin = () => {

    const userList = useSelector(state => state.userList)
    const dispatch = useDispatch()

    useEffect(() => {
        axiosWithAuth().post('/auth/login', {
            "email": "tester@tester.com",
            "password": "password"
        }).then(res => {
            console.log(res.data)
            localStorage.setItem("token", res.data.token)
        })
    }, [])

    useEffect(() => {
        dispatch(fetchUserList())
    },[dispatch])

    return (
        
        <div>
            {
                userList.map(user => {
                    return (
                        <div key={user.id}>
                            <p>{user.id}</p>
                            <h3>{user.firstName}</h3>
                            <p>{user.email}</p>
                            <Link to={`/user/2/${user.id}`}><button onClick={() => dispatch({ type: editUser()})}>Edit User</button></Link>
                            
                            <button onClick={() => dispatch(deleteUser())}>Delete User</button>
                        </div>
                )})
        }
            </div>
            
    )
}

export default Admin
