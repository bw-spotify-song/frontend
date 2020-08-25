import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { fetchUserList } from '../../store/actions'
import { useSelector, useDispatch } from 'react-redux'


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
    },[])

    return (
        
        <div>
            {
                userList.map(item => {
                    return (
                        <div key={item.id}>{item.email}</div>
                )})
        }
            </div>
            
    )
}

export default Admin
