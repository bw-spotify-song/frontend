import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  background: linear-gradient(
    0deg,
    rgba(73, 145, 85, 1) 34%,
    rgba(113, 172, 88, 0.9962359943977591) 100%
  );
  margin: 0;

  h1 {
    padding: 1.5rem;
  }

  .header--home {
    text-decoration: none;
    padding: 0.5rem;
    color: white;
    border: 1px solid;
    border-radius: 10px;
    margin-right: 1rem;
  }

  .header--login {
    text-decoration: none;
    padding: 0.5rem;
    color: white;
    border: 1px solid;
    border-radius: 10px;
    margin-right: 1rem;
  }

  .header--register {
    text-decoration: none;
    padding: 0.5rem;
    color: white;
    border: 1px solid;
    border-radius: 10px;
    margin-right: 1rem;
  }


`

const Header = () => {
    return (
      <StyledHeader>
        <h1>Spotify Song Suggestor</h1>
        <Link className='header--home' to="/">Home</Link>
        <Link className='header--login' to="/user/login">Login</Link>
        <Link className='header--register' to="/user/form">Register</Link>
      </StyledHeader>
    )
}

export default Header
