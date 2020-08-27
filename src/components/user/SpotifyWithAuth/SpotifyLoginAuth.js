import React, {useEffect, useState} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button, Box, Paper } from "@material-ui/core"

// let spotify = new SpotifyWebApi();

// spotify re-direct info
const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = 'd84e971aa0a841d3a990820b1676fcd1';
const redirectUri = 'http://localhost:3004/user/spotifyauth';
const scopes = [
    "playlist-read-private",
    "user-top-read",
    "user-read-recently-played",
    "playlist-modify-private",
    "playlist-modify-public",
  ];
const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

// create hash

const hash = window.location.hash
    .substring(1)
    .split('&')
    .reduce(function (initial, item) {
        if (item) {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
        }, {});



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

    function returnToken() {
        console.log(hash.access_token);
    }
    
    return (
        <div>
            <Button
                  disabled={false}
                  onClick={handleLogin}
                  color="secondary"
                  variant="contained"
            >
                  Spotify Login
            </Button>
            <Button
                  disabled={false}
                  onClick={returnToken}
                  color="secondary"
                  variant="contained"
            >
                  Show Hash Token
            </Button>
        </div>
    )
}

export default SpotifyLoginAuth