import React, {useEffect} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button, Box, Paper } from "@material-ui/core"

// let spotify = new SpotifyWebApi();

export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = 'd84e971aa0a841d3a990820b1676fcd1';
const redirectUri = 'http://localhost:3004/user/spotifyauth';
export const scopes = [
    "playlist-read-private",
    "user-top-read",
    "user-read-recently-played",
    "playlist-modify-private",
    "playlist-modify-public",
  ];
  export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;



function SpotifyLoginAuth(props){

    // useEffect(() => {
    //     axios.get({loginURL})
    //         .then(function (response) {
    //             // handle success
    //             console.log(response);
    //             })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //             })
    //         .finally(function () {
    //             // always executed
    //             });        
    // },[])


  function handleLogin() {
    window.location.replace(loginURL);
    };
    
    return (
        <div>
            <Button
                  disabled={false}
                  onClick={handleLogin}
                  color="secondary"
                  variant="contained"
                >
                  {" "}
                  Spotify Login
            </Button>
        </div>
    )
}

export default SpotifyLoginAuth