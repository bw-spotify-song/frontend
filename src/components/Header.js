import React from "react"
import { Link } from "react-router-dom"
import { Typography, Box } from "@material-ui/core"
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import icon from "../image/spotify-brands.svg"

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
      <Box display="flex" alignItems="center">
        <img src={icon} alt="icon" className="header--icon" />
        <Typography variant="h4">Spotify Song Suggestor</Typography>
      </Box>
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
