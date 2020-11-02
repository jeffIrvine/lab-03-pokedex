import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
// import Main from './Main.js';
import HomePage from './HomePage.js';
import Header from './Header.js';
import ListPage from './ListPage.js';
import DetailPage from './DetailPage.js';
import PaginationPage from './PaginationPage.js';



export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
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
                        <Route 
                            path="/pokemon/:pokemon" 
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                        <Route 
                            path="/pagination" 
                            exact
                            render={(routerProps) => <PaginationPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}