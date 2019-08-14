import React, { Component }from 'react'

import './App.css'

import logo from './assets/images/logo.svg'

class App extends Component{
  render(){
    return(
      <div className="App">
        <div className="App">
          <nav className="NavBar">
            <a href="/">
              <img className="logo" src={logo} alt="logo acesso" />
            </a>
          </nav>
        </div>
      </div>
    )
  }
}

export default App;
