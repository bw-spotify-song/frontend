import React from 'react'
import {useState, useEffect} from "react";
import Input from "./Input";
import * as yup from "yup";
// import axios from "axios";
import loginFormSchema from './validation/loginValidation'

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

     // create validation handlers/yup 

     const validateChange = (e) => {
        e.persist();
        yup
          .reach(loginFormSchema, e.target.name)
          .validate(e.target.value)
          .then((valid) =>{ 
            setErrors({
              ...errors,
              [e.target.name]: ""
            })
            }
          )
          .catch((error) => {
            setErrors({
              ...errors,
              [e.target.name]: error.errors[0]
            })
        }
          );
      };
    
     // form handlers

     ///// input change handler
     const inputChange = (e) => {
        //ternary operator to determine the form value
        const value = e.target.value;
        setLoginState({...loginState, [e.target.name]: value});
        validateChange(e);
      };

      ///// submit handler

      const dummySubmitHandler = (e) => {
          return console.log(`submit pushed. form values: ${loginState}`);
      }

      // side effects

      useEffect(() => {
        loginFormSchema.isValid(loginState)
          .then(valid => {
            setSubmitDisabled(!valid);
          })
      }, [loginState]);


    return (
        <div>
            <h3>This is our login form.</h3>
            <form onSubmit={dummySubmitHandler}>
                <Input
                type="text"
                name="username"
                onChange={inputChange}
                value={loginState.username}
                label="Username"
                errors={errors}
            />
            <Input
                type="text"
                name="password"
                onChange={inputChange}
                value={loginState.password}
                label="Password"
                errors={errors}
            />
            <button disabled={submitDisabled}>Submit</button>
            </form>

        </div>
    )
}

export default Login
