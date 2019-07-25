import init from "jooks";
import useValidationEmail from "../js/hooks/useValidationEmail";

const addValidation = jest.fn();
const removeValidation = jest.fn();
const emailCheck = (email: string, messageCompare: string, enabledCompare: boolean) => {
    const jooks = init(() => useValidationEmail({
        email: {
            enabled: true,
            message: 'lorem ipsum'
        }
    }, email, 'id', addValidation, removeValidation));
    const {message, enabled} = jooks.run();

    expect(message).toEqual(messageCompare);
    expect(enabled).toEqual(enabledCompare);
};

describe('useValidationEmail hook tests', () => {
    it('Should not recognise what this validation is and no nothing', () => {
        const jooks = init(() => useValidationEmail({}, '', '', addValidation, removeValidation));
        const {message, enabled} = jooks.run();

        expect(message).toEqual('');
        expect(enabled).toEqual(false);
    });

    it('Should be fine with a valid email :: test@test.com', () => {
        emailCheck('test@test.com', '', true);
    });
    it('Should be fine with a valid email :: test+test@test.com', () => {
        emailCheck('test+test@test.com', '', true);
    });
    it('Should be fine with a valid email :: test@test.co.uk', () => {
        emailCheck('test@test.co.uk', '', true);
    });
    it('Should not be fine with a invalid email :: test', () => {
        emailCheck('test', 'lorem ipsum', true);
    });
});