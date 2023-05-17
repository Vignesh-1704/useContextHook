import React, { useContext } from 'react'
import { LoginContext } from '../LoginContext'

function Login() {
    const {setuserName,setemail,setshowProfile} = useContext(LoginContext);
  return (
    <div>
        <input type='text' placeholder='UserName' onChange={(e)=>setuserName(e.target.value)}></input>
        <input type='email' placeholder='Mail' onChange={(e)=>setemail(e.target.value)}></input>
        <button onClick={()=>setshowProfile(true)}>Login</button>
    </div>
  )
}

export default Login