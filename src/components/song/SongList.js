import React, { useState, useEffect } from "react"
import { postSong, fetchSongList, fetchTracks } from "../../store/actions"
import { useSelector, useDispatch } from "react-redux"
import { deleteSong } from "../../store/actions/appActions"
import { useParams } from "react-router-dom"
import { Box, Card, Button, TextField, CardMedia, CardContent, Typography } from "@material-ui/core"

const SongList = () => {
  const dispatch = useDispatch()
  const songList = useSelector((state) => state.songList)
  const spotifyList = useSelector((state) => state.spotifyList)
  const [songID, setSongID] = useState({ spotifyID: "" })

  const { userID } = useParams()

  useEffect(() => {
    dispatch(fetchSongList(userID))
  }, [userID])

  useEffect(() => {
    let spotifyList = songList.map((item) => item.spotifyID)
    dispatch(fetchTracks(spotifyList))
  }, [songList])

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

  return (
    <Box align="center">
      <form>
        <Box
          m={2}
          display="flex"
          width="30%"
          justifyContent="space-around"
        >
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
                    <Typography variant="subtitle1">{item.name}</Typography>
                    <Typography variant="subtitle2">
                      {item.artists[0].name}
                    </Typography>
                  </CardContent>
                  <Button onClick={() => deleteHandler(item.id)}>Delete</Button>
                </Card>
              </Box>
            )
        })}
      </Box>
    </Box>
  )
}

export default SongList
