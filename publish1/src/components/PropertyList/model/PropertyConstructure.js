export default class PropertyConstructure {
  name = '';

  feature = 0;

  displayName = '';

  description = '';

  category = '';

  type = 0;

  default = {};

  value = {};

  minimum = {};

  maximum = {};

  values = [];

  displayValues = [];

  browsable = true;

  selectOnly = false;

  readonly = false;

  parameters = [];

  order = -1;

  constructor(name, displayName, category, order, readonly = false) {
    this.name = name;
    this.displayName = displayName;
    this.category = category;
    this.order = order;
    this.readonly = readonly;
  }

  setText(value) {
    this.type = 0;
    this.value = value;
    return this;
  }

  setRange(value, min, max, isInteger = false) {
    this.type = isInteger ? 3 : 1;
    this.value = value;
    this.minimum = min;
    this.maximum = max;
    return this;
  }

  setSelection(value, strs, vals) {
    this.type = 3;
    this.value = value;
    this.displayValues = strs;
    this.values = vals;
    return this;
  }

  setBoolean(value, boolStrs, boolVals) {
    this.type = 5;
    this.value = value;
    this.displayValues = boolStrs;
    this.values = boolVals;
    return this;
  }

  setChildren(children) {
    this.type = 0;
    this.parameters = children;
    return this;
  }
}
