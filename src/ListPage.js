import React, { Component } from 'react'
import DropDown from './Sort.js';
import PokeList from './PokeList.js';
import SearchBar from './SearchBar.js';
import fetch from 'superagent'

export default class ListPage extends Component {
    state = {
        pokeData: [],
        filter: '',
        sortType: '',
        sortOrder: '',
        pokemon: ''
    }
    
    componentDidMount = async () => {
        await this.fetchPoke();
 
    }

    fetchPoke = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.filter}&sort=${this.state.sortType}&direction=${this.state.sortOrder}&perPage=1000`)
        this.setState({pokeData: response.body.results});
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        await this.fetchPoke();
    }
    
    handleChange = async (e) => {
        await this.setState({filter: e.target.value});
        await this.fetchPoke()
    }

    handleSortOrder = async (e) => {
        await this.setState({sortOrder: e.target.value});
        await this.fetchPoke()
    }
    handleSortType = async (e) => {
        await this.setState({sortType: e.target.value})
        await this.fetchPoke()
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

                {
                    this.state.pokeData.length === 0 
                    ? <iframe
                    className='spinner'
                    src="https://i.imgur.com/tZilN49.gif"
                    title={Math.random()}
                    width="500px"
                    height="500px"  
                    frameBorder='0'
                    allowFullScreen/>
                    : <PokeList 
                    pokeData={this.state.pokeData}
                    />
                }
            </div>
        )
    }
}
