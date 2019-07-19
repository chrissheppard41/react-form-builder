import Text from './elements/Text';
import ClassificationInputs from '../constants/ClassificationInputs';
import {ComponentListType} from '../types/ComponentListType';
import TextInput from '../FormView/container/Text/TextInput';
import TextPanel from '../FormView/container/Text/TextPanels';

const Components: ComponentListType = {
    [ClassificationInputs.TEXT]: {
        Input: Text,
        Draggable: TextInput,
        Panel: TextPanel
    },
    [ClassificationInputs.EMAIL]: {
        Input: Text,
        Draggable: TextInput,
        Panel: TextPanel
    },
    [ClassificationInputs.NUMBER]: {
        Input: Text,
        Draggable: TextInput,
        Panel: TextPanel
    }
};

export default Components;
