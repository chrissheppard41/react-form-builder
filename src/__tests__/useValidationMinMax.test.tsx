import init from "jooks";
import useValidationMinMax from "../js/hooks/useValidationMinMax";

const addValidation = jest.fn();
const removeValidation = jest.fn();
const numberCheck = (value: string, messageCompare: string, min: number, max: number, enabledCompare: boolean) => {
    const jooks = init(() => useValidationMinMax({
        number: {
            enabled: true,
            message: 'lorem ipsum'
        }
    }, value, 'id', min, max, addValidation, removeValidation));
    const {numberMessage, number} = jooks.run();

    expect(numberMessage).toEqual(messageCompare);
    expect(number).toEqual(enabledCompare);
};

describe('useValidationEmail hook tests', () => {
    it('Should not recognise what this validation is and no nothing', () => {
        const jooks = init(() => useValidationMinMax({}, '', '', 0, 0, addValidation, removeValidation));
        const {numberMessage, number} = jooks.run();

        expect(numberMessage).toEqual('');
        expect(number).toEqual(false);
    });

    it('Should check the value myValue against the min of 0 and the max of 10 and pass', () => {
        numberCheck('myValue', '', 0, 10, true);
    });
    it('Should test the min number only and pass', () => {
        numberCheck('lorem ipsum', '', 10, null, true);
    });
    it('Should test the max number only and pass', () => {
        numberCheck('lorem ipsum', '', null, 20, true);
    });
    it('Should check the value of nothing against the min of 0 and the max of 10 and error', () => {
        numberCheck('', 'lorem ipsum (min input size of 5)', 5, 10, true);
    });

    it('Should check the value of nothing against the min of 0 and error', () => {
        numberCheck('lore', 'lorem ipsum (min input size of 5)', 5, null, true);
    });
    it('Should check the value of nothing against the max of 4 and error', () => {
        numberCheck('lorem', 'lorem ipsum (max input size of 4)', null, 4, true);
    });
    it('Should check the value of nothing against a min and max not set and pass', () => {
        numberCheck('lorem', '', null, null, true);
    });


    it('Should take an input of number 7 and pass', () => {
        numberCheck('7', '', 5, 10, true);
    });
    it('Should take an input of number 4 and fail', () => {
        numberCheck('4', 'lorem ipsum (min number of 5)', 5, 10, true);
    });
    it('Should take an input of number 11 and fail', () => {
        numberCheck('11', 'lorem ipsum (max number of 10)', 5, 10, true);
    });
    it('Should take an input of number 10 and pass', () => {
        numberCheck('10', '', 5, 10, true);
    });
});