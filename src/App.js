import React from 'react';
import Header from './Header.js';
import './App.css';
import PokeList from './PokeList.js';
import SearchBar from './SearchBar.js';
import Sort from './Sort.js';

export default class App extends React.Component {
  render() {
    return (
          <div>
            <Header />
            <div className='sort-div'>
              <SearchBar />
              <Sort />
            </div>
            <PokeList />
            
          </div>
    );
  }
}