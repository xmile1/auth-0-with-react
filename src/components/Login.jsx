import React from 'react'

const Login = ({auth, history})=> auth.isAuthenticated() ?
  (<div onClick={()=>{auth.logout(history)}} >
    Logged In: Click to Logout
  </div>) :
  (<div onClick={auth.login} >
    Click here to Log In
  </div>)


export default Login
