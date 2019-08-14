import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './Home.css'

import search from '../assets/images/search.png'

import api from '../Api'


class Home extends Component {
    constructor(props) {
        super(props)
        this.items = []

        this.state = {
            names: [],
            suggestions: [],
            text: ''
        }
    }


    componentDidMount() {
        api.loadName()
            .then((res) => {
                this.items = res.data
                this.setState({
                    names: res.data
                })
                return
            })
    }


    renderBandInfo = (name) => {
        return (<span key={name}>{`${name} `}</span>)
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
        else {
            return (
                <ul>
                    {suggestions.map((item) => <li className="suggestion" onClick={() => this.suggestionSelected(item)} key={item}>{item}</li>)}
                </ul>
            )
        }
    }


    searchBand = () => {
        if (this.refs.search.value === "") {
            return;
        }
        else {
            let params = this.refs.search.value.toLowerCase()
            this.props.history.push('/bandas/' + params)
        }
    }
    

    enterPress = (event) => {
        if (event.key === 'Enter') {
            this.searchBand()
        }
    }



    render() {
        const { text } = this.state
        return (
            <div className="Home">
                <div>
                    <div className="search-area">
                        <input value={text} ref="search" onChange={this.onTextChanged} onKeyDown={this.enterPress} autoFocus type="text" placeholder="Pesquisar pelo gênero ..." />
                        <img src={search} onClick={this.searchBand} alt="search" />
                    </div>
                    {this.renderSuggestions()}
                </div>

                <section>
                    <span>Exemplo:</span> {this.state.names.map(this.renderBandInfo)}
                </section>
            </div>
        )
    }
}

export default withRouter(Home)
