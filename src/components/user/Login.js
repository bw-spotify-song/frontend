import React from "react"
import { useState, useEffect } from "react"
import Input from "./Input"
import * as yup from "yup"
import loginFormSchema from "./validation/loginValidation"
import styled from "styled-components"
import { axiosWithAuth } from "../../utils/axiosWithAuth"
import { useHistory } from "react-router-dom"


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
        console.log(res.data)
        localStorage.setItem("token", res.data.token)
        history.push(`/song/list/${res.data.userID}`)
      })
  }

  // side effects

  useEffect(() => {
    loginFormSchema.isValid(loginState).then((valid) => {
      setSubmitDisabled(!valid)
    })
  }, [loginState])

  return (
    <div className="formContainer">
      <StyledForm>
        {/* <h3>This is our login form.</h3> */}
        <form onSubmit={dummySubmitHandler}>
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
          <button disabled={submitDisabled} onClick={dummySubmitHandler}>
            Submit
          </button>
        </form>
      </StyledForm>
    </div>
  )
}

export default Login
