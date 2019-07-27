import init from "jooks";
import useMultiSelect from "../js/hooks/useMultiSelect";

describe('useMultiSelect hook tests for multiples (selects)', () => {
    const jooks = init(() => useMultiSelect('', ''));

    it('Should have the default state for this which is an empty array', () => {
        const {array} = jooks.run();

        expect(array).toEqual([""]);
    });

    it('Should add one to the list', () => {
        let {array, checkMultiple} = jooks.run();

        expect(array).toEqual([""]);
        checkMultiple([{value: 'test', selected: true}]);

        ({array} = jooks.run());
        expect(array).toEqual(["test"]);
    });

    it('Should should add one as it\'s not selected', () => {
        let {array, checkMultiple} = jooks.run();

        expect(array).toEqual([""]);
        checkMultiple([{value: 'test', selected: false}]);

        ({array} = jooks.run());
        expect(array).toEqual([]);
    });

    it('Should should add one as it\'s not selected', () => {
        let {array, checkMultiple} = jooks.run();

        expect(array).toEqual([""]);
        checkMultiple([
            {value: 'test', selected: true},
            {value: 'test2', selected: false},
            {value: 'test3', selected: true},
            {value: 'test4', selected: false}
        ]);

        ({array} = jooks.run());
        expect(array).toEqual(['test', 'test3']);
    });

    it('Should replace the list', () => {
        let {array, checkMultiple} = jooks.run();

        expect(array).toEqual([""]);
        checkMultiple([
            {value: 'test', selected: true},
            {value: 'test2', selected: false},
            {value: 'test3', selected: true},
            {value: 'test4', selected: false}
        ]);

        ({array, checkMultiple} = jooks.run());
        expect(array).toEqual(['test', 'test3']);

        checkMultiple([
            {value: 'test', selected: false},
            {value: 'test2', selected: true},
            {value: 'test3', selected: false},
            {value: 'test4', selected: true},
            {value: 'test5', selected: true}
        ]);

        ({array, checkMultiple} = jooks.run());
        expect(array).toEqual(['test2', 'test4', 'test5']);
    });
});