import React from 'react'
import { Link } from 'react-router-dom'
import {Typography, Box, Button} from '@material-ui/core'



const Header = () => {
    return (
      <Box align="center" py={2} bgcolor='background.default'>
        <Typography variant="h3">Spotify Song Suggestor</Typography>
        <Box width="50%" my={2} display='flex' justifyContent="space-between">
          <Link to="/">
            <Button variant="contained" color="primary">
              Home
            </Button>
          </Link>
          <Link className="header--login" to="/user/login">
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Link>
          <Link className="header--register" to="/user/form">
            <Button variant="contained" color="primary">
              Register
            </Button>
          </Link>
          <Link className="header--home" to="/admin">
            <Button variant="contained" color="primary">
              Admin
            </Button>
          </Link>
        </Box>
      </Box>
    )
}

export default Header
