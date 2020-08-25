import React from 'react'
import {useState, useEffect} from "react";
import Input from "./Input";
import * as yup from "yup";
import registerFormSchema from './validation/registerValidation'


const Register = () => {

    // initialize data structures

    const defaultRegisterState = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        terms: false,
      };

    const defaultErrorsState = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        terms: false,
    };

    const initialSubmitDisabled = true;

    // initialize states

    const [registerState, setRegisterState] = useState(defaultRegisterState);
    const [errors, setErrors] = useState(defaultErrorsState);
    const [submitDisabled, setSubmitDisabled] = useState(initialSubmitDisabled);

    // validation handler


    // form handlers


    ///// input change

    const inputChange = (e) => {
        //ternary operator to determine the form value
        const value = e.target.value;
        setRegisterState({...registerState, [e.target.name]: value});
        // validateChange(e);
      };    

     ///// submit handler

     const dummySubmitHandler = (e) => {
        return console.log(`submit pushed. form values: ${registerState}`);
    }  

    return (
        <div>
            <h3>This is our registration form.</h3>
            <form onSubmit={dummySubmitHandler}>
                <Input
                type="text"
                name="username"
                onChange={inputChange}
                value={registerState.username}
                label="username"
                errors={errors}
            />
            <Input
                type="text"
                name="password"
                onChange={inputChange}
                value={registerState.password}
                label="password"
                errors={errors}
            />
            <Input
                type="text"
                name="firstName"
                onChange={inputChange}
                value={registerState.firstName}
                label="firstName"
                errors={errors}
            />
            <Input
                type="text"
                name="lastName"
                onChange={inputChange}
                value={registerState.lastName}
                label="lastName"
                errors={errors}
            />
            <Input
                type="email"
                name="email"
                onChange={inputChange}
                value={registerState.email}
                label="email"
                errors={errors}
            />
            <Input
                type="checkbox"
                name="terms"
                onChange={inputChange}
                value={registerState.terms}
                label="checkbox"
                errors={errors}
            />
            <button disabled={submitDisabled}>Submit</button>
            </form>
        </div>
    )

    
}

export default Register
