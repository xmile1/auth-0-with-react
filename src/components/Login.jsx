import React, {Component} from 'react'

class Login extends Component{

constructor(props){
  super(props)
}

logout(){
  this.props.auth.logout(this.props.history)
}


  render(){
    let {isAuthenticated, login} = this.props.auth

    return isAuthenticated() ? (<div onClick={this.logout.bind(this)} >Logged In</div>) : login()
  }
}

export default Login
