import React from 'react';
import { Button } from 'antd';
import NewButton, { AnotherButton, PropertyList } from 'lkts_react_ui';
import jstr from './DemoReceiver.json';
import styles from './index.module.less';

const Test = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div>Test FC</div>
        <Button>???</Button>
        <NewButton name="hello world" />
        <AnotherButton name="hello world" />
      </div>
      <div className={styles.list}>
        <PropertyList
          params={jstr.parameters}
          OnParamsChanged={(pg) => {
            console.log(pg);
          }}
        />
      </div>
    </div>
  );
};

export default Test;
