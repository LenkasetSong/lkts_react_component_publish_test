/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import '../styles/ListControl.less';
import { Form, Input, InputNumber, Select, Button } from 'antd';
import PropTypes from 'prop-types';
import PropertyType from '../interface/IPropertyConstructure';

class ListControl extends Component {
  itemsCache = [];

  Id = Math.trunc(Math.random() * 0x1000000).toString();

  constructor(props) {
    super(props);

    this.state = {
      itemstag: 0,
    };
    this.itemsCache = [...props.items];
  }

  textChanged = (idx, index, e) => {
    const txt = e.target.value;
    this.itemsCache[idx][index].value = txt;
  };

  valueChanged = (idx, index, value) => {
    const reg = /^[0-9]+.?[0-9]*/;
    if (reg.test(value)) {
      this.itemsCache[idx][index].value = value;
    }
  };

  selectionChanged = (idx, index, value) => {
    this.itemsCache[idx][index].value = value;
  };

  deleteClick = (idx) => {
    if (this.itemsCache.length > 1) {
      const { itemstag } = this.state;
      this.itemsCache.splice(idx, 1);
      this.setState({ itemstag: itemstag + 1 });
    }
  };

  addClick = () => {
    const { itemstag } = this.state;
    const { items } = this.props;
    this.itemsCache.push(JSON.parse(JSON.stringify(items[0])));
    this.setState(
      // eslint-disable-next-line react/no-access-state-in-setstate
      { itemstag: itemstag + 1 }
    );
  };

  saveClick = () => {
    // eslint-disable-next-line no-unused-expressions
    const { name, OnListChanged } = this.props;
    OnListChanged(name, this.itemsCache);
  };

  renderList(properties, idx) {
    const list = properties.map((item, index) => {
      const keyID = Math.trunc(Math.random() * 0x1000000).toString();
      let itemType = PropertyType.TEXT;
      if (item.parameters === null || item.parameters.length === 0) {
        if (item.values !== null && item.values.length > 0) {
          itemType = PropertyType.SELECTION;
          if (item.type === 5) {
            itemType = PropertyType.BOOL;
          }
        } else {
          if (item.type === 1 || item.type === 2) {
            itemType = PropertyType.RANGE_DECIMAL;
          }
          if (item.type === 3 || item.type === 4) {
            itemType = PropertyType.RANGE_INTEGER;
          }
        }
      } else {
        itemType = PropertyType.LIST;
      }
      switch (itemType) {
        // eslint-disable-next-line no-lone-blocks
        case PropertyType.TEXT: {
          return (
            <tr key={keyID}>
              <td style={{ textAlign: 'right' }}>{`${item.displayName}:`}</td>
              <td colSpan={2} style={{ padding: 3 }}>
                <Input
                  defaultValue={item.value}
                  placeholder="请输入字符串..."
                  // eslint-disable-next-line react/jsx-no-bind
                  onChange={this.textChanged.bind(this, idx, index)}
                />
              </td>
            </tr>
          );
        }
        // eslint-disable-next-line no-lone-blocks
        case PropertyType.RANGE_DECIMAL: {
          return (
            <tr key={keyID}>
              <td style={{ textAlign: 'right' }}>{`${item.displayName}:`}</td>
              <td style={{ padding: 3 }}>
                <InputNumber
                  min={item.minimum}
                  max={item.maximum}
                  defaultValue={item.value}
                  step={0.01}
                  // eslint-disable-next-line react/jsx-no-bind
                  onChange={this.valueChanged.bind(this, idx, index)}
                />
              </td>
              <td>
                <a href="##" style={{ margin: '0px 20px' }}>
                  {item.minimum} ~ {item.maximum}
                </a>
              </td>
            </tr>
          );
        }
        // eslint-disable-next-line no-lone-blocks
        case PropertyType.SELECTION: {
          return (
            <tr key={keyID}>
              <td style={{ textAlign: 'right' }}>{`${item.displayName}:`}</td>
              <td colSpan={2} style={{ padding: 3 }}>
                <Select
                  defaultValue={item.value}
                  style={{ width: '90%' }}
                  // eslint-disable-next-line react/jsx-no-bind
                  onChange={this.selectionChanged.bind(this, idx, index)}
                >
                  {item.values.map((val, ix) => {
                    const keyIDOp = Math.trunc(
                      Math.random() * 0x1000000
                    ).toString();
                    return (
                      <Select.Option key={keyIDOp} value={val}>
                        {item.displayValues[ix]}
                      </Select.Option>
                    );
                  })}
                </Select>
              </td>
            </tr>
          );
        }
        default:
          return null; /* break; */
      }
    });
    return list;
  }

  render() {
    const { displayName } = this.props;
    console.log(this.itemsCache);
    return (
      <Form.Item label={`${displayName} :`}>
        {this.itemsCache.map((itm, idx) => {
          console.log(itm, '||||');
          const keyID = Math.trunc(Math.random() * 0x1000000).toString();
          return (
            <table
              key={keyID}
              style={{
                border: '1px solid #ccc',
                marginBottom: '5px',
                width: '100%',
              }}
            >
              <thead>
                <tr>
                  <th />
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr key={itm.name}>
                  <td colSpan={2} style={{ color: 'red', textAlign: 'center' }}>
                    {`频段：${idx + 1}`}
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <Button
                      style={{ color: 'red', margin: '3px' }}
                      // eslint-disable-next-line react/jsx-no-bind
                      onClick={this.deleteClick.bind(this, idx)}
                    >
                      删除
                    </Button>
                  </td>
                </tr>
                {this.renderList(itm, idx)}
              </tbody>
            </table>
          );
        })}
        <Button
          style={{ margin: '5px', color: 'blue' }}
          // eslint-disable-next-line react/jsx-no-bind
          onClick={this.addClick.bind(this)}
        >
          添加
        </Button>
        <Button
          style={{ margin: '5px' }}
          // eslint-disable-next-line react/jsx-no-bind
          onClick={this.saveClick.bind(this)}
        >
          保存
        </Button>
      </Form.Item>
    );
  }
}

ListControl.propTypes = {
  name: PropTypes.string,
  displayName: PropTypes.string,
  items: PropTypes.array,
  OnListChanged: PropTypes.func,
};

export default ListControl;
