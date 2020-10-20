/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import '../styles/TextControl.less';
import { Input, Form, Tooltip } from 'antd';
import PropTypes from 'prop-types';

// interface ITextProps {
//   name: string;
//   displayName: string;
//   text: string;
//   OnTextChanged: Function;
// }

class TextControl extends Component {
  Id = Math.trunc(Math.random() * 0x1000000).toString();

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  textChanged(e) {
    // eslint-disable-next-line no-unused-expressions
    const { OnTextChanged, name } = this.props;
    OnTextChanged(name, e.target.value);
  }

  render() {
    const { displayName, description, text } = this.props;
    return (
      <Form.Item
        label={<Tooltip title={description}>{`${displayName}`}</Tooltip>}
      >
        <Input
          id={this.Id}
          defaultValue={text}
          placeholder="请输入字符串..."
          // eslint-disable-next-line react/jsx-no-bind
          onChange={this.textChanged.bind(this)}
        />
      </Form.Item>
    );
  }
}

TextControl.propTypes = {
  name: PropTypes.string,
  displayName: PropTypes.string,
  description: PropTypes.string,
  text: PropTypes.string,
  OnTextChanged: PropTypes.func,
};

export default TextControl;
