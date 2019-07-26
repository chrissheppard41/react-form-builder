import Text from './elements/Text';
import Hr from './elements/Hr';
import ClassificationInputs from '../constants/ClassificationInputs';
import {ComponentListType} from '../types/ComponentListType';
import TextInput from '../FormView/container/Text/TextInput';
import TextPanel from '../FormView/container/Text/TextPanels';
import HrDrag from '../FormView/container/generalElements/HrDrag';
import H3Panel from '../FormView/container/Titles/H3Panels';
import H3 from './elements/H3';
import H3Drag from '../FormView/container/Titles/H3Drag';

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
    },
    [ClassificationInputs.HR]: {
        Input: Hr,
        Draggable: HrDrag,
        Panel: null
    },
    [ClassificationInputs.H3]: {
        Input: H3,
        Draggable: H3Drag,
        Panel: H3Panel
    }
};

export default Components;
