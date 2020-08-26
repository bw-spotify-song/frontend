import React from 'react'
import { Link } from 'react-router-dom'
import {Typography, Box, Button} from '@material-ui/core'
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"


const Header = () => {
    return (
      <Box
        display="flex"
        py={2}
        px={2}
        justifyContent="space-between"
        alignItems="center"
        className="header"
      >
        <Typography variant="h4">Spotify Song Suggestor</Typography>
        <Box>
          <Link to="/">
            <HomeIcon className="header--icon" />
          </Link>
          <Link className="header--home" to="/admin">
            <SupervisorAccountIcon className="header--icon" />
          </Link>
        </Box>
      </Box>
    )
}

export default Header
