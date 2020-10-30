import React, { Component } from 'react'
import DropDown from './Sort.js';
import PokeList from './PokeList.js';
import SearchBar from './SearchBar.js';
import fetch from 'superagent'

export default class ListPage extends Component {
    state = {
        pokeData: [],
        filter: '',
        sortType: 'attack',
        sortOrder: 'asc'
    }
    
    componentDidMount = async () => {
        await this.fetchPoke();
 
    }

    fetchPoke = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.filter}&perPage=1000`)
        this.setState({pokeData: response.body.results});
    }

    sortPoke = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?sort=${this.state.sortType}&direction=${this.state.sortOrder}`)
        this.setState({pokeData: response.body.results})
    }

    
    handleSubmit = async (e) => {
        e.preventDefault();
        await this.fetchPoke();
    }
    
    // handleChange = (e) => {
    //     this.setState({type: e.target.value});
    // }

    handleSortOrder = async (e) => {
        await this.setState({sortOrder: e.target.value});
        await this.sortPoke()
    }
    handleSortType = async (e) => {
        await this.setState({sortType: e.target.value})
        await this.sortPoke()
    }
    
    render() {
        return (
            <div>
                <DropDown 
                handleSortOrder={this.handleSortOrder}
                handleSortType={this.handleSortType} 
                />
                <SearchBar 
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                />
                <PokeList 
                pokeData={this.state.pokeData}
                />

            </div>
        )
    }
}
