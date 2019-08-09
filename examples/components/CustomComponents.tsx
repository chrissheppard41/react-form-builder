import ToggleInput from './ToggleDrag';
import Toggle from './Toggle';
import TogglePanel from './TogglePanel';
import {ComponentListType} from "react-form-builder-cs";

const Components: ComponentListType = {
  ["Toggle"]: {
    Draggable: ToggleInput,
    Input: Toggle,
    Panel: TogglePanel
  }
};
export default Components;
