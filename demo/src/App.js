import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewButton, { PropertyList } from 'lkts_react_component_publish_test';
import jstr from './data/DemoReceiver.json';
import styles from './app.module.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div>test demo</div>
        <NewButton name='123' />
        <div className="pldiv">
          <PropertyList params={jstr.parameters} OnParamsChanged={(pg) => {
            console.log(pg);
          }} />
        </div>
      </div>
    );
  }
}

export default App;
