import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar.js';
import Search from './components/search.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Search />
          <Router>
            {/*insert the route paths here */}

          </Router>
      </div>
    );
  }
}

