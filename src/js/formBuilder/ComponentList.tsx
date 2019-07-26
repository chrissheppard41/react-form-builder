import Text from './elements/Text';
import Hr from './elements/Hr';
import ClassificationInputs from '../constants/ClassificationInputs';
import {ComponentListType} from '../types/ComponentListType';
import TextInput from '../FormView/container/Text/TextInput';
import TextPanel from '../FormView/container/Text/TextPanels';
import HrDrag from '../FormView/container/generalElements/HrDrag';
import TitlePanel from '../FormView/container/Titles/TitlePanels';
import Title from './elements/Title';
import TitleDrag from '../FormView/container/Titles/TitleDrag';

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
    [ClassificationInputs.TITLE]: {
        Input: Title,
        Draggable: TitleDrag,
        Panel: TitlePanel
    }
};

export default Components;
