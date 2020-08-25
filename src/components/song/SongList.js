import React, { useState, useEffect } from 'react'
import { postSong, fetchSongList, fetchTracks } from '../../store/actions'
import { useSelector, useDispatch } from 'react-redux'
import { deleteSong } from '../../store/actions/appActions'
import { useParams } from 'react-router-dom'


const SongList = () => {

    const dispatch = useDispatch()
    const songList = useSelector(state => state.songList)
    const spotifyList = useSelector(state => state.spotifyList)
    const [songID, setSongID] = useState({ spotifyID: '' })
    
    const { userID }= useParams()

    useEffect(() => {
        dispatch(fetchSongList(userID))
    }, [userID])
    
    useEffect(() => {
        let spotifyList = songList.map(item => item.spotifyID)
        dispatch(fetchTracks(spotifyList))
    },[songList])

    const changeHandler = event => {
        const { value, name } = event.target
        setSongID({ ...songID, [name]: value })
    }

    const submitHandler = event => {
        event.preventDefault()
        dispatch(postSong(userID, songID))
        setSongID({ spotifyID: ''})
    }

    const deleteHandler = (id) => {
        const songListID = songList.filter(item => item.spotifyID === id)[0].id
        dispatch(deleteSong(userID, songListID))
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>
                    Add a song to the list:
                    <input name='spotifyID' type='text' value={songID.spotifyID} onChange={changeHandler} />
                </label>
                <button onClick={submitHandler}>Add</button>
            </form>
            {
                spotifyList.map(item => {
                    return (
                        <div key={item.id}>
                            <button onClick={()=>deleteHandler(item.id)}>Delete</button>
                            <img src={item.album.images[1].url} alt="cover"></img>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default SongList
