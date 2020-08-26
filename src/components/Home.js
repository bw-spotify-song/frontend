import React from "react"
import { useState, useEffect } from "react"
import { axiosWithSpotify, getToken } from "../utils/example"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Box, Button, Typography, Card, CardMedia, CardContent, CardActions } from "@material-ui/core"
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite"

// STYLED COMPONENTS
const StyledAlbums = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  .albumCard {
    margin: 0.9%;
    display: flex;
    flex-direction: column;
  }
`
///spotify IDS
const spotifyID = [
  "76tg7ywRlzuLgavgQNV6s1", // Gimme A Track
  "7F6VUTLu4qtAZZyy1lCf63", // Growing Pains
  "4sRBeylk3ZxspMmmuzdeZ3", // Storm
  "2XT3wj522c9dkcM1NaOVZc", // Tidal Shifts
]

const Example = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    getToken()
    axiosWithSpotify()
      .get(`https://api.spotify.com/v1/tracks/?ids=${spotifyID.join(",")}`)
      .then((res) => {
        console.log(res.data)
        setList(res.data.tracks)
      })
  }, [])

  return (
    <Box>
      <Box
        className='hero'
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height='40vh'
      >
        <Box m={3}>
          <Typography variant="h4">
            Put your favorate music in one place.
          </Typography>
        </Box>
        <Box display='flex' width='200px' justifyContent='space-between'>
          <Link className="header--login" to="/user/login">
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Link>
          <Link className="header--register" to="/user/form">
            <Button variant="contained" color="Secondary">
              Register
            </Button>
          </Link>
        </Box>
      </Box>
      <Box display='flex'>
        {list.map((track) => {
          return (
            <Box key={track.id} m={2} >
              <Card>
                <CardMedia component="img" src={track.album.images[1].url} />
                <CardContent>
                  <Typography variant='subtitle2'>{track.name}</Typography>
                  <Typography variant='caption'>{track.artists[0].name}</Typography>
                </CardContent>
                <CardActions>
                  <a href={track.external_urls.spotify}>
                    <PlayCircleFilledWhiteIcon />
                  </a>
                </CardActions>
              </Card>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

const Home = () => {
  return <Example />
}

export default Home
