import init from "jooks";
import useMultiSelect from "../js/hooks/useMultiSelect";
import ClassificationInputs from '../js/constants/ClassificationInputs';

describe('useMultiSelect hook tests for checkbox', () => {
    const jooks = init(() => useMultiSelect('', ClassificationInputs.CHECKBOX));

    it('Should have the default state for this which is an empty array', () => {
        const {array} = jooks.run();

        expect(array).toEqual([""]);
    });
    it('Should check if the value exists and if so add it', () => {
        let {array, check} = jooks.run();

        check('test');
        ({array} = jooks.run());
        expect(array).toEqual(["", "test"]);
    });
    it('Should remove item for checkbox if it exists', () => {
        let {array, check} = jooks.run();

        check('test');
        ({array, check} = jooks.run());
        expect(array).toEqual(["", "test"]);

        check('test');
        ({array} = jooks.run());
        expect(array).toEqual([""]);
    });
    it('Should add multiples then remove one', () => {
        let {array, check} = jooks.run();

        check('test');
        ({array, check} = jooks.run());
        expect(array).toEqual(["", "test"]);

        check('test2');
        ({array, check} = jooks.run());
        expect(array).toEqual(["", "test", "test2"]);

        check('test3');
        ({array, check} = jooks.run());
        expect(array).toEqual(["", "test", "test2", "test3"]);

        check('test2');
        ({array, check} = jooks.run());
        expect(array).toEqual(["", "test", "test3"]);
    });
});