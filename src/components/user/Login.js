import React from 'react'
import {useState, useEffect} from "react";
import Input from "./Input";
import * as yup from "yup";
import axios from "axios";

const Login = () => {
    // initialize data stuctures

    const defaultLoginState = {
        username: "",
        password: "",
      };

    const defaultErrorsState = {
        username: "",
        password: "",
    };

    const initialSubmitDisabled = true;
    
    // initialize states

    const [loginState, setLoginState] = useState(defaultLoginState);
    const [errors, setErrors] = useState(defaultErrorsState);
    const [submitDisabled, setSubmitDisabled] = useState(initialSubmitDisabled);

     // create authentication handlers/yup 

     ///// waiting for JSX + form Handlers

     // side effects

     // form handlers

     ///// input change handler
     const inputChange = (e) => {
        //ternary operator to determine the form value
        const value = e.target.value;
        setLoginState({...loginState, [e.target.name]: value});
        // validateChange(e);
      };

      ///// submit handler

      const dummySubmitHandler = (e) => {
          return console.log('submit button pushed');
      }

      ///// determine submit disabled handler




    return (
        <div>
            <p>This is our login.</p>
            <form onSubmit={dummySubmitHandler}>
                <Input
                type="text"
                name="username"
                onChange={inputChange}
                value={loginState.username}
                label="username"
                errors={errors}
            />
            <Input
                type="text"
                name="password"
                onChange={inputChange}
                value={loginState.password}
                label="password"
                errors={errors}
            />
            <button disabled={submitDisabled}>Submit</button>
            </form>

        </div>
    )
}

export default Login
