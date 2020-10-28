import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div className='poke-div'>
                <div>
                <h1>
                    {this.props.name}
                </h1>
                <img className='poke-image' 
                src={this.props.pokeImage} 
                alt={this.props.name}
                />
                <p>
                    Hp: {this.props.hp}
                </p>
                </div>
            </div>
        )
    }
}
