import ConiseDraggableInputs from '../js/utilities/ConciseDraggableInputs';
//import console = require('console');

describe('ConiseDraggableInputs unit tests', () => {
    it('Should return the name of the component', () => {
        const test = ConiseDraggableInputs({
            TestComponent: {
                Input: {
                    name: 'test',
                },
                Draggable: {},
                Panel: {}
            }
        });

        expect(test).toEqual(['TestComponent']);
    });

    it('Should return 1 component with the same name', () => {
        const test = ConiseDraggableInputs({
            TestComponent: {
                Input: {
                    name: 'test'
                },
                Draggable: {},
                Panel: {}
            },
            TestComponent2: {
                Input: {
                    name: 'test'
                },
                Draggable: {},
                Panel: {}
            }
        });

        expect(test).toEqual(['TestComponent']);
    });

    it('Should return 2 components as part of the list', () => {
        const test = ConiseDraggableInputs({
            TestComponent: {
                Input: {
                    name: 'test'
                },
                Draggable: {},
                Panel: {}
            },
            TestComponent2: {
                Input: {
                    name: 'test2'
                },
                Draggable: {},
                Panel: {}
            }
        });

        expect(test).toEqual(['TestComponent', 'TestComponent2']);
    });
});