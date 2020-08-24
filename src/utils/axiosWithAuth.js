import axios from "axios"

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://lambdabackend.herokuapp.com/",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  })
}



