import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <div className='header-div'>
                <div className='header-title'>
                    Search your Pokedex!
                <ul className='header-link-list'> 
                    <li>
                    <Link to="/" >Home</Link>
                    </li>
                    <li>
                    <Link to="/list" >List</Link>
                    </li>
                </ul>
                </div>
            </div>
        )
    }
}
