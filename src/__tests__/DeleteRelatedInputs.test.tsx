import DeleteRelatedInputs from '../js/utilities/DeleteRelatedInputs';

let other = {
    panelName: '',
    enableChildren: false,
    type: '',
    label: '',
    inputName: '',
    inputValue: '',
    inputClassName: '',
    validation: {}
};
let inputs = {
    'test1': {id: 'test1', connected: '', ...other},
    'test2': {id: 'test2', connected: '', ...other},
    'test3': {id: 'test3', connected: 'test2', ...other},
    'test4': {id: 'test4', connected: 'test3', ...other},
    'test5': {id: 'test5', connected: 'test2', ...other},
    'test6': {id: 'test6', connected: 'test1', ...other},
    'test7': {id: 'test7', connected: '', ...other},
};

describe('DeleteRelatedInputs unit tests', () => {
    it('Should delete all the references to test2 and it\'s children', () => {
        DeleteRelatedInputs(inputs, 'test2');
        expect(inputs).toEqual({
            "test1": inputs.test1,
            "test6": inputs.test6,
            "test7": inputs.test7,
        });
    });

    it('Should delete all the references to test1 and it\'s children', () => {
        DeleteRelatedInputs(inputs, 'test1');
        expect(inputs).toEqual({
            "test2": inputs.test2,
            "test3": inputs.test3,
            "test4": inputs.test4,
            "test5": inputs.test5,
            "test7": inputs.test7,
        });
    });

    it('Should delete all the references to test3 and it\'s children', () => {
        DeleteRelatedInputs(inputs, 'test3');
        expect(inputs).toEqual({
            "test1": inputs.test1,
            "test2": inputs.test2,
            "test5": inputs.test5,
            "test6": inputs.test6,
            "test7": inputs.test7,
        });
    });

    it('Should delete all the references to test7 and it\'s children', () => {
        DeleteRelatedInputs(inputs, 'test7');
        expect(inputs).toEqual({
            "test1": inputs.test1,
            "test2": inputs.test2,
            "test3": inputs.test3,
            "test4": inputs.test4,
            "test5": inputs.test5,
            "test6": inputs.test6,
        });
    });

    it('Shouldn\'t delete anything', () => {
        DeleteRelatedInputs(inputs, 'test8');
        expect(inputs).toEqual({
            "test1": inputs.test1,
            "test2": inputs.test2,
            "test3": inputs.test3,
            "test4": inputs.test4,
            "test5": inputs.test5,
            "test6": inputs.test6,
            "test7": inputs.test7,
        });
    });
});