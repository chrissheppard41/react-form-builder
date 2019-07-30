import Text from "./elements/Text";
import Hr from "./elements/Hr";
import ClassificationInputs from "../constants/ClassificationInputs";
import { ComponentListType } from "../types/ComponentListType";
import TextInput from "../FormView/container/Text/TextInput";
import TextPanel from "../FormView/container/Text/TextPanels";
import HrDrag from "../FormView/container/generalElements/HrDrag";
import TitlePanel from "../FormView/container/Titles/TitlePanels";
import Title from "./elements/Title";
import TitleDrag from "../FormView/container/Titles/TitleDrag";
import SelectPanel from "../FormView/container/Select/SelectPanels";
import Select from "./elements/Select";
import SelectDrag from "../FormView/container/Select/SelectInput";
import Checked from "./elements/Checked";
import CheckedInput from "../FormView/container/Checked/CheckedInput";
import CheckedPanel from "../FormView/container/Checked/CheckedPanel";
import Textarea from "./elements/Textarea";
import TextareaInput from "../FormView/container/Textarea/TextareaInput";
import TextareaPanel from "../FormView/container/Textarea/TextareaPanels";

const Components: ComponentListType = {
  [ClassificationInputs.TEXT]: {
    Draggable: TextInput,
    Input: Text,
    Panel: TextPanel
  },
  [ClassificationInputs.EMAIL]: {
    Draggable: TextInput,
    Input: Text,
    Panel: TextPanel
  },
  [ClassificationInputs.NUMBER]: {
    Draggable: TextInput,
    Input: Text,
    Panel: TextPanel
  },
  [ClassificationInputs.FILE]: {
    Draggable: TextInput,
    Input: Text,
    Panel: TextPanel
  },
  [ClassificationInputs.HR]: {
    Draggable: HrDrag,
    Input: Hr,
    Panel: null
  },
  [ClassificationInputs.TITLE]: {
    Draggable: TitleDrag,
    Input: Title,
    Panel: TitlePanel
  },
  [ClassificationInputs.SELECT]: {
    Draggable: SelectDrag,
    Input: Select,
    Panel: SelectPanel
  },
  [ClassificationInputs.RADIO]: {
    Draggable: CheckedInput,
    Input: Checked,
    Panel: CheckedPanel
  },
  [ClassificationInputs.CHECKBOX]: {
    Draggable: CheckedInput,
    Input: Checked,
    Panel: CheckedPanel
  },
  [ClassificationInputs.TEXTAREA]: {
    Draggable: TextareaInput,
    Input: Textarea,
    Panel: TextareaPanel
  }
};

export default Components;
