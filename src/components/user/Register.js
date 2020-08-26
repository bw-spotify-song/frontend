import React from 'react'
import {useState, useEffect} from "react";
import Input from "./Input";
import * as yup from "yup";
import registerFormSchema from './validation/registerValidation'
import styled from "styled-components"
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import { Button, Box, Paper } from "@material-ui/core"

    // styles

    const StyledForm = styled.div`

    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    Input {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    }

    `


const Register = () => {

    const history = useHistory()

    // initialize data structures

    const defaultRegisterState = {
        //username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        //terms: false,
      };

    const defaultErrorsState = {
        //username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        //terms: "",
    };

    const initialSubmitDisabled = true;

    // initialize states

    const [registerState, setRegisterState] = useState(defaultRegisterState);
    const [errors, setErrors] = useState(defaultErrorsState);
    const [submitDisabled, setSubmitDisabled] = useState(initialSubmitDisabled);

    // validation handler

    const validateChange = ([name, value]) => {
      // e.persist();
      yup
        .reach(registerFormSchema, name)
        .validate(value)
        .then((valid) =>{ 
          setErrors({
            ...errors,
            [name]: ""
          })
          }
        )
        .catch((error) => {
          console.log(error);
          setErrors({
            ...errors,
            [name]: error.errors[0]
          })
      }
        );
    };


    // form handlers


    ///// input change

    const inputChange = (e) => {
        
        // if (e.target.type === "checkbox" && e.target.checked){
        //   console.log()
        // }
  
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        // console.log(value);
        setRegisterState({...registerState, [e.target.name]: value});
        validateChange([e.target.name, value]);
      };    

     ///// submit handler

  const dummySubmitHandler = (e) => {
    e.preventDefault()
    axiosWithAuth()
      .post(`auth/register`, registerState)
      .then(res => {
        console.log(res)
        history.push('/user/login')
      })
    .catch(err => console.log(err))
  
    }  

    // side effects

    useEffect(() => {
        registerFormSchema.isValid(registerState)
          .then(valid => {
            setSubmitDisabled(!valid);
            // console.log(valid)
          })
      }, [registerState]);

      

    return (
      <Box
        className="formContainer"
        display="flex"
        alignItems="center"
        justifyContent="center"
        m={4}
      >
        <StyledForm>
          {/* <h3>This is our registration form.</h3> */}
          <form onSubmit={dummySubmitHandler}>
            {/* <Input
                    type="text"
                    name="username"
                    onChange={inputChange}
                    value={registerState.username}
                    label="Username"
                    errors={errors}
                /> */}

            <Paper>
              <Box
                display="flex"
                flexDirection="column"
                align="center"
                width="150px"
                height="250px"
                justifyContent="space-around"
                alignItems="center"
                p={10}
              >
                <Input
                  type="email"
                  name="email"
                  onChange={inputChange}
                  value={registerState.email}
                  label="Email"
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

                {/* <Input
                    type="checkbox"
                    name="terms"
                    onChange={inputChange}
                    value={registerState.terms}
                    label="Terms"
                    errors={errors}
                /> */}
                <Button
                  disabled={submitDisabled}
                  onClick={dummySubmitHandler}
                  color="secondary"
                  variant="contained"
                >
                  {" "}
                  Submit
                </Button>
              </Box>
            </Paper>
          </form>
        </StyledForm>
      </Box>
    )

    
}

export default Register
