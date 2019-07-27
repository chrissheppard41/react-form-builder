import UUIDGeneration from '../js/utilities/UUIDGeneration';

describe('ListEmpty tests', () => {
    it('Should generate the correct format', () => {
        expect(UUIDGeneration().length).toEqual(36);
    });
});
