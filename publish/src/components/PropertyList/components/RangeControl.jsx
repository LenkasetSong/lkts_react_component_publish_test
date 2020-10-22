/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import '../styles/RangeControl.less';
import { InputNumber, Form, /* Slider, */ Tooltip, Space } from 'antd';
import PropTypes from 'prop-types';

// interface IRangeProps {
//   name: string;
//   displayName: string;
//   value: number;
//   min: number;
//   max: number;
//   isInteger: boolean;
//   OnValueChanged: Function;
// }

class RangeControl extends Component {
  Id = Math.trunc(Math.random() * 0x1000000).toString();

  constructor(props) {
    super(props);
    this.state = {
      currentValue: props.value,
    };
  }

  // eslint-disable-next-line react/sort-comp
  valueChanged(value) {
    const { max, min, name, OnValueChanged } = this.props;
    const re = /^[0-9]+.?[0-9]*/; // 判断字符串是否为数字//判断正整数/[1−9]+[0−9]∗]∗/
    if (re.test(value)) {
      if (value <= max || value >= min) {
        this.setState({ currentValue: value });
        // eslint-disable-next-line no-unused-expressions
        OnValueChanged?.(name, value);
      }
    }
  }

  // onChange(value: any) {
  //   this.setState({ currentValue: value });
  // }

  // onAfterChange(value: any) {
  //   this.props.OnValueChanged?.(this.props.name, value);
  // }

  limitDecimals = (value) => {
    const reg = /^(-)*(\d+)\.(\d\d).*$/;
    // console.log(value);
    if (typeof value === 'string') {
      // eslint-disable-next-line no-restricted-globals
      return !isNaN(Number(value)) ? value.replace(reg, '$1$2.$3') : '';
    }
    if (typeof value === 'number') {
      // eslint-disable-next-line no-restricted-globals
      return !isNaN(value) ? String(value).replace(reg, '$1$2.$3') : '';
    }
    return '';
  };

  render() {
    const { max, min, displayName, description, isInteger, unit } = this.props;
    const { currentValue } = this.state;
    return (
      <Form.Item
        label={<Tooltip title={description}>{`${displayName}`}</Tooltip>}
      >
        <Form.Item
          noStyle
          rules={[{ required: true, message: '该属性不能为空' }]}
        >
          <InputNumber
            min={min || 0}
            max={max || Number.MAX_SAFE_INTEGER}
            value={currentValue}
            step={isInteger ? 1 : 0.01}
            // eslint-disable-next-line react/jsx-no-bind
            onChange={this.valueChanged.bind(
              this
            )} /* formatter={this.limitDecimals} parser={this.limitDecimals} */
          />
        </Form.Item>
        <Space style={{ marginLeft: 10 }} size="large">
          <div>{`${unit !== undefined ? unit : ''}`}</div>
          <div style={{ color: 'orangered' }}>
            {`${min && max ? `${min}~${max}` : ''}`}
            {isInteger ? '整数' : '小数'}
          </div>
        </Space>
        {/* <Slider min={this.props.min} max={this.props.max} value={this.state.currentValue} step={this.props.isInteger ? 1 : 0.01}
          onChange={this.onChange.bind(this)} onAfterChange={this.onAfterChange.bind(this)}></Slider> */}
      </Form.Item>
    );
  }
}

RangeControl.propTypes = {
  name: PropTypes.string,
  displayName: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  unit: PropTypes.string,
  isInteger: PropTypes.bool,
  OnValueChanged: PropTypes.func,
};

export default RangeControl;
