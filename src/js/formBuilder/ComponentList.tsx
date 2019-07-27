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
import SelectPanel from '../FormView/container/Select/SelectPanels';
import Select from './elements/Select';
import SelectDrag from '../FormView/container/Select/SelectInput';
import Checked from './elements/Checked';
import CheckedInput from '../FormView/container/Checked/CheckedInput';
import CheckedPanel from '../FormView/container/Checked/CheckedPanel';

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
    [ClassificationInputs.FILE]: {
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
    },
    [ClassificationInputs.SELECT]: {
        Input: Select,
        Draggable: SelectDrag,
        Panel: SelectPanel
    },
    [ClassificationInputs.RADIO]: {
        Input: Checked,
        Draggable: CheckedInput,
        Panel: CheckedPanel
    },
    [ClassificationInputs.CHECKBOX]: {
        Input: Checked,
        Draggable: CheckedInput,
        Panel: CheckedPanel
    }
};

export default Components;
