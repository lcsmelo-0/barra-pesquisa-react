import React, { Component }from 'react'

import './Home.css'

import search from '../assets/images/search.png'


class Home extends Component{
  render(){
    return(
      <div className="Home">
        <div className="search-area">
            <input ref="search"  autoFocus type="text" placeholder="Pesquisar pelo gênero ..."/>
            <img src={search} alt="search"/>
        </div>

      </div>
    )
  }
}

export default Home;
