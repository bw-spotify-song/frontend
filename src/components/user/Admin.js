import React, { useEffect } from "react"
//import { axiosWithAuth } from '../../utils/axiosWithAuth'
import {
  fetchUserList,
  deleteUser,
  editUser,
} from "../../store/actions/appActions"
import { useSelector, useDispatch, connect } from "react-redux"
import { Link } from "react-router-dom"
import { Box } from "@material-ui/core"

const Admin = (props) => {
  const userList = useSelector((state) => state.userList)
  const dispatch = useDispatch()

  // useEffect(() => {
  //     axiosWithAuth().post('/auth/login', {
  //         "email": "tester@tester.com",
  //         "password": "password"
  //     }).then(res => {
  //         console.log(res.data)
  //         localStorage.setItem("token", res.data.token)
  //     })
  // }, [])

  useEffect(() => {
    dispatch(fetchUserList())
  }, [dispatch])

  return (
    <Box align="center" m={2}>
      {userList.map((user) => {
        return (
          <div key={user.id}>
            {/* <p>{user.id}</p> */}
            <h3>{user.firstName}</h3>
            <h3>{user.lastName}</h3>
            <p>{user.email}</p>
            <Link to={`/user/${user.id}`}>
              <button onClick={() => props.editUser(user.id)}>Edit User</button>
            </Link>

            <button onClick={() => props.deleteUser(user.id)}>
              Delete User
            </button>
          </div>
        )
      })}
    </Box>
  )
}

export default connect(null, { deleteUser, editUser })(Admin)
