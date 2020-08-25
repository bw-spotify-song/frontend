import React, { useState, useEffect } from "react"
import { axiosWithSpotify, getToken } from "../../utils/example"

const spotifyID = [
  "3nvuPQTw2zuFAVuLsC9IYQ",
  "2CT3r93YuSHtm57mjxvjhH",
  "0LXosXV9ZvmzIpzUsOMuLv",
  "1UI0l2L66HJ9AtoEOlHzv4",
  "74X1epeRufHckhuX1KFD04",
  "1V7VAMQQwJoHECiuaG36Pb",
  "1LzNfuep1bnAUR9skqdHCK",
]

const Example = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    getToken()
    axiosWithSpotify()
      .get(`https://api.spotify.com/v1/tracks/?ids=${spotifyID.join(",")}`)
      .then((res) => {
        //console.log(res.data)
        setList(res.data.tracks)
      })
  }, [])

  return (
      <div>
          <h6>This is an example of Spotify API usage</h6>
      {list.map((track) => {
        return (
          <div key={track.id}>
            <img src={track.album.images[1].url} alt="cover"></img>
          </div>
        )
      })}
    </div>
  )
}

export default Example
