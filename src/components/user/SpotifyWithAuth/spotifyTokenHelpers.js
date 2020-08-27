// authorizationURL constants

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
const authURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

// hash helper function

function currentHash(){
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
    return hash;
};

// redirect helper function

function spotifyRedirect() {
    window.location.replace(authURL);
};