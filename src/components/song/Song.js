import React, { useEffect } from "react"
import {
  Box,
  Paper,
  Grid,
  CardMedia,
  Typography,
  Button,
  Card,
  CardContent,
} from "@material-ui/core"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite"
import {
  fetchSuggestion,
  fetchTrack,
  fetchTracks2,
} from "../../store/actions/appActions"

const Song = () => {
  const { songID } = useParams()
  const dispatch = useDispatch()
  const track = useSelector((state) => state.spotifySong)
  const suggestions = useSelector((state) => state.suggestions)
  const spotifyList2 = useSelector((state) => state.spotifyList2)

  useEffect(() => {
    dispatch(fetchTrack(songID))
  }, [songID])

  const getSuggestion = (id) => {
    dispatch(fetchSuggestion(id))
  }

  useEffect(() => {
    console.log(suggestions)
    dispatch(fetchTracks2(suggestions))
  }, [suggestions])

  return (
    <Box my={3}>
      <Grid container>
        <Grid item sm={1}></Grid>
        <Grid item sm={4}>
          <Paper>
            <Box>
              <CardMedia component="img" src={track.album.images[0].url} />
            </Box>
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
          >
            <Box mx={3} align="right">
              <Typography variant="h4">{track.album.name}</Typography>
              <Typography variant="h6">{track.name}</Typography>
              <Typography variant="subtitle1">
                {track.artists[0].name}
              </Typography>
              <Typography variant="subtitle2">
                {track.album.release_date}
              </Typography>
              <a
                href={track.album.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PlayCircleFilledWhiteIcon />
              </a>
            </Box>
            <Box align="right" mx={3}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => getSuggestion(track.id)}
              >
                Get more similar songs
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={1}></Grid>
      </Grid>

      <Box display="flex" flexWrap="wrap">
        {spotifyList2.map((item) => {
          return (
            <Box key={item.id} width="250px" m={3} align="left">
              <Card>
                <CardMedia component="img" src={item.album.images[1].url} />
                <CardContent>
                  <Typography variant="subtitle2">{item.name}</Typography>
                  <Typography variant="caption">
                    {item.artists[0].name}
                  </Typography>
                </CardContent>
                <Box
                  align="center"
                  mb={1}
                  width="100%"
                  display="flex"
                  justifyContent="space-around"
                >
                  <Button variant="contained" color="secondary">
                    Delete
                  </Button>
                  <Button variant="contained" color="primary">
                    Details
                  </Button>
                </Box>
              </Card>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Song
