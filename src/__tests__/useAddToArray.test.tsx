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
    expect(array).toEqual(['test']);

    setValue('test2');

    ({array, setValue, deleteValue} = jooks.run());

    expect(array.length).toEqual(2);
    expect(array).toEqual(['test', 'test2']);

    deleteValue('test');
    ({array, setValue, deleteValue} = jooks.run());

    expect(array.length).toEqual(1);
    expect(array).toEqual(['test2']);
  });

  it('Should not modify the array in any way with a value not in array', () => {
    let {array, setValue, deleteValue} = jooks.run();
    expect(array).toEqual([]);

    setValue('test');
    ({array, setValue, deleteValue} = jooks.run());
    expect(array.length).toEqual(1);
    expect(array).toEqual(['test']);

    deleteValue('random');
    ({array, setValue, deleteValue} = jooks.run());
    expect(array.length).toEqual(1);
    expect(array).toEqual(['test']);
  });
});
