import React, { useEffect } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { fetchUserList } from '../../store/actions'
import { useSelector, useDispatch } from 'react-redux'


const Admin = () => {

    const userList = useSelector(state => state.userList)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     axiosWithAuth().post('/auth/login', {
    //         "email": "tester@tester.com",
    //         "password": "password"
    //     }).then(res => {
    //         console.log(res.data)
    //         localStorage.setItem("token", res.data.token)
    //     })
    // }, [])

    useEffect(() => {
        dispatch(fetchUserList())
    },[])

    return (
        
        <div>
            {
                userList.map(user => {
                    return (
                        <div key={user.id}>
                            <p>{user.id}</p>
                            <h3>{user.firstName}</h3>
                            <p>{user.email}</p>
                        </div>
                )})
        }
            </div>
            
    )
}

export default Admin
