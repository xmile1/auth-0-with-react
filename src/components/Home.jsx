import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component{

  render(){
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/login'> Login </Link>
              </li>
              <li>
                <Link to='/paramuser/56'> Param 56 tester</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}

export default Home
