import React, { useEffect } from "react"
import { Box, Paper } from "@material-ui/core"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { fetchTrack } from "../../store/actions"

const Song = () => {
  const { songID } = useParams()
  const dispatch = useDispatch()
  const track = useSelector((state) => state.spotifySong)

  useEffect(() => {
    dispatch(fetchTrack(songID))
  }, [songID])

  return (
    <Box>
      <Paper>
        <Box>
          <p>{track.id}</p>
        </Box>
      </Paper>
    </Box>
  )
}

export default Song
