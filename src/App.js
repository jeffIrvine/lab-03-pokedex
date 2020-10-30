import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import ListPage from './ListPage.js';
import HomePage from './HomePage.js';
import Header from './Header.js';



export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Header />
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/list" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}