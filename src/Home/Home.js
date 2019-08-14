import React, { Component } from 'react'

import './Home.css'

import search from '../assets/images/search.png'

import api from '../Api'


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            genres: [],
        }
    }

    componentDidMount() {
        api.loadGenres()
            .then((res) => {
                this.setState({
                    genres: res.data
                })
            })
    }

    renderGenreInfo = (genre) =>{
        return(<span key={genre}>{`${genre} `}</span>)
      }


    render() {
        return (
            <div className="Home">
                <div className="search-area">
                    <input ref="search" autoFocus type="text" placeholder="Pesquisar pelo gênero ..." />
                    <img src={search} alt="search" />
                </div>
                <section>
                   {this.state.genres.map(this.renderGenreInfo)}

                </section>

            </div>
        )
    }
}

export default Home;
