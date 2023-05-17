import React, { useContext } from 'react'
import { LoginContext } from '../LoginContext'

function Profile() {
  const {userName,email} = useContext(LoginContext);
  return (
    <div>
        <h1>{userName}</h1>
        <h1>{email}</h1>
    </div>
  )
}

export default Profile