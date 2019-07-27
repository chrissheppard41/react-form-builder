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
import Radio from './elements/Radio';
import RadioInput from '../FormView/container/Radio/RadioInput';
import RadioPanel from '../FormView/container/Radio/RadioPanels';

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
    },
    [ClassificationInputs.SELECT]: {
        Input: Select,
        Draggable: SelectDrag,
        Panel: SelectPanel
    },
    [ClassificationInputs.RADIO]: {
        Input: Radio,
        Draggable: RadioInput,
        Panel: RadioPanel
    }
};

export default Components;
