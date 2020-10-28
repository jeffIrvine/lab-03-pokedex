import React, { Component } from 'react'
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        return (
            <div>
                {   
                    this.props.pokeData.filter((item) => {
                        if (!this.props.filter) return true;
                        if (item.pokemon === this.props.filter) return true;
                        return false;
                    })

                    .map((item) => 
                        <PokeItem 
                        name={item.pokemon}
                        pokeImage={item.url_image}
                        hp={item.hp}
                        />
                    )
                }
            </div>
        )
    }
}
