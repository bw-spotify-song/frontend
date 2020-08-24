import React from 'react'
import styled from "styled-components"

const StyledFooter = styled.div`
  display: grid;
  place-items: center;
  color:white;
  background: linear-gradient(
    180deg,
    rgba(73, 145, 85, 1) 59%,
    rgba(90, 144, 67, 0.9962359943977591) 100%
  );

  .app-footer-title {
    padding: 3rem;
  }
`

const Footer = () => {
    return (
        <StyledFooter className='app-footer'>
            <h3 className='app-footer-title'>Made by Lambda</h3>
        </StyledFooter>
    )
}

export default Footer
