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
    sortType: '',
    sortOrder: '',
    form: ''
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      form: this.state.form
    })
  }

  handleChange = e => {
    this.setState({
      filter: e.target.value
    });
  }

  handleSortType = e => {
    this.setState({
      sortType: e.target.value
    });
  }
  handleSortOrder = e => {
    this.setState({
      sortOrder: e.target.value
    });
  }

  render() {
    return (
          <div>
            <Header />
            <SearchBar 
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            />
            <Sort 
            handleSortOrder={this.handleSortOrder}
            handleSortType={this.handleSortType}
            />

            <PokeList 
            pokeData={pokeData} 
            filter={this.state.filter}
            sortOrder={this.state.sortOrder}
            sortType={this.state.sortType}
            />
          </div>
    );
  }
}