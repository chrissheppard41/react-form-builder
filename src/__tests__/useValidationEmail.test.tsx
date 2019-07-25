import init from "jooks";
import useValidationEmail from "../js/hooks/useValidationEmail";

const addValidation = jest.fn();
const removeValidation = jest.fn();
const emailCheck = (emailRule: string, messageCompare: string, enabledCompare: boolean) => {
    const jooks = init(() => useValidationEmail({
        email: {
            enabled: true,
            message: 'lorem ipsum'
        }
    }, emailRule, 'id', addValidation, removeValidation));
    const {emailMessage, email} = jooks.run();

    expect(emailMessage).toEqual(messageCompare);
    expect(email).toEqual(enabledCompare);
};

describe('useValidationEmail hook tests', () => {
    it('Should not recognise what this validation is and no nothing', () => {
        const jooks = init(() => useValidationEmail({}, '', '', addValidation, removeValidation));
        const {emailMessage, email} = jooks.run();

        expect(emailMessage).toEqual('');
        expect(email).toEqual(false);
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