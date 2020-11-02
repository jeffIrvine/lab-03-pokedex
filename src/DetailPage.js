import React, { Component } from 'react'
import PokeList from './PokeList.js';
import fetch from 'superagent'

export default class ListPage extends Component {
    state = {
        pokeData: [],
        filter: '',
        sortType: '',
        sortOrder: '',
    }
    
    componentDidMount = async () => {
        await this.fetchPoke();
 
    }

    fetchPoke = async () => {

        console.log('this.props', this.props.match.params.pokemon);
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemon}`)
        this.setState({pokeData: response.body.results});
    }
    
    render() {
        return (
            <div>
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
