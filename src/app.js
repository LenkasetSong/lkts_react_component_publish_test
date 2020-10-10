import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from "antd";
import NewButton, { AnotherButton } from './index';

function App() {
  return (
    <>
      <NewButton name="新按钮" />
      <Button>antd按钮</Button>
      <AnotherButton name="另一个按钮" />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));