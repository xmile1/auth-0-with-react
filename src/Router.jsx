import {Route, Switch} from 'react-router-dom'
import Home from 'component/Home'
import Login from 'component/Login'

const Router = ()=> (
  <div>
    <Switch>
      <Route excat path='/' component={Home} />
      <Route path='/login' component={Login}/>
    </Switch>
  </div>
)

export default Router
