import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import 'tachyons';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../components/robots';

class App extends Component {
  state = {
    robots: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => this.setState({robots}))
  }

  filterRobots = (elem) => {
    let value = elem.value.toLocaleLowerCase();
    let robotList = [...this.state.robots];
    const robots = robotList.filter(robot => {
      let name = robot.name.toLocaleLowerCase();
      if (name.indexOf(value) > -1) {
        return robot;
      }
    });
    console.log("result", robots);
    this.setState({robots});
  }

  render() {
    return (
      <div className="pageWrapper tc">
        <h1>RoboFriends</h1>
        <SearchBox filter={this.filterRobots} />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}
 
export default App;