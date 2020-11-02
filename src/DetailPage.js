import React, { Component } from 'react'
import PokeList from './PokeList.js';
import fetch from 'superagent'

export default class DetailPage extends Component {
    state = {
        pokeData: [],
        filter: '',
        sortType: '',
        sortOrder: '',
        loading: false
    }
    
    componentDidMount = async () => {
        await this.fetchPoke();
 
    }

    fetchPoke = async () => {
        this.setState({loading: true })

        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemon}`)
        
        this.setState({
            pokeData: response.body.results,
            loading: false,
        });
    }
    
    render() {
        return (
            <div>
                {
                    this.state.loading 
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
