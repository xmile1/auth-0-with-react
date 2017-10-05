import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from 'components/Home'
import Login from 'components/Login'
import ParamTester from 'components/ParamTester'

const Router = ()=> (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login}/>
      <Route path='/paramuser/:param1' component={ParamTester} />
    </Switch>
  </div>
)

export default Router
