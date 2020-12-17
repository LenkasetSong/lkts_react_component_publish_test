/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Button, Input } from 'antd';
import EnumSelector from '../../../Components/EnumSelector/EnumSelector';
import leftArrow from '@/assets/images/arrow-left.png';
import rightArrow from '@/assets/images/arrow-right.png';

const EnumSelectorDemo = () => {
  const [testTip, setTestTip] = useState('');
  const data1 = [
    { value: 50, display: '50 kHz' },
    { value: 100, display: '100 kHz' },
    { value: 150, display: '150 kHz' },
    { value: 200, display: '200 kHz' },
    { value: 500, display: '500 kHz' },
  ];
  const data2 = [
    {
      caption: '广播',
      items: [
        { value: 50, display: 'ch1|50 kHz' },
        { value: 100, display: 'ch2|100 kHz' },
        { value: 150, display: 'ch3|150 kHz' },
        { value: 200, display: 'ch4|200 kHz' },
        { value: 500, display: 'ch5|500 kHz' },
      ],
    },
    {
      caption: '电视',
      items: [
        { value: 55, display: 'ch1|50 kHz' },
        { value: 110, display: 'ch1|100 kHz' },
        { value: 150, display: 'ch1|150 kHz' },
        { value: 205, display: 'ch1|200 kHz' },
        { value: 505, display: 'ch1|500 kHz' },
      ],
    },
  ];

  const ops = {
    leftIcon: leftArrow,
    rightIcon: rightArrow,
  };

  return (
    <div>
      <div style={{ width: '260px' }}>
        带宽设置
        <br />
        <EnumSelector
          caption="带宽"
          items={data1}
          onValueChanged={(index, value) => {
            console.log('bandwidth changed', value);
          }}
        />
      </div>
      <div style={{ width: '320px' }}>
        业务频段和信道中心频率设置
        <br />
        <EnumSelector
          levelItems={data2}
          levelValue={['广播', 50]}
          onValueChanged={(index, value) => {
            console.log('frequency changed', value);
          }}
        />
      </div>
      <div style={{ width: '320px' }}>
        自定义图标
        <br />
        <EnumSelector
          caption="带宽"
          items={data1}
          onValueChanged={(index, value) => {
            console.log('frequency changed', value);
          }}
          options={{ leftIcon: leftArrow, rightIcon: rightArrow }}
        />
      </div>
    </div>
  );
};

export default EnumSelectorDemo;
