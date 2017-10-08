import React, {Component} from 'react'

class Login extends Component{

  render(){
    let {isAuthenticated, login, logout} = this.props.auth

    return isAuthenticated() ?
      (<div onClick={()=>{logout(this.props.history)}} >Logged In</div>) :
      (<div onClick={login} >Click here to Log In</div>)
  }
}

export default Login
