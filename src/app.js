import React from 'react';
import ReactDOM from 'react-dom';
import NewButton from './index';

function App() {
  return (
    <NewButton name="新按钮" />
  )
}

ReactDOM.render(<App />, document.getElementById('root'));