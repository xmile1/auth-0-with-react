import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from 'components/Home'
import Login from 'components/Login'
import ParamTester from 'components/ParamTester'
import Auth from './js/Auth';

const auth = new Auth()
const Router = ()=> (
  <div>
    <Switch>
      <Route exact path='/' render={(props)=> <Home auth={auth} {...props} />}  />
      <Route path='/login' render={(props)=> <Login auth={auth} {...props} />} />
      <Route path='/paramuser/:param1' component={ParamTester} />
      <Route path="/callback" render={(props) => {
       handleAuthentication(props);
       return <Callback {...props} />
     }}/>
    </Switch>
  </div>
)

export default Router
