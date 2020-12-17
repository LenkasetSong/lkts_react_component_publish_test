import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Collapse } from "antd";
import PropertyType from "./interface/IPropertyConstructure";
import TextControl from "./components/TextControl.jsx";
import RangeControl from "./components/RangeControl.jsx";
import SelectionControl from "./components/SelectionControl.jsx";
import SwitchControl from "./components/SwitchControl.jsx";
import ListControl from "./components/ListControl.jsx";
// import "antd/dist/antd.css";

const { Panel } = Collapse;

class PropertyList extends Component {
  index = 0;

  // temproperties = [];

  OnSetPropertyList;

  OnParamsChanged;

  layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
  };

  constructor(props) {
    super(props);
    const { params, OnSetPropertyList, OnParamsChanged } = this.props;
    this.state = {
      properties: params,
    };
    // this.temproperties = params;
    this.OnSetPropertyList = OnSetPropertyList;
    this.OnParamsChanged = OnParamsChanged;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { params } = nextProps;
    if (JSON.stringify(params) !== JSON.stringify(prevState.properties)) {
      return {
        properties: params,
      };
    }
    return null;
  }

  // #region event

  onSetPropertyList() {
    const { properties } = this.state;
    this.OnSetPropertyList(properties);
  }

  onPropertyChanged = (name, value) => {
    const { properties } = this.state;
    const prop = properties?.find((item) => item.name === name);
    if (prop !== undefined) {
      // if (prop.parameters !== null && prop.parameters.length > 0) {
      if (prop.template !== null && prop.template.length > 0) {
        const old = JSON.parse(JSON.stringify(prop.parameters));
        prop.parameters = value;
        this.OnParamsChanged(properties, name, old, value);
      } else {
        const old = prop.value;
        prop.value = value;
        this.OnParamsChanged(properties, name, old, value);
      }
    }
  };

  groupBy = (array, f) => {
    const groups = {};
    array.forEach((o) => {
      const group = JSON.stringify(f(o));
      groups[group] = groups[group] || [];
      groups[group].push(o);
    });
    return Object.keys(groups).map((group) => {
      // console.log(JSON.parse(group));
      return { name: JSON.parse(group), data: groups[group] };
    });
  };

  onFinish = () => {};
  // #endregion

  // #region render

  renderGroup() {
    const { properties } = this.state;
    if (properties) {
      const groupArr = this.groupBy(properties, (item) => {
        return item.category; // 按照category进行分组
      });
      const group = groupArr.map((arr, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <Panel header={arr.name} key={index + 1}>
            <Form
              {...this.layout}
              className="ant-form-horizontal"
              // onFinish={this.onFinish}
            >
              {this.renderList(arr.data)}
            </Form>
          </Panel>
        );
      });
      return <Collapse defaultActiveKey={["1", "2"]}>{group}</Collapse>;
    }
    return <></>;
  }

  renderList(properties) {
    const list = properties.map((item) => {
      let itemType = PropertyType.TEXT;
      // if (item.parameters === null || item.parameters.length === 0) {
      if (item.template === null || item.template.length === 0) {
        if (item.values !== null && item.values.length > 0) {
          itemType = PropertyType.SELECTION;
          if (item.type === 5 || item.type === "bool") {
            itemType = PropertyType.BOOL;
          }
        } else {
          if (
            item.type === 1 ||
            item.type === 2 ||
            item.type === "float" ||
            item.type === "double"
          ) {
            itemType = PropertyType.RANGE_DECIMAL;
          }
          if (item.type === 3 || item.type === 4 || item.type === "int") {
            itemType = PropertyType.RANGE_INTEGER;
          }
        }
      } else {
        itemType = PropertyType.LIST;
      }
      switch (itemType) {
        case PropertyType.TEXT: {
          return (
            <TextControl
              key={item.name}
              name={item.name}
              displayName={item.displayName}
              description={item.description}
              text={`${item.value}`}
              OnTextChanged={this.onPropertyChanged}
            />
          );
        }
        case PropertyType.RANGE_INTEGER: {
          return (
            <RangeControl
              key={item.name}
              name={item.name}
              displayName={item.displayName}
              description={item.description}
              value={item.value}
              OnValueChanged={this.onPropertyChanged}
              min={item.minimum}
              max={item.maximum}
              unit={item.unit || item.Unit}
              isInteger
            />
          );
        }
        case PropertyType.RANGE_DECIMAL: {
          return (
            <RangeControl
              key={item.name}
              name={item.name}
              displayName={item.displayName}
              description={item.description}
              value={item.value}
              OnValueChanged={this.onPropertyChanged}
              min={item.minimum}
              max={item.maximum}
              unit={item.unit || item.Unit}
              isInteger={false}
            />
          );
        }
        case PropertyType.SELECTION: {
          return (
            <SelectionControl
              key={item.name}
              name={item.name}
              displayName={item.displayName}
              description={item.description}
              items={item.values}
              displayStrs={item.displayValues}
              selectedItem={item.value}
              OnSelectionChanged={this.onPropertyChanged}
            />
          );
        }
        case PropertyType.BOOL: {
          return (
            <SwitchControl
              key={item.name}
              name={item.name}
              displayName={item.displayName}
              description={item.description}
              items={item.values}
              displayStrs={item.displayValues}
              bool={item.value}
              OnBoolChanged={this.onPropertyChanged}
            />
          );
        }
        case PropertyType.LIST: {
          return (
            <ListControl
              key={item.name}
              name={item.name}
              displayName={item.displayName}
              template={item.template}
              items={item.parameters}
              OnListChanged={this.onPropertyChanged}
            />
          );
        }
        default:
          return null; /* break; */
      }
    });
    return list;
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div
          style={{
            padding: 2,
            width: "100%",
            height: "100%",
            overflow: "auto",
          }}
        >
          {this.renderGroup()}
        </div>
      </div>
    );
  }

  // #endregion
}

PropertyList.defaultProps = {
  params: null,
  OnSetPropertyList: () => {},
};

PropertyList.propTypes = {
  params: PropTypes.array,
  OnSetPropertyList: PropTypes.func,
  OnParamsChanged: PropTypes.func.isRequired,
};

export default PropertyList;
