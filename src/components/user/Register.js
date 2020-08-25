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

    const validateChange = (e) => {
        e.persist();
        yup
          .reach(registerFormSchema, e.target.name)
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


    ///// input change

    const inputChange = (e) => {
        //ternary operator to determine the form value
        const value = e.target.value;
        setRegisterState({...registerState, [e.target.name]: value});
        validateChange(e);
      };    

     ///// submit handler

     const dummySubmitHandler = (e) => {
        return console.log(`submit pushed. form values: ${registerState}`);
    }  

    // side effects

    useEffect(() => {
        registerFormSchema.isValid(registerState)
          .then(valid => {
            setSubmitDisabled(!valid);
          })
      }, [registerState]);


    return (
        <div className = 'formContainer'>
            <h3>This is our registration form.</h3>
            <form onSubmit={dummySubmitHandler}>
                <Input
                type="text"
                name="username"
                onChange={inputChange}
                value={registerState.username}
                label="Username"
                errors={errors}
            />
            <Input
                type="text"
                name="password"
                onChange={inputChange}
                value={registerState.password}
                label="Password"
                errors={errors}
            />
            <Input
                type="text"
                name="firstName"
                onChange={inputChange}
                value={registerState.firstName}
                label="First Name"
                errors={errors}
            />
            <Input
                type="text"
                name="lastName"
                onChange={inputChange}
                value={registerState.lastName}
                label="Last Name"
                errors={errors}
            />
            <Input
                type="email"
                name="email"
                onChange={inputChange}
                value={registerState.email}
                label="Email"
                errors={errors}
            />
            <Input
                type="checkbox"
                name="terms"
                onChange={inputChange}
                value={registerState.terms}
                label="Terms"
                errors={errors}
            />
            <button disabled={submitDisabled}>Submit</button>
            </form>
        </div>
    )

    
}

export default Register
