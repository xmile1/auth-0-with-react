import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'
import 'css/Home.css'



const Home = (props)=>(
  <div>
    <div class="main">
        <Login {...props}/>
      <div>
        <Link to='/paramuser/56'> Param 56 tester</Link>
      </div>
    </div>
  </div>
)

export default Home
