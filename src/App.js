import React from 'react';
import Header from './Header.js';
import './App.css';
import PokeList from './PokeList.js';
import SearchBar from './SearchBar.js';
import Sort from './Sort.js';
import pokeData from './Data.js';


export default class App extends React.Component {
  state = {
    filter: '',
    form: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      filter: e.target.value
    });
  }
  handleChange = e => {
    this.setState({
      filter: e.target.value
    });
  }

  render() {
    return (
          <div>
            <Header />
            <div className='sort-div'>
              <SearchBar 
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              />
              <Sort 
              />
            </div>
            <PokeList 
            pokeData={pokeData} 
            filter={this.state.filter}
            />

            
          </div>
    );
  }
}