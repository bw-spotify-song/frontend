import React from "react"
import { useState, useEffect } from "react"
import Input from "./Input"
import * as yup from "yup"
import loginFormSchema from "./validation/loginValidation"
//import styled from "styled-components"
import { axiosWithAuth } from "../../utils/axiosWithAuth"
import { useHistory } from "react-router-dom"
import { Button, Box, Paper } from "@material-ui/core"

// styles

// const StyledForm = styled.div`
//   display: flex;
//   flex-flow: column wrap;
//   justify-content: center;
//   align-items: center;
//   vertical-align: middle;

//   Input {
//     display: flex;
//     flex-flow: column wrap;
//     justify-content: center;
//     align-items: center;
//     vertical-align: middle;
//   }
// `

const Login = () => {
  const history = useHistory()

  // initialize data stuctures

  const defaultLoginState = {
    email: "",
    password: "",
  }

  const defaultErrorsState = {
    email: "",
    password: "",
  }

  const initialSubmitDisabled = true

  // initialize states

  const [loginState, setLoginState] = useState(defaultLoginState)
  const [errors, setErrors] = useState(defaultErrorsState)
  const [submitDisabled, setSubmitDisabled] = useState(initialSubmitDisabled)

  // create validation handlers/yup

  const validateChange = (e) => {
    e.persist()
    yup
      .reach(loginFormSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        })
      })
      .catch((error) => {
        setErrors({
          ...errors,
          [e.target.name]: error.errors[0],
        })
      })
  }

  // form handlers

  ///// input change handler
  const inputChange = (e) => {
    const value = e.target.value
    setLoginState({ ...loginState, [e.target.name]: value })
    validateChange(e)
  }

  ///// submit handler

  const dummySubmitHandler = (e) => {
    e.preventDefault()
    axiosWithAuth()
      .post("/auth/login", loginState)
      .then((res) => {
        //console.log(res.data)
        localStorage.setItem("token", res.data.token)
        history.push(`/song/list/${res.data.userID}`)
      })
      .catch((err) => {
        console.log(err)
        alert("Wrong password or email!")
      })
  }

  // side effects

  useEffect(() => {
    loginFormSchema.isValid(loginState).then((valid) => {
      setSubmitDisabled(!valid)
    })
  }, [loginState])

  return (
    <Box
      className="formContainer"
      display="flex"
      alignItems="center"
      justifyContent="center"
      m={4}
    >
      {/* <h3>This is our login form.</h3> */}
      <form onSubmit={dummySubmitHandler}>
        <Paper>
          <Box
            display="flex"
            flexDirection="column"
            align="center"
            width="150px"
            height="200px"
            justifyContent="space-around"
            alignItems="center"
            p={10}
          >
            <Input
              type="text"
              name="email"
              onChange={inputChange}
              value={loginState.email}
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
            <Button
              disabled={submitDisabled}
              onClick={dummySubmitHandler}
              color="secondary"
              variant="contained"
            >
              Submit
            </Button>
          </Box>
        </Paper>
      </form>
    </Box>
  )
}

export default Login
