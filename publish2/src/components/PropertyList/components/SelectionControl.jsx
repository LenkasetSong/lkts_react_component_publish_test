/* eslint-disable react/require-default-props */
import React, { Component } from "react";
import "../styles/TextControl.less";
import antd, { Select, Form, Tooltip, Radio } from "antd";
import PropTypes from "prop-types";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

// interface ISelectionProps {
//   name: string;
//   displayName: string;
//   selectedItem: any;
//   displayStrs: Array<string>;
//   items: Array<any>;
//   OnSelectionChanged: Function;
// }

class SelectionControl extends Component {
  Id = Math.trunc(Math.random() * 0x1000000).toString();

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  selectOptionChanged(value) {
    // eslint-disable-next-line no-unused-expressions
    const { OnSelectionChanged, name } = this.props;
    OnSelectionChanged(name, value);
  }

  selectRadioChanged(e) {
    // eslint-disable-next-line no-unused-expressions
    const { OnSelectionChanged, name } = this.props;
    OnSelectionChanged(name, e.target.value);
  }

  renderOptions() {
    const { items, displayStrs } = this.props;
    const options = items.map((item, index) => {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <Select.Option key={index} value={item}>
          {displayStrs[index]}
        </Select.Option>
      );
    });
    return options;
  }

  renderGroups() {
    const { items, displayStrs } = this.props;
    const options = items.map((item, index) => {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <RadioButton key={index} value={item}>
          {displayStrs[index]}
        </RadioButton>
      );
    });
    return options;
  }

  render() {
    const { description, items, displayName, selectedItem } = this.props;
    return (
      <Form.Item
        label={<Tooltip title={description}>{`${displayName}`}</Tooltip>}
      >
        {items.length <= 3 ? (
          <RadioGroup
            key={this.Id}
            defaultValue={selectedItem}
            // eslint-disable-next-line react/jsx-no-bind
            onChange={this.selectRadioChanged.bind(this)}
          >
            {this.renderGroups()}
          </RadioGroup>
        ) : (
          <Select
            key={this.Id}
            defaultValue={selectedItem}
            // eslint-disable-next-line react/jsx-no-bind
            onChange={this.selectOptionChanged.bind(this)}
          >
            {this.renderOptions()}
          </Select>
        )}
      </Form.Item>
    );
  }
}

SelectionControl.propTypes = {
  name: PropTypes.string,
  displayName: PropTypes.string,
  description: PropTypes.string,
  selectedItem: PropTypes.any,
  displayStrs: PropTypes.array,
  items: PropTypes.array,
  OnSelectionChanged: PropTypes.func,
};

export default SelectionControl;
