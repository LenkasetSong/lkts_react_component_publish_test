(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('antd'), require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'antd', 'prop-types'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.dcui = {}, global.React, global.antd, global.PropTypes));
}(this, (function (exports, React, antd, PropTypes) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".btn-style{border-color:#00f;margin:10px}";
  styleInject(css_248z);

  function NewButton(props) {
    return /*#__PURE__*/React__default['default'].createElement("button", {
      style: {
        color: "red"
      },
      className: "btn-style"
    }, props.name);
  }

  var css_248z$1 = ".AnotherButton-module_btn__3h7Ml{width:450px;height:30px;margin:10px;color:red}";
  var styles = {"btn":"AnotherButton-module_btn__3h7Ml"};
  styleInject(css_248z$1);

  function AnotherButton(props) {
    return /*#__PURE__*/React__default['default'].createElement(antd.Button, {
      className: styles.btn
    }, props.name);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var PropertyType = {
    TEXT: 0,
    // 普通文本类型
    RANGE_INTEGER: 1,
    // 带范围的整数
    RANGE_DECIMAL: 2,
    // 带范围的小数
    SELECTION: 3,
    // 选择项
    BOOL: 4,
    // 开关项
    LIST: 5,
    // 嵌套列表型
    NONE: 9
  };

  var css_248z$2 = "";
  styleInject(css_248z$2);

  //   name: string;
  //   displayName: string;
  //   text: string;
  //   OnTextChanged: Function;
  // }

  var TextControl = /*#__PURE__*/function (_Component) {
    _inheritsLoose(TextControl, _Component);

    // eslint-disable-next-line no-useless-constructor
    function TextControl(props) {
      var _this;

      _this = _Component.call(this, props) || this;

      _defineProperty(_assertThisInitialized(_this), "Id", Math.trunc(Math.random() * 0x1000000).toString());

      return _this;
    }

    var _proto = TextControl.prototype;

    _proto.textChanged = function textChanged(e) {
      // eslint-disable-next-line no-unused-expressions
      var _this$props = this.props,
          OnTextChanged = _this$props.OnTextChanged,
          name = _this$props.name;
      OnTextChanged(name, e.target.value);
    };

    _proto.render = function render() {
      var _this$props2 = this.props,
          displayName = _this$props2.displayName,
          description = _this$props2.description,
          text = _this$props2.text;
      return /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
        label: /*#__PURE__*/React__default['default'].createElement(antd.Tooltip, {
          title: description
        }, "" + displayName)
      }, /*#__PURE__*/React__default['default'].createElement(antd.Input, {
        id: this.Id,
        defaultValue: text,
        placeholder: "\u8BF7\u8F93\u5165\u5B57\u7B26\u4E32..." // eslint-disable-next-line react/jsx-no-bind
        ,
        onChange: this.textChanged.bind(this)
      }));
    };

    return TextControl;
  }(React.Component);

  TextControl.propTypes = {
    name: PropTypes__default['default'].string,
    displayName: PropTypes__default['default'].string,
    description: PropTypes__default['default'].string,
    text: PropTypes__default['default'].string,
    OnTextChanged: PropTypes__default['default'].func
  };

  var css_248z$3 = "";
  styleInject(css_248z$3);

  //   name: string;
  //   displayName: string;
  //   value: number;
  //   min: number;
  //   max: number;
  //   isInteger: boolean;
  //   OnValueChanged: Function;
  // }

  var RangeControl = /*#__PURE__*/function (_Component) {
    _inheritsLoose(RangeControl, _Component);

    function RangeControl(props) {
      var _this;

      _this = _Component.call(this, props) || this;

      _defineProperty(_assertThisInitialized(_this), "Id", Math.trunc(Math.random() * 0x1000000).toString());

      _defineProperty(_assertThisInitialized(_this), "limitDecimals", function (value) {
        var reg = /^(-)*(\d+)\.(\d\d).*$/; // console.log(value);

        if (typeof value === 'string') {
          // eslint-disable-next-line no-restricted-globals
          return !isNaN(Number(value)) ? value.replace(reg, '$1$2.$3') : '';
        }

        if (typeof value === 'number') {
          // eslint-disable-next-line no-restricted-globals
          return !isNaN(value) ? String(value).replace(reg, '$1$2.$3') : '';
        }

        return '';
      });

      _this.state = {
        currentValue: props.value
      };
      return _this;
    } // eslint-disable-next-line react/sort-comp


    var _proto = RangeControl.prototype;

    _proto.valueChanged = function valueChanged(value) {
      var _this$props = this.props,
          max = _this$props.max,
          min = _this$props.min,
          name = _this$props.name,
          OnValueChanged = _this$props.OnValueChanged;
      var re = /^[0-9]+.?[0-9]*/; // 判断字符串是否为数字//判断正整数/[1−9]+[0−9]∗]∗/

      if (re.test(value)) {
        if (value <= max || value >= min) {
          this.setState({
            currentValue: value
          }); // eslint-disable-next-line no-unused-expressions

          OnValueChanged == null ? void 0 : OnValueChanged(name, value);
        }
      }
    } // onChange(value: any) {
    //   this.setState({ currentValue: value });
    // }
    // onAfterChange(value: any) {
    //   this.props.OnValueChanged?.(this.props.name, value);
    // }
    ;

    _proto.render = function render() {
      var _this$props2 = this.props,
          max = _this$props2.max,
          min = _this$props2.min,
          displayName = _this$props2.displayName,
          description = _this$props2.description,
          isInteger = _this$props2.isInteger,
          unit = _this$props2.unit;
      var currentValue = this.state.currentValue;
      return /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
        label: /*#__PURE__*/React__default['default'].createElement(antd.Tooltip, {
          title: description
        }, "" + displayName)
      }, /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
        noStyle: true,
        rules: [{
          required: true,
          message: '该属性不能为空'
        }]
      }, /*#__PURE__*/React__default['default'].createElement(antd.InputNumber, {
        min: min || 0,
        max: max || Number.MAX_SAFE_INTEGER,
        value: currentValue,
        step: isInteger ? 1 : 0.01 // eslint-disable-next-line react/jsx-no-bind
        ,
        onChange: this.valueChanged.bind(this)
        /* formatter={this.limitDecimals} parser={this.limitDecimals} */

      })), /*#__PURE__*/React__default['default'].createElement(antd.Space, {
        style: {
          marginLeft: 10
        },
        size: "large"
      }, /*#__PURE__*/React__default['default'].createElement("div", null, "" + (unit !== undefined ? unit : '')), /*#__PURE__*/React__default['default'].createElement("div", {
        style: {
          color: 'orangered'
        }
      }, "" + (min && max ? min + "~" + max : ''), isInteger ? '整数' : '小数')));
    };

    return RangeControl;
  }(React.Component);

  RangeControl.propTypes = {
    name: PropTypes__default['default'].string,
    displayName: PropTypes__default['default'].string,
    description: PropTypes__default['default'].string,
    value: PropTypes__default['default'].number,
    min: PropTypes__default['default'].number,
    max: PropTypes__default['default'].number,
    unit: PropTypes__default['default'].string,
    isInteger: PropTypes__default['default'].bool,
    OnValueChanged: PropTypes__default['default'].func
  };

  var RadioButton = antd.Radio.Button;
  var RadioGroup = antd.Radio.Group; // interface ISelectionProps {
  //   name: string;
  //   displayName: string;
  //   selectedItem: any;
  //   displayStrs: Array<string>;
  //   items: Array<any>;
  //   OnSelectionChanged: Function;
  // }

  var SelectionControl = /*#__PURE__*/function (_Component) {
    _inheritsLoose(SelectionControl, _Component);

    // eslint-disable-next-line no-useless-constructor
    function SelectionControl(props) {
      var _this;

      _this = _Component.call(this, props) || this;

      _defineProperty(_assertThisInitialized(_this), "Id", Math.trunc(Math.random() * 0x1000000).toString());

      return _this;
    }

    var _proto = SelectionControl.prototype;

    _proto.selectOptionChanged = function selectOptionChanged(value) {
      // eslint-disable-next-line no-unused-expressions
      var _this$props = this.props,
          OnSelectionChanged = _this$props.OnSelectionChanged,
          name = _this$props.name;
      OnSelectionChanged(name, value);
    };

    _proto.selectRadioChanged = function selectRadioChanged(e) {
      // eslint-disable-next-line no-unused-expressions
      var _this$props2 = this.props,
          OnSelectionChanged = _this$props2.OnSelectionChanged,
          name = _this$props2.name;
      OnSelectionChanged(name, e.target.value);
    };

    _proto.renderOptions = function renderOptions() {
      var _this$props3 = this.props,
          items = _this$props3.items,
          displayStrs = _this$props3.displayStrs;
      var options = items.map(function (item, index) {
        return (
          /*#__PURE__*/
          // eslint-disable-next-line react/no-array-index-key
          React__default['default'].createElement(antd.Select.Option, {
            key: index,
            value: item
          }, displayStrs[index])
        );
      });
      return options;
    };

    _proto.renderGroups = function renderGroups() {
      var _this$props4 = this.props,
          items = _this$props4.items,
          displayStrs = _this$props4.displayStrs;
      var options = items.map(function (item, index) {
        return (
          /*#__PURE__*/
          // eslint-disable-next-line react/no-array-index-key
          React__default['default'].createElement(RadioButton, {
            key: index,
            value: item
          }, displayStrs[index])
        );
      });
      return options;
    };

    _proto.render = function render() {
      var _this$props5 = this.props,
          description = _this$props5.description,
          items = _this$props5.items,
          displayName = _this$props5.displayName,
          selectedItem = _this$props5.selectedItem;
      return /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
        label: /*#__PURE__*/React__default['default'].createElement(antd.Tooltip, {
          title: description
        }, "" + displayName)
      }, items.length <= 3 ? /*#__PURE__*/React__default['default'].createElement(RadioGroup, {
        key: this.Id,
        defaultValue: selectedItem // eslint-disable-next-line react/jsx-no-bind
        ,
        onChange: this.selectRadioChanged.bind(this)
      }, this.renderGroups()) : /*#__PURE__*/React__default['default'].createElement(antd.Select, {
        key: this.Id,
        defaultValue: selectedItem // eslint-disable-next-line react/jsx-no-bind
        ,
        onChange: this.selectOptionChanged.bind(this)
      }, this.renderOptions()));
    };

    return SelectionControl;
  }(React.Component);

  SelectionControl.propTypes = {
    name: PropTypes__default['default'].string,
    displayName: PropTypes__default['default'].string,
    description: PropTypes__default['default'].string,
    selectedItem: PropTypes__default['default'].any,
    displayStrs: PropTypes__default['default'].array,
    items: PropTypes__default['default'].array,
    OnSelectionChanged: PropTypes__default['default'].func
  };

  //   name: string;
  //   displayName: string;
  //   bool: boolean;
  //   displayStrs: Array<string>;
  //   items: Array<boolean>;
  //   OnBoolChanged: Function;
  // }

  var SwitchControl = /*#__PURE__*/function (_Component) {
    _inheritsLoose(SwitchControl, _Component);

    function SwitchControl(props) {
      var _this;

      _this = _Component.call(this, props) || this;

      _defineProperty(_assertThisInitialized(_this), "Id", Math.trunc(Math.random() * 0x1000000).toString());

      var bool = _this.props.bool;
      _this.state = {
        currentBool: bool
      };
      return _this;
    }

    var _proto = SwitchControl.prototype;

    _proto.boolChanged = function boolChanged(value) {
      // eslint-disable-next-line no-unused-expressions
      var _this$props = this.props,
          OnBoolChanged = _this$props.OnBoolChanged,
          name = _this$props.name;
      OnBoolChanged(name, value);
      this.setState({
        currentBool: value
      });
    };

    _proto.render = function render() {
      var _this$props2 = this.props,
          displayName = _this$props2.displayName,
          description = _this$props2.description,
          displayStrs = _this$props2.displayStrs,
          items = _this$props2.items;
      var currentBool = this.state.currentBool;
      return /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
        label: /*#__PURE__*/React__default['default'].createElement(antd.Tooltip, {
          title: description
        }, "" + displayName)
      }, /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
        noStyle: true,
        rules: [{
          required: true,
          message: '该属性不能为空'
        }]
      }, /*#__PURE__*/React__default['default'].createElement(antd.Switch, {
        checked: currentBool // eslint-disable-next-line react/jsx-no-bind
        ,
        onChange: this.boolChanged.bind(this)
      })), /*#__PURE__*/React__default['default'].createElement(antd.Tooltip, {
        title: "\u529F\u80FD\u5F00\u5173"
      }, /*#__PURE__*/React__default['default'].createElement("a", {
        href: "##",
        style: {
          margin: '0px 20px'
        }
      }, displayStrs[items.indexOf(currentBool)])));
    };

    return SwitchControl;
  }(React.Component);

  SwitchControl.propTypes = {
    name: PropTypes__default['default'].string,
    displayName: PropTypes__default['default'].string,
    description: PropTypes__default['default'].string,
    bool: PropTypes__default['default'].bool,
    displayStrs: PropTypes__default['default'].array,
    items: PropTypes__default['default'].array,
    OnBoolChanged: PropTypes__default['default'].func
  };

  var css_248z$4 = ".normal-button{border:0;background:transparent;margin-right:10px}.normal-button :hover{color:#3200e9}.normal-button :active{color:rgba(255,0,179,.61)}";
  styleInject(css_248z$4);

  var ListControl = /*#__PURE__*/function (_Component) {
    _inheritsLoose(ListControl, _Component);

    function ListControl(props) {
      var _this;

      _this = _Component.call(this, props) || this;

      _defineProperty(_assertThisInitialized(_this), "Id", Math.trunc(Math.random() * 0x1000000).toString());

      _defineProperty(_assertThisInitialized(_this), "itemsCache", []);

      _defineProperty(_assertThisInitialized(_this), "template", []);

      _defineProperty(_assertThisInitialized(_this), "textChanged", function (idx, index, name, e) {
        var txt = e.target.value;
        _this.itemsCache[idx]["" + name] = txt;
      });

      _defineProperty(_assertThisInitialized(_this), "valueChanged", function (idx, index, name, value) {
        var reg = /^[0-9]+.?[0-9]*/;

        if (reg.test(value)) {
          _this.itemsCache[idx]["" + name] = value;
        }
      });

      _defineProperty(_assertThisInitialized(_this), "selectionChanged", function (idx, index, name, value) {
        _this.itemsCache[idx]["" + name] = value;
      });

      _defineProperty(_assertThisInitialized(_this), "deleteClick", function (idx) {
        if (_this.itemsCache.length > 0) {
          var itemstag = _this.state.itemstag;

          _this.itemsCache.splice(idx, 1);

          _this.setState({
            itemstag: itemstag + 1
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "addClick", function () {
        var itemstag = _this.state.itemstag;
        var items = _this.props.items;

        if (items && items.length > 0) {
          _this.itemsCache.push(JSON.parse(JSON.stringify(items[0])));
        } else {
          var fakeData = {};

          _this.template.forEach(function (temp) {
            fakeData[temp.name] = temp["default"];
          });

          console.log(fakeData);

          _this.itemsCache.push(fakeData);
        }

        _this.setState( // eslint-disable-next-line react/no-access-state-in-setstate
        {
          itemstag: itemstag + 1
        });
      });

      _defineProperty(_assertThisInitialized(_this), "saveClick", function () {
        // eslint-disable-next-line no-unused-expressions
        var _this$props = _this.props,
            name = _this$props.name,
            OnListChanged = _this$props.OnListChanged;
        OnListChanged(name, _this.itemsCache);
      });

      _this.state = {
        itemstag: 0
      };
      _this.template = props.template;
      _this.itemsCache = [].concat(props.items);
      return _this;
    }

    var _proto = ListControl.prototype;

    _proto.renderList = function renderList(properties, idx) {
      var _this2 = this;

      var list = this.template.map(function (item, index) {
        var keyID = Math.trunc(Math.random() * 0x1000000).toString();
        var itemType = PropertyType.TEXT; // if (item.parameters === null || item.parameters.length === 0) {

        if (item.template === null || item.template.length === 0) {
          if (item.values !== null && item.values.length > 0) {
            itemType = PropertyType.SELECTION;

            if (item.type === 5 || item.type === 'bool') {
              itemType = PropertyType.BOOL;
            }
          } else {
            if (item.type === 1 || item.type === 2 || item.type === 'float' || item.type === 'double') {
              itemType = PropertyType.RANGE_DECIMAL;
            }

            if (item.type === 3 || item.type === 4 || item.type === 'int') {
              itemType = PropertyType.RANGE_INTEGER;
            }
          }
        } else {
          itemType = PropertyType.LIST;
        }

        switch (itemType) {
          // eslint-disable-next-line no-lone-blocks
          case PropertyType.TEXT:
            {
              return /*#__PURE__*/React__default['default'].createElement("tr", {
                key: keyID
              }, /*#__PURE__*/React__default['default'].createElement("td", {
                style: {
                  textAlign: 'right'
                }
              }, item.displayName + ":"), /*#__PURE__*/React__default['default'].createElement("td", {
                colSpan: 2,
                style: {
                  padding: 3
                }
              }, /*#__PURE__*/React__default['default'].createElement(antd.Input, {
                defaultValue: properties["" + item.name],
                placeholder: "\u8BF7\u8F93\u5165\u5B57\u7B26\u4E32..." // eslint-disable-next-line react/jsx-no-bind
                ,
                onChange: _this2.textChanged.bind(_this2, idx, index, item.name)
              })));
            }
          // eslint-disable-next-line no-lone-blocks

          case PropertyType.RANGE_DECIMAL:
            {
              return /*#__PURE__*/React__default['default'].createElement("tr", {
                key: keyID
              }, /*#__PURE__*/React__default['default'].createElement("td", {
                style: {
                  textAlign: 'right'
                }
              }, item.displayName + ":"), /*#__PURE__*/React__default['default'].createElement("td", {
                style: {
                  padding: 3
                }
              }, /*#__PURE__*/React__default['default'].createElement(antd.InputNumber, {
                style: {
                  width: '90%'
                },
                min: item.minimum,
                max: item.maximum,
                defaultValue: properties["" + item.name],
                step: 0.01 // eslint-disable-next-line react/jsx-no-bind
                ,
                onChange: _this2.valueChanged.bind(_this2, idx, index, item.name)
              })), /*#__PURE__*/React__default['default'].createElement("td", null, /*#__PURE__*/React__default['default'].createElement(antd.Space, {
                size: "middle"
              }, /*#__PURE__*/React__default['default'].createElement("div", null, "" + (item.Unit !== undefined ? item.Unit : '')), /*#__PURE__*/React__default['default'].createElement("div", {
                style: {
                  color: 'orangered'
                }
              }, "" + (item.minimum && item.maximum ? item.minimum + "~" + item.maximum : '')))));
            }
          // eslint-disable-next-line no-lone-blocks

          case PropertyType.SELECTION:
            {
              return /*#__PURE__*/React__default['default'].createElement("tr", {
                key: keyID
              }, /*#__PURE__*/React__default['default'].createElement("td", {
                style: {
                  textAlign: 'right'
                }
              }, item.displayName + ":"), /*#__PURE__*/React__default['default'].createElement("td", {
                colSpan: 2,
                style: {
                  padding: 3
                }
              }, /*#__PURE__*/React__default['default'].createElement(antd.Select, {
                defaultValue: properties["" + item.name],
                style: {
                  width: '90%'
                } // eslint-disable-next-line react/jsx-no-bind
                ,
                onChange: _this2.selectionChanged.bind(_this2, idx, index, item.name)
              }, item.values.map(function (val, ix) {
                var keyIDOp = Math.trunc(Math.random() * 0x1000000).toString();
                return /*#__PURE__*/React__default['default'].createElement(antd.Select.Option, {
                  key: keyIDOp,
                  value: val
                }, item.displayValues[ix]);
              }))));
            }

          default:
            return null;

          /* break; */
        }
      });
      return list;
    };

    _proto.render = function render() {
      var _this3 = this;

      var displayName = this.props.displayName;
      return /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
        label: displayName + " :"
      }, this.itemsCache.map(function (itm, idx) {
        var keyID = Math.trunc(Math.random() * 0x1000000).toString();
        return /*#__PURE__*/React__default['default'].createElement("table", {
          key: keyID,
          style: {
            border: '1px solid #ccc',
            marginBottom: '5px',
            width: '100%'
          }
        }, /*#__PURE__*/React__default['default'].createElement("thead", null, /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("th", null), /*#__PURE__*/React__default['default'].createElement("th", null), /*#__PURE__*/React__default['default'].createElement("th", null))), /*#__PURE__*/React__default['default'].createElement("tbody", null, /*#__PURE__*/React__default['default'].createElement("tr", {
          key: itm.name
        }, /*#__PURE__*/React__default['default'].createElement("td", {
          colSpan: 2,
          style: {
            color: 'red',
            textAlign: 'center'
          }
        }, displayName + ":" + (idx + 1)), /*#__PURE__*/React__default['default'].createElement("td", {
          style: {
            textAlign: 'right'
          }
        }, /*#__PURE__*/React__default['default'].createElement(antd.Button, {
          style: {
            color: 'red',
            margin: '3px'
          } // eslint-disable-next-line react/jsx-no-bind
          ,
          onClick: _this3.deleteClick.bind(_this3, idx)
        }, "\u5220\u9664"))), _this3.renderList(itm, idx)));
      }), /*#__PURE__*/React__default['default'].createElement(antd.Button, {
        style: {
          margin: '5px',
          color: 'blue'
        } // eslint-disable-next-line react/jsx-no-bind
        ,
        onClick: this.addClick.bind(this)
      }, "\u6DFB\u52A0"), /*#__PURE__*/React__default['default'].createElement(antd.Button, {
        style: {
          margin: '5px'
        } // eslint-disable-next-line react/jsx-no-bind
        ,
        onClick: this.saveClick.bind(this)
      }, "\u4FDD\u5B58"));
    };

    return ListControl;
  }(React.Component);

  ListControl.propTypes = {
    name: PropTypes__default['default'].string,
    displayName: PropTypes__default['default'].string,
    template: PropTypes__default['default'].any,
    items: PropTypes__default['default'].array,
    OnListChanged: PropTypes__default['default'].func
  };

  var Panel = antd.Collapse.Panel;

  var PropertyList = /*#__PURE__*/function (_Component) {
    _inheritsLoose(PropertyList, _Component);

    // temproperties = [];
    function PropertyList(props) {
      var _this;

      _this = _Component.call(this, props) || this;

      _defineProperty(_assertThisInitialized(_this), "index", 0);

      _defineProperty(_assertThisInitialized(_this), "OnSetPropertyList", void 0);

      _defineProperty(_assertThisInitialized(_this), "OnParamsChanged", void 0);

      _defineProperty(_assertThisInitialized(_this), "layout", {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 12
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onPropertyChanged", function (name, value) {
        var properties = _this.state.properties;
        var prop = properties == null ? void 0 : properties.find(function (item) {
          return item.name === name;
        });

        if (prop !== undefined) {
          // if (prop.parameters !== null && prop.parameters.length > 0) {
          if (prop.template !== null && prop.template.length > 0) {
            var old = JSON.parse(JSON.stringify(prop.parameters));
            prop.parameters = value;

            _this.OnParamsChanged(properties, name, old, value);
          } else {
            var _old = prop.value;
            prop.value = value;

            _this.OnParamsChanged(properties, name, _old, value);
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "groupBy", function (array, f) {
        var groups = {};
        array.forEach(function (o) {
          var group = JSON.stringify(f(o));
          groups[group] = groups[group] || [];
          groups[group].push(o);
        });
        return Object.keys(groups).map(function (group) {
          // console.log(JSON.parse(group));
          return {
            name: JSON.parse(group),
            data: groups[group]
          };
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onFinish", function () {});

      var _this$props = _this.props,
          params = _this$props.params,
          OnSetPropertyList = _this$props.OnSetPropertyList,
          OnParamsChanged = _this$props.OnParamsChanged;
      _this.state = {
        properties: params
      }; // this.temproperties = params;

      _this.OnSetPropertyList = OnSetPropertyList;
      _this.OnParamsChanged = OnParamsChanged;
      return _this;
    }

    PropertyList.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      var params = nextProps.params;

      if (JSON.stringify(params) !== JSON.stringify(prevState.properties)) {
        return {
          properties: params
        };
      }

      return null;
    } // #region event
    ;

    var _proto = PropertyList.prototype;

    _proto.onSetPropertyList = function onSetPropertyList() {
      var properties = this.state.properties;
      this.OnSetPropertyList(properties);
    };

    // #endregion
    // #region render
    _proto.renderGroup = function renderGroup() {
      var _this2 = this;

      var properties = this.state.properties;

      if (properties) {
        var groupArr = this.groupBy(properties, function (item) {
          return item.category; // 按照category进行分组
        });
        var group = groupArr.map(function (arr, index) {
          return (
            /*#__PURE__*/
            // eslint-disable-next-line react/no-array-index-key
            React__default['default'].createElement(Panel, {
              header: arr.name,
              key: index + 1
            }, /*#__PURE__*/React__default['default'].createElement(antd.Form, _extends({}, _this2.layout, {
              className: "ant-form-horizontal" // onFinish={this.onFinish}

            }), _this2.renderList(arr.data)))
          );
        });
        return /*#__PURE__*/React__default['default'].createElement(antd.Collapse, {
          defaultActiveKey: ["1", "2"]
        }, group);
      }

      return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null);
    };

    _proto.renderList = function renderList(properties) {
      var _this3 = this;

      var list = properties.map(function (item) {
        var itemType = PropertyType.TEXT; // if (item.parameters === null || item.parameters.length === 0) {

        if (item.template === null || item.template.length === 0) {
          if (item.values !== null && item.values.length > 0) {
            itemType = PropertyType.SELECTION;

            if (item.type === 5 || item.type === "bool") {
              itemType = PropertyType.BOOL;
            }
          } else {
            if (item.type === 1 || item.type === 2 || item.type === "float" || item.type === "double") {
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
          case PropertyType.TEXT:
            {
              return /*#__PURE__*/React__default['default'].createElement(TextControl, {
                key: item.name,
                name: item.name,
                displayName: item.displayName,
                description: item.description,
                text: "" + item.value,
                OnTextChanged: _this3.onPropertyChanged
              });
            }

          case PropertyType.RANGE_INTEGER:
            {
              return /*#__PURE__*/React__default['default'].createElement(RangeControl, {
                key: item.name,
                name: item.name,
                displayName: item.displayName,
                description: item.description,
                value: item.value,
                OnValueChanged: _this3.onPropertyChanged,
                min: item.minimum,
                max: item.maximum,
                unit: item.unit || item.Unit,
                isInteger: true
              });
            }

          case PropertyType.RANGE_DECIMAL:
            {
              return /*#__PURE__*/React__default['default'].createElement(RangeControl, {
                key: item.name,
                name: item.name,
                displayName: item.displayName,
                description: item.description,
                value: item.value,
                OnValueChanged: _this3.onPropertyChanged,
                min: item.minimum,
                max: item.maximum,
                unit: item.unit || item.Unit,
                isInteger: false
              });
            }

          case PropertyType.SELECTION:
            {
              return /*#__PURE__*/React__default['default'].createElement(SelectionControl, {
                key: item.name,
                name: item.name,
                displayName: item.displayName,
                description: item.description,
                items: item.values,
                displayStrs: item.displayValues,
                selectedItem: item.value,
                OnSelectionChanged: _this3.onPropertyChanged
              });
            }

          case PropertyType.BOOL:
            {
              return /*#__PURE__*/React__default['default'].createElement(SwitchControl, {
                key: item.name,
                name: item.name,
                displayName: item.displayName,
                description: item.description,
                items: item.values,
                displayStrs: item.displayValues,
                bool: item.value,
                OnBoolChanged: _this3.onPropertyChanged
              });
            }

          case PropertyType.LIST:
            {
              return /*#__PURE__*/React__default['default'].createElement(ListControl, {
                key: item.name,
                name: item.name,
                displayName: item.displayName,
                template: item.template,
                items: item.parameters,
                OnListChanged: _this3.onPropertyChanged
              });
            }

          default:
            return null;

          /* break; */
        }
      });
      return list;
    };

    _proto.render = function render() {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        style: {
          width: "100%",
          height: "100%"
        }
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        style: {
          padding: 2,
          width: "100%",
          height: "100%",
          overflow: "auto"
        }
      }, this.renderGroup()));
    } // #endregion
    ;

    return PropertyList;
  }(React.Component);

  PropertyList.defaultProps = {
    params: null,
    OnSetPropertyList: function OnSetPropertyList() {}
  };
  PropertyList.propTypes = {
    params: PropTypes__default['default'].array,
    OnSetPropertyList: PropTypes__default['default'].func,
    OnParamsChanged: PropTypes__default['default'].func.isRequired
  };

  exports.AnotherButton = AnotherButton;
  exports.PropertyList = PropertyList;
  exports.default = NewButton;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
