import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
    const {userId} = useParams<{userId:string}>();
  return (
    <div>
        <h1>User Page</h1>
        <p>Viewing details for user with id:{userId}</p>
    </div>
  )
}

export default User;