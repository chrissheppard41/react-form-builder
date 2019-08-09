export interface IndiviualType {
  [key: string]: string;
}

const KeyMappings = (values: string[]): IndiviualType => {
  var value: IndiviualType = {};

  for (let key in values) {
    value[values[key]] = values[key];
  }

  return value;
};

export default KeyMappings;
