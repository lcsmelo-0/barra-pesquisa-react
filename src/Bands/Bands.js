import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Bands.css'


class Bands extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bands: []
        }
    }

    render() {
        return (
            <div className="Bands">
                <h2>Resultados de busca para: <span>Racionais Mc's</span> </h2>
                
                <Link className="botao" to="/">Voltar</Link>
            </div>  
        )
    }
}

export default Bands;
