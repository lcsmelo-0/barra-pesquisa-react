import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './Home.css'

import search from '../assets/images/search.png'

import api from '../Api'


class Home extends Component {
    constructor(props) {
        super(props)
        this.items = [
            "rock",
            "hip-hop",
            "pagode",
            "axe",
            "samba",
            "reggaeton",
            "reggae",
            "mpb"
        ]

        this.state = {
            genres: [],
            suggestions: [],
            text: ''
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

    onTextChanged = (e) => {
        const value = e.target.value
        let suggestions = []
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            suggestions = this.items.sort().filter(v => regex.test(v))
        }
        this.setState(() => ({
            suggestions, text: value
        }))
    }

    suggestionSelected = (value) => {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions = () => {
        const { suggestions } = this.state
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li className="suggestion" onClick={() => this.suggestionSelected(item)} key={item}>{item}</li>)}
            </ul>
        )
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
        const { text } = this.state
        return (
            <div className="Home">
                <div>
                    <div className="search-area">
                        <input value={text} ref="search" onChange={this.onTextChanged} onKeyDown={this.enterPress} autoFocus type="text" placeholder="Pesquisar pelo gênero ..." />
                        <img src={search} onClick={this.searchGenre} alt="search" />
                    </div>
                    {this.renderSuggestions()}
                </div>

                <section>
                    <span>Exemplo:</span> {this.state.genres.map(this.renderGenreInfo)}
                </section>
            </div>
        )
    }
}

export default withRouter(Home)
