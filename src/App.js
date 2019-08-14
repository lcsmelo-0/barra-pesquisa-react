import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

// import logo from './assets/images/logo.svg'
import user from './assets/images/user.png'
import arrow from './assets/images/arrow.png'

import Home from './Home/Home'
import Bands from './Bands/Bands'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="NavBar">
            <a href="/">
              {/* <img className="logo" src={logo} alt="logo acesso" /> */}
            </a>

            {/* USER ACCESS */}
            <div className="user-access">
              <img src={user} alt="person icon" />
              <p>John Due</p>
              <img className="arrow" src={arrow} alt="arrow icon" />
            </div>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/bandas/:name" component={Bands} />
          <Route path="/bandas/:genre" component={Bands} />
        </div>
      </Router>
    )
  }
}

export default App
