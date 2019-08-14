import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'

import './Home.css'

import search from '../assets/images/search.png'

import api from '../Api'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            genres: []
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

    renderGenreInfo = (genre) => {
        if(this.refs.search.value ===""){
            return;
        }
        else{
            return (<span key={genre}>{`${genre} `}</span>)
        }
    }

    searchGenre = () =>{
        this.props.history.push('/bandas/' + this.refs.search.value) 
    }

    enterPress = (event) => {
        if (event.key === 'Enter') {
          this.searchGenre()
        }
    }

    render() {
        return (
            <div className="Home">
                <div className="search-area">
                    <input ref="search" onKeyDown={this.enterPress} autoFocus type="text" placeholder="Pesquisar pelo gênero ..." />
                    <img src={search} onClick={this.searchGenre} alt="search" />
                </div>
                <section>
                    <span>Exemplo:</span> {this.state.genres.map(this.renderGenreInfo)}
                </section>
            </div>
        )
    }
}

export default withRouter(Home)
