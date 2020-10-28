import React, { Component } from 'react'
import pokeData from './Data.js';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        return (
            <div>
                {   
                pokeData.map((item) => {
                    return <PokeItem 
                    name={item.pokemon}
                    pokeImage={item.url_image}
                    hp={item.hp}
                    />
                })
                }
            </div>
        )
    }
}
