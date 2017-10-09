import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from 'components/Home'
import ParamTester from 'components/ParamTester'
import Auth from './js/Auth';
import Callback from 'components/Callback'

const auth = new Auth()


const handleAuthentication = (nextState, replace) => {
  console.log(nextState)
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication(nextState.history);
  }
}

const Router = ()=> (
  <div>
    <Switch>
      <Route exact path='/' render={(props)=> <Home auth={auth} {...props} />}  />
      <Route path='/paramuser/:param1' render={(props)=><ParamTester auth={auth} {...props}/>} />
      <Route path="/callback" render={(props) => {
       handleAuthentication(props);
       return <Callback {...props} />
     }}/>
    </Switch>
  </div>
)

export default Router
