import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewButton from 'lkts_react_component_publish_test';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div>test demo</div>
        <NewButton name='123' />
      </div>
    );
  }
}

export default App;
