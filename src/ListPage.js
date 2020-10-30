import React, { Component } from 'react'
import fetch from 'superagent'

export default class ListPage extends Component {
    state = {
        pokemonData: [],
    }

    fetchPoke = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.filter}&perPage=200`)
    }

    componentDidMount = async () => {
        const response = await fetch.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
        this.setState({pokemonData: response.body.results});
    }
    
    handleClick = async (e) => {
        e.preventDefault();
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/types/${this.state.type}`)
        this.setState({pokemonData: response.body.results });
    }
    
    handleChange = (e) => {
        this.setState({type: e.target.value});
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
