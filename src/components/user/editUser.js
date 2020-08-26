import React, { useState, useEffect } from 'react';
import { editUser } from '../../store/actions/appActions'
import { connect } from 'react-redux';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useParams } from 'react-router';

const initialState = {
    firstName: '',
    lastName: '',
    email:'',
    password:''
}
const UserProfile = (props) => {
    const user = useParams().id
    const [info, setInfo] = useState(initialState)
    console.log(user)
    const handleChange = e => {
        setInfo({
            ...info, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        props.editUser(user, info)
        setInfo(initialState)
         props.history.push('/admin')
        
    }
    useEffect(() => {
        axiosWithAuth().get(`/users/${user}`)
        .then(resp => {
            console.log(resp)
            setInfo({
                firstName: resp.data.firstName,
                lastName: resp.data.lastName,
                email: resp.data.email,
                password: resp.data.password
            })
        })
        
    }, [user])
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <h3>All Fields Must Be Completed</h3>
            <label>
                <input
                    type='text'
                    // placeholder='First Name'
                    name='firstname'
                    value={info.firstName}
                    onChange={handleChange}
                    />
            </label>
            <label>
                <input
                    type='text'
                    // placeholder='Last Name'
                    name='lastname'
                    value={info.lastName}
                    onChange={handleChange}
                    />
            </label>
            <label>
                <input
                    type='email'
                    // placeholder='Email'
                    name='email'
                    value={info.email}
                    onChange={handleChange}
                    />
            </label>
            <label>
                <input
                    type='password'
                    name='password'
                    // placeholder='Password'
                    value={info.password}
                    onChange={handleChange}
                    />
            </label>
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}

export default connect(null, { editUser})(UserProfile)