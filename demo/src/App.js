import React, { Component } from 'react';
import logo from './logo.svg';
import './app.less';
import './App.css';
import NewButton, { PropertyList } from 'lkts_react_component_publish_test';
import jstr from './data/DemoReceiver.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div>test demo</div>
        <NewButton name='123' />
        <div style={{ width: '520px' }}>
          <PropertyList params={jstr.parameters} OnParamsChanged={(pg) => {
            console.log(pg);
          }} />
        </div>
      </div>
    );
  }
}

export default App;
