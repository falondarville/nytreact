import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar.js';
import Search from './components/search.js';
import Results from './components/results.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Search />
        <Results />
          <Router>
            {/*hide search results until results come back*/}
            {/*hide saved articles until there are articles saved to the database*/}
          </Router>
      </div>
    );
  }
}

