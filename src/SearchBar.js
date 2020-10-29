import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        // submit a state in App.js search term
        // then write a function that will update state handle search term in the App.js
        // passed down as a prop to SearchBar to be used in form 
        // then search term piece of state will be passed down to your poke list where the filtering lives
        // 
        return (
            <div className='search-bar'>
                <form>
                    <p> Sort by Pokemon Name 
                        <input className='input' 
                        type='text' 
                        onChange={this.props.handleChange}
                        />
                        <button
                        className='submit-button'>This button is a lie</button>
                    </p>
                </form>
            </div>
        )
    }
}
