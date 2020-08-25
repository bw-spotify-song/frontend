import React, { useState } from 'react';

const initialState = {
    firstname: '',
    lastname: '',
    email:'',
    password:''
}
const UserProfile = () => {

    const [info, setInfo] = useState(initialState)

    const handleChange = e => {
        setInfo({
            ...info, [e.target.name]: e.target.value
        })
    }

    return (
        <>
        <form>
            <label>
                <input
                    type='text'
                    placeholder='First Name'
                    name='firstname'
                    value={info.firstname}
                    onChange={handleChange}
                    />
            </label>
            <label>
                <input
                    type='text'
                    placeholder='Last Name'
                    name='lastname'
                    value={info.lastname}
                    onChange={handleChange}
                    />
            </label>
            <label>
                <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={info.email}
                    onChange={handleChange}
                    />
            </label>
            <label>
                <input
                    type='password'
                    name='password'
                    placeholder='PassWord'
                    value={info.password}
                    onChange={handleChange}
                    />
            </label>
        </form>
        </>
    )
}

export default UserProfile