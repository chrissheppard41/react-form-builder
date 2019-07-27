import OptionBuild, {formatSingleOptions, optionsList} from '../js/utilities/OptionBuild';

describe('OptionBuild tests', () => {
    it('Should format an option with a key only', () => {
        const options = OptionBuild('test');
        expect(options).toEqual({"key": "test", "value": "test"});
    });
    it('Should format an option with a key and value', () => {
        const options = OptionBuild('test', 'test2');
        expect(options).toEqual({"key": "test", "value": "test2"});
    });
    it('Should strip special characters out, alphanumeric', () => {
        const test = 'test!@£$%^&*()_+{}:"|<>?/.,\;][=-]';
        const options = OptionBuild(test);
        expect(options).toEqual({"key": "test_", "value": test});
    });
    it('Should strip special characters out, alphanumeric, with value', () => {
        const test = 'test!@£$%^&*()_+{}:"|<>?/.,\;][=-]';
        const options = OptionBuild(test, test);
        expect(options).toEqual({"key": "test_", "value": test});
    });
    it('Should take an array of single values and format it', () => {
        const options = formatSingleOptions(["test1", "test2"]);
        expect(options).toEqual([{"key": "test1", "value": "test1"}, {"key": "test2", "value": "test2"}]);
    });
    it('Should take handle an array input for 2 source', () => {
        const options = optionsList(["test1", "test2"]);
        expect(options).toEqual([{"key": "test1", "value": "test1"}, {"key": "test2", "value": "test2"}]);
    });
    it('Should take handle an json parse input for 2 source', () => {
        const options = optionsList('[{"key": "test3", "value": "test3"}, {"key": "test4", "value": "test4"}]');
        expect(options).toEqual([{"key": "test3", "value": "test3"}, {"key": "test4", "value": "test4"}]);
    });
});
