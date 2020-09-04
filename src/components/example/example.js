import React, { useState, useEffect } from "react"
import { axiosWithSpotify, getToken } from "../../utils/example"
import Plot from "react-plotly.js"
import Axios from "axios"

const initialState = {
  data: [],
  layout: {},
  frames: [],
  config: {
    displaylogo: false,
    displayModeBar: false,
  },
}


const Example = () => {
  const [data, setData] = useState(initialState)
  const [figure, setFigure] = useState(null)
  const [Track, setTrack] = useState(null)

  useEffect(() => {
    Axios.get(
      `https://fastapi-spotify.herokuapp.com/viz/4lsYP6koQW8qqCUrSh6mse`
    ).then((res) => {
      setData(JSON.parse(res.data))
    })
  }, [])


  useEffect(() => {
     getToken()
     axiosWithSpotify()
       .get(`https://api.spotify.com/v1/tracks/4lsYP6koQW8qqCUrSh6mse`)
       .then((res) => {
         //console.log(res.data)
         setTrack(res.data)
       })
   }, [])


  return (
    <div>
      <h6>This is an example of DATA API usage</h6>
      <h2></h2>
      <Plot
        className="DataViz"
        data={data.data}
        layout={data.layout}
        frames={data.frames}
        config={data.config}
        onInitialized={(figure) => setFigure(figure)}
        onUpdate={(figure) => setFigure(figure)}
      />
    </div>
  )
}

export default Example
