import init from 'Jooks';
import useAddToArray from '../js/hooks/useAddToArray';

describe('Reducer tests', () => {
    const jooks = init(() => useAddToArray([]));

  it('Should return an empty array', () => {
    const {array} = jooks.run();
    expect(array).toEqual([]);
  });

  it('Should add and remove from array', () => {
    let {array, setValue, deleteValue} = jooks.run();
    expect(array).toEqual([]);

    setValue('test');

    ({array, setValue, deleteValue} = jooks.run());

    expect(array.length).toEqual(1);
    expect(array).toEqual([{key: "test", value: "test"}]);

    setValue('test2');

    ({array, setValue, deleteValue} = jooks.run());

    expect(array.length).toEqual(2);
    expect(array).toEqual([{key: "test", value: "test"}, {key: "test2", value: "test2"}]);

    deleteValue('test');
    ({array, setValue, deleteValue} = jooks.run());

    expect(array.length).toEqual(1);
    expect(array).toEqual([{key: "test2", value: "test2"}]);
  });

  it('Should not modify the array in any way with a value not in array', () => {
    let {array, setValue, deleteValue} = jooks.run();
    expect(array).toEqual([]);

    setValue('test');
    ({array, setValue, deleteValue} = jooks.run());
    expect(array.length).toEqual(1);
    expect(array).toEqual([{key: "test", value: "test"}]);

    deleteValue('random');
    ({array, setValue, deleteValue} = jooks.run());
    expect(array.length).toEqual(1);
    expect(array).toEqual([{key: "test", value: "test"}]);
  });

  it('Should when provided a comma seperated value should have a split in the array', () => {
    let {array, setValue, deleteValue} = jooks.run();
    expect(array).toEqual([]);

    setValue('testKey, testValue');
    ({array, setValue, deleteValue} = jooks.run());
    expect(array.length).toEqual(1);
    expect(array).toEqual([{key: "testKey", value: "testValue"}]);
  });

  it('Should when provided a comma seperated value with no space should have a split in the array', () => {
    let {array, setValue, deleteValue} = jooks.run();
    expect(array).toEqual([]);

    setValue('testKey,testValue');
    ({array, setValue, deleteValue} = jooks.run());
    expect(array.length).toEqual(1);
    expect(array).toEqual([{key: "testKey", value: "testValue"}]);
  });

  it('Should when provided a comma seperated value with multiple spaces should have a split in the array', () => {
    let {array, setValue, deleteValue} = jooks.run();
    expect(array).toEqual([]);

    setValue('testKey,    test Value');
    ({array, setValue, deleteValue} = jooks.run());
    expect(array.length).toEqual(1);
    expect(array).toEqual([{key: "testKey", value: "test Value"}]);
  });

  it('Should when provided a comma seperated value with multiple spaces should have a split in the array', () => {
    let {array, setValue, deleteValue} = jooks.run();
    expect(array).toEqual([]);

    setValue('test Key');
    ({array, setValue, deleteValue} = jooks.run());
    expect(array.length).toEqual(1);
    expect(array).toEqual([{key: "testKey", value: "test Key"}]);
  });

  it('Should when provided a space in the value, key should be modified accordingly', () => {
    let {array, setValue, deleteValue} = jooks.run();
    expect(array).toEqual([]);

    setValue('test Key');
    ({array, setValue, deleteValue} = jooks.run());
    expect(array.length).toEqual(1);
    expect(array).toEqual([{key: "testKey", value: "test Key"}]);
  });

  it('Should when provided a other characters in the value, key should be modified accordingly', () => {
    let {array, setValue, deleteValue} = jooks.run();
    expect(array).toEqual([]);

    setValue('test *&^*%$£@Key');
    ({array, setValue, deleteValue} = jooks.run());
    expect(array.length).toEqual(1);
    expect(array).toEqual([{key: "testKey", value: "test *&^*%$£@Key"}]);
  });

  it('Should when provided with a comma seperated value other characters in the value, key should be modified accordingly', () => {
    let {array, setValue, deleteValue} = jooks.run();
    expect(array).toEqual([]);

    setValue('test *&^*%$£@Key, testValue');
    ({array, setValue, deleteValue} = jooks.run());
    expect(array.length).toEqual(1);
    expect(array).toEqual([{key: "testKey", value: "testValue"}]);
  });

  it('Should not add an empty value', () => {
    let {array, setValue, deleteValue} = jooks.run();
    expect(array).toEqual([]);

    setValue('');
    ({array, setValue, deleteValue} = jooks.run());
    expect(array.length).toEqual(0);
    expect(array).toEqual([]);
  });
});
