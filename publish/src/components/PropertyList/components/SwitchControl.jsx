/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import '../styles/TextControl.less';
import { Switch, Form, Tooltip } from 'antd';
import PropTypes from 'prop-types';

// interface IBooleanProps {
//   name: string;
//   displayName: string;
//   bool: boolean;
//   displayStrs: Array<string>;
//   items: Array<boolean>;
//   OnBoolChanged: Function;
// }

class SwitchControl extends Component {
  Id = Math.trunc(Math.random() * 0x1000000).toString();

  constructor(props) {
    super(props);
    const { bool } = this.props;
    this.state = {
      currentBool: bool,
    };
  }

  boolChanged(value) {
    // eslint-disable-next-line no-unused-expressions
    const { OnBoolChanged, name } = this.props;
    OnBoolChanged(name, value);
    this.setState({ currentBool: value });
  }

  render() {
    const { displayName, description, displayStrs, items } = this.props;
    const { currentBool } = this.state;
    return (
      <Form.Item
        label={<Tooltip title={description}>{`${displayName}`}</Tooltip>}
      >
        <Form.Item
          noStyle
          rules={[{ required: true, message: '该属性不能为空' }]}
        >
          <Switch
            checked={currentBool}
            // eslint-disable-next-line react/jsx-no-bind
            onChange={this.boolChanged.bind(this)}
          />
        </Form.Item>
        {/* <Slider min={this.props.min} max={this.props.max} value={this.state.currentValue} step={0.01}
            onChange={this.onChange.bind(this)} onAfterChange={this.onAfterChange.bind(this)}></Slider> */}
        <Tooltip title="功能开关">
          <a href="##" style={{ margin: '0px 20px' }}>
            {displayStrs[items.indexOf(currentBool)]}
          </a>
        </Tooltip>
      </Form.Item>
    );
  }
}

SwitchControl.propTypes = {
  name: PropTypes.string,
  displayName: PropTypes.string,
  description: PropTypes.string,
  bool: PropTypes.bool,
  displayStrs: PropTypes.array,
  items: PropTypes.array,
  OnBoolChanged: PropTypes.func,
};

export default SwitchControl;
