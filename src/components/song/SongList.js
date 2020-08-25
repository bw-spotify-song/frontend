import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { postSong, fetchSongList, fetchUser, fetchTracks } from '../../store/actions'
import { useSelector, useDispatch } from 'react-redux'


const SongList = () => {

    const dispatch = useDispatch()
    const songList = useSelector(state => state.songList)
    const userID = useSelector(state => state.userID)
    const spotifyList = useSelector(state => state.spotifyList)

    const [songID, setSongID] = useState({ spotifyID: '' })

    useEffect(() => {
        dispatch(fetchUser('tester@tester.com'))
        console.log(userID)    
    }, [])
    
    useEffect(() => {
        dispatch(fetchSongList(userID))
    }, [userID])
    
    useEffect(() => {
        let spotifyList = songList.map(item => item.spotifyID)
        dispatch(fetchTracks(spotifyList))
    },[songList])
    
    useEffect(() => {
        axiosWithAuth().post('/auth/login', {
            "email": "tester@tester.com",
            "password": "password"
        }).then(res => {
            console.log(res.data)
            localStorage.setItem("token", res.data.token)
        })
    }, [])

    const changeHandler = event => {
        const { value, name } = event.target
        setSongID({ ...songID, [name]: value })
        console.log(songID)
    }

    const submitHandler = event => {
        event.preventDefault()
        dispatch(postSong(userID, songID))
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
                            <img src={item.album.images[1].url} alt="cover"></img>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default SongList
