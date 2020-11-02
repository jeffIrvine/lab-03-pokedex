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
        pokemon: '',
        pageNumber: 1,
        count: 1
    }
    
    componentDidMount = async () => {
        await this.fetchPoke();
 
    }

    fetchPoke = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.filter}&sort=${this.state.sortType}&direction=${this.state.sortOrder}&page=${this.state.pageNumber}&perPage=20`)
        this.setState({
            pokeData: response.body.results,
            count: response.body.count
        });
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

    handleIncrement = async () => {
        await this.setState({
            pageNumber: this.state.pageNumber + 1})
            await this.fetchPoke()
    }
    handleDecrement = async () => {
        await this.setState({
            pageNumber: this.state.pageNumber - 1})
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
                <div> 
                    Page: {this.state.pageNumber} out of {Math.ceil(this.state.count / 20)}
                </div>
                <div>
                    {this.state.count} total pokemon in query
                </div>
                { 
                     <button onClick={this.handleDecrement} disabled={this.state.pageNumber === 1} >Prev</button>
                }
                {
                     <button onClick={this.handleIncrement} disabled={this.state.pageNumber === Math.ceil(this.state.count / 20)} >Next</button>
                }

                {
                    this.state.pokeData.length === 0 
                    ? <iframe
                    className='spinner'
                    src="https://i.gifer.com/9xnj.gif"
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
