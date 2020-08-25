import React from 'react'
import { Link } from 'react-router-dom'
import {Typography, Box, Button} from '@material-ui/core'



const Header = () => {
    return (
      <Box align='center' my={3}>
        <Typography variant="h1">Spotify Song Suggestor</Typography>
        <Box width='80%' my={2}>
          <Link to="/">
            <Button variant="contained" color='primary'>Home</Button>
          </Link>
          <Link className="header--login" to="/user/login">
            <Button variant="contained">Login</Button>
          </Link>
          <Link className="header--register" to="/user/form">
            <Button variant="contained">Register</Button>
          </Link>
          <Link className="header--home" to="/admin">
            <Button variant="contained">Admin</Button>
          </Link>
        </Box>
      </Box>
    )
}

export default Header
