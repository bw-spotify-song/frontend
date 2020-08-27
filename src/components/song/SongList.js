import React, { useState, useEffect } from "react"
import { postSong, fetchSongList, fetchTracks } from "../../store/actions"
import { useSelector, useDispatch } from "react-redux"
import { deleteSong } from "../../store/actions/appActions"
import { useParams, useHistory } from "react-router-dom"
import {
  Box,
  Card,
  Button,
  TextField,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core"

const SongList = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const songList = useSelector((state) => state.songList)
  const spotifyList = useSelector((state) => state.spotifyList)
  const [songID, setSongID] = useState({ spotifyID: "" })

  const { userID } = useParams()

  useEffect(() => {
    dispatch(fetchSongList(userID))
  }, [dispatch, userID])

  useEffect(() => {
    let spotifyList = songList.map((item) => item.spotifyID)
    dispatch(fetchTracks(spotifyList))
  }, [dispatch, songList])

  const changeHandler = (event) => {
    const { value, name } = event.target
    setSongID({ ...songID, [name]: value })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(postSong(userID, songID))
    setSongID({ spotifyID: "" })
  }

  const deleteHandler = (id) => {
    const songListID = songList.filter((item) => item.spotifyID === id)[0].id
    dispatch(deleteSong(userID, songListID))
  }

  const detailHandler = (id) => {
    history.push(`/song/${id}`)
  }

  return (
    <Box align="center">
      <form>
        <Box m={2} display="flex" width="30%" justifyContent="space-around">
          <TextField
            variant="outlined"
            name="spotifyID"
            type="text"
            value={songID.spotifyID}
            label="Add a song to the list:"
            onChange={changeHandler}
            placeholder="spotifyID"
          />
          <Button onClick={submitHandler} variant="contained" color="secondary">
            Add
          </Button>
        </Box>
      </form>
      <Box display="flex" flexWrap="wrap">
        {spotifyList.map((item) => {
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
                  <Button
                    onClick={() => deleteHandler(item.id)}
                    variant="contained"
                    color="secondary"
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => detailHandler(item.id)}
                    variant="contained"
                    color="primary"
                  >
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

export default SongList
