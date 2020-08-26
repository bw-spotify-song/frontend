import React from 'react'
import GitHubIcon from "@material-ui/icons/GitHub"
import { Box } from '@material-ui/core'



const Footer = () => {
  return (
    <Box
      className="footer"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Box p={2}>
        <h3 className="app-footer-title">Made by Lambda</h3>
      </Box>
      <Box pb={2}>
        <a href="https://github.com/bw-spotify-song/frontend" target="_blank">
          <GitHubIcon className="header--icon" />
        </a>
      </Box>
    </Box>
  )
}

export default Footer
