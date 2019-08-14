import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Bands.css'

import api from '../Api'


class Bands extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bands: []
        }
    }

    componentDidMount() {
        api.loadSeriesByGenres(this.props.match.params.genre).then((res) => {
            this.setState({
                bands: res.data
            })
        })
    }

    printMembers = () => {
        let pessoas = "";
        for (let person of this.state.bands) {
            pessoas += `${person.members}, `
        }
        return pessoas;
    }


    renderSeries = (bands) => {
        return (
            <div key={bands.id} className="ResultSearch">
                <img alt="band logo" className="logos-bands" src={bands.image} />
                <div className="infos">
                    <h2>{bands.name}</h2>
                    <h2><span>Membros:</span>{this.printMembers()}</h2>
                    <h2><span>Gênero:</span> {bands.genre}</h2>
                    <h2><span>Comentário:</span> {bands.comment}</h2>
                </div>
            </div>
        )
    }



    render() {
        return (
            <div className="Bands">
                <h2>Resultados de busca para: <span>"{this.props.match.params.genre}"</span> </h2>
                <div className="result-list">
                    {
                        this.state.bands.length === 0 &&
                        <div className="alert-info">Nenhuma banda de {this.props.match.params.genre} cadastrada</div>
                    }
                    <div>
                        {this.state.bands.map(this.renderSeries)}
                    </div>

                </div>
                <Link className="botao" to="/">Voltar</Link>
            </div>
        )
    }
}

export default Bands
