import React, { Component } from 'react'
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        return (
            <div className='main'>
                {   
                    this.props.pokeData

                    .map((item) => 
                        <PokeItem
                        key= {item.id} 
                        name={item.pokemon}
                        pokeImage={item.url_image}
                        hp={item.hp}
                        attack={item.attack}
                        defense={item.defense}
                        type={item.type_1}
                        />
                    )
                }
            </div>
        )
    }
}