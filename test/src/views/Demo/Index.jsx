import React from 'react';
import { Button } from 'antd';
import NewButton, { PropertyList } from 'lkts_react_ui';
import jstr from './DemoReceiver.json';

const Test = () => {
  return (
    <>
      <div>Test FC</div>
      <NewButton name="hello world" />
      <Button>???</Button>
      <PropertyList
        params={jstr.parameters}
        OnParamsChanged={(pg) => {
          console.log(pg);
        }}
      />
    </>
  );
};

export default Test;
