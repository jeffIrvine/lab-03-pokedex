import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className='search-bar'>
                <p> Sort by Pokemon Name 
                <input className='input' />
                <button className='submit-button'>Submit</button>
                </p>
            </div>
        )
    }
}
