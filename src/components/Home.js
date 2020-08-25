import React from 'react'
import {useState, useEffect} from "react";
import { axiosWithSpotify, getToken } from "../utils/example";
import styled from 'styled-components';

// STYLED COMPONENTS
    const StyledAlbums = styled.div`

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .albumCard {
        margin: 1%;
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
        <div>
            <h6>This is an example of Spotify API usage</h6>
        <StyledAlbums>
        {list.map((track) => {
          return (
            <div className = "albumCard" key={track.id}>
              <img src={track.album.images[1].url} alt="cover"></img>
              <a href = {track.external_urls.spotify}>{track.artists[0].name} - {track.name}</a>
        </div>
          )
        })}
        </StyledAlbums>
        
      </div>
    )
  }


const Home = () => {



    return (
        <Example/>
    )
}

export default Home
