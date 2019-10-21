import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'tachyons';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { robots } from './components/robots';

class App extends Component {
  state = {
    robots: robots,
    searchField: ''
  }

  render() {
    return (
      <div className="pageWrapper tc">
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}
 
export default App;