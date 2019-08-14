import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Bands.css'
import user from '../assets/images/user.png'

import api from '../Api'


class Bands extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bands: []
        }
    }


    componentDidMount() {
        api.loadBandsByName(this.props.match.params.name).then((res) => {
            this.setState({
                bands: res.data
            })
        })
    }


    printMembers = () => {
        let pessoas = "";
        for (let person of this.state.bands) {
            pessoas += `${person.members}`
        }
        return pessoas;
    }


    upperCaseFirst = (s) => {
        if (typeof s !== 'string') {
            return
        } else {
            return s.charAt(0).toUpperCase() + s.slice(1)

        }
    }


    renderBands = (bands) => {
        return (
            <div key={bands.id} className="ResultSearch">
                <img alt="band logo" className="logos-bands" src={bands.image} />
                <table>
                    <tbody>
                        <tr>
                            <th> </th>
                            <th>Nome:</th>
                            <th>Gênero:</th>
                            <th>Grupo:</th>
                            <th>Idade:</th>
                        </tr>
                        <tr>
                            <td><img alt="member" src={user} /></td>
                            <td>{this.upperCaseFirst(bands.member1)}</td>
                            <td>{this.upperCaseFirst(bands.genre)}</td>
                            <td>{this.upperCaseFirst(bands.name)}</td>
                            <td>{bands.idade1} anos</td>
                        </tr>
                        <tr>
                            <td><img alt="member" src={user} /></td>
                            <td>{this.upperCaseFirst(bands.member2)}</td>
                            <td>{this.upperCaseFirst(bands.genre)}</td>
                            <td>{this.upperCaseFirst(bands.name)}</td>
                            <td>{bands.idade2} anos</td>
                        </tr>
                        <tr>
                            <td><img alt="member" src={user} /></td>
                            <td>{this.upperCaseFirst(bands.member3)}</td>
                            <td>{this.upperCaseFirst(bands.genre)}</td>
                            <td>{this.upperCaseFirst(bands.name)}</td>
                            <td>{bands.idade3} anos</td>
                        </tr>
                        <tr>
                            <td><img alt="member" src={user} /></td>

                            <td>{this.upperCaseFirst(bands.member4)}</td>
                            <td>{this.upperCaseFirst(bands.genre)}</td>
                            <td>{this.upperCaseFirst(bands.name)}</td>
                            <td>{bands.idade4} anos</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        )
    }


    render() {
        return (
            <div className="Bands">
                <div className="title">
                    <h2>Resultados de busca para: <span>"{this.upperCaseFirst(this.props.match.params.name)}"</span> </h2>
                </div>
                <div className="result-list">
                    {
                        this.state.bands.length === 0 &&
                        <div className="alert-info">Nenhuma banda de "{this.upperCaseFirst(this.props.match.params.name)}" cadastrada</div>
                    }
                    <div>
                        {this.state.bands.map(this.renderBands)}
                    </div>

                </div>
                <Link className="botao" to="/">Voltar</Link>
            </div>
        )
    }
}

export default Bands
