import axios from "axios"

const client_id = "956e408b3a2d492183230f72c33ca134"
const client_secret = "dcd885d7ce4342e59a5d6cb8bf261b45"

export const axiosWithSpotify = () => {
  const token = localStorage.getItem("spotifyToken")
  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const getToken = () => {
  axios
    .post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          Authorization:
            "Basic " +
            new Buffer(client_id + ":" + client_secret).toString("base64"),
        },
      }
    )
    .then((res) => {
      //console.log(res)
      window.localStorage.setItem("spotifyToken", res.data.access_token)
    })
}