import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './Home.css'

import search from '../assets/images/search.png'

import api from '../Api'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            genres: [],
            suggestions: []
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
        return (<span key={genre}>{`${genre} `}</span>)
    }
    
    renderGenreAutoComplete = (genre) => {
        return (<li key={genre}>{`${genre} `}</li>)
    }
    
    onTextChanged = (e) => {
        const value = e.target.value
        let suggestions = []
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i')
            suggestions = this.state.genres.sort().filter(v => v.test(regex))
        }
        this.setState(()=>({
            suggestions
        }))
    }

    searchGenre = () => {
        if (this.refs.search.value === "") {
            return;
        }
        else {
            this.props.history.push('/bandas/' + this.refs.search.value)
        }
    }

    enterPress = (event) => {
        if (event.key === 'Enter') {
            this.searchGenre()
        }
    }

    render() {
        return (
            <div className="Home">
                <div>
                    <div className="search-area">
                        <input ref="search" onChange={this.onTextChanged} onKeyDown={this.enterPress} autoFocus type="text" placeholder="Pesquisar pelo gênero ..." />
                        <img src={search} onClick={this.searchGenre} alt="search" />
                    </div>
                    <ul>
                        {this.state.genres.map(this.renderGenreAutoComplete)}
                    </ul>
                </div>

                <section>
                    <span>Exemplo:</span> {this.state.genres.map(this.renderGenreInfo)}
                </section>
            </div>
        )
    }
}

export default withRouter(Home)
