import React, { Component } from 'react'
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        return (
            <div className='main'>
                {   
                    this.props.pokeData.filter((item) => {
                        if (!this.props.filter) return true;
                        if (item.pokemon.includes(this.props.filter)) return true;
                        return false;
                    })

                    .sort((a, b) => {
                        if (this.props.sortOrder === 'ascending') {
                            return a[this.props.sortType] - b[this.props.sortType]
                        } else {
                            return b[this.props.sortType] - a[this.props.sortType]
                        }
                        })

                    .map((item) => 
                        <PokeItem 
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