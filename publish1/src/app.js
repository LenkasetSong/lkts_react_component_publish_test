import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from "antd";
import NewButton, { AnotherButton, PropertyList } from './index';
import styles from './app.less';

const parameters = [
  {
    "name": "frequency",
    "supportedFeatures": ["ffm", "ffdf", "wbdf", "tdoa"],
    "displayName": "中心频率",
    "description": "设置监测或测向时被测信号的中心频率，单位：MHz",
    "unit": "MHz",
    "category": "常规设置",
    "type": "double",
    "default": 101.7,
    "minimum": 0.3,
    "maximum": 8000.0,
    "values": [],
    "displayValues": [],
    "browsable": true,
    "selectOnly": false,
    "readonly": false,
    "isInstallation": false,
    "required": false,
    "isPrimaryDevice": false,
    "needModuleCategory": [],
    "needFeature": [],
    "owners": [],
    "parameters": [],
    "order": 0,
    "template": [],
    "value": 101.7
  },];

function App() {
  return (
    <>
      <NewButton name="新按钮" />
      <Button>antd按钮</Button>
      <AnotherButton name="另一个按钮" />
      <div className={styles.pldiv}>
        <PropertyList params={parameters} OnParamsChanged={(pg) => {
          console.log(pg);
        }} />
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));