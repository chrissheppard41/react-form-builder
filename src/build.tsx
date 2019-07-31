import FormBuilder from "./js/FormBuilder";

// Elements
// @ts-ignore
import Checked from "./js/formBuilder/elements/Checked";
// @ts-ignore
import Hr from "./js/formBuilder/elements/Hr";
// @ts-ignore
import Select from "./js/formBuilder/elements/Select";
// @ts-ignore
import Text from "./js/formBuilder/elements/Text";
// @ts-ignore
import Textarea from "./js/formBuilder/elements/Textarea";
// @ts-ignore
import Title from "./js/formBuilder/elements/Title";

// Types
// @ts-ignore
import {
  // @ts-ignore
  ComponentNameType,
  // @ts-ignore
  ComponentType,
  // @ts-ignore
  ComponentListType
} from "./js/types/ComponentListType";
// @ts-ignore
import { formSubmitType } from "./js/types/formSubmitType";
// @ts-ignore
import {
  // @ts-ignore
  validationRule,
  // @ts-ignore
  inputType,
  // @ts-ignore
  inputTypes,
  // @ts-ignore
  selectType,
  // @ts-ignore
  radioType,
  // @ts-ignore
  textareaType
} from "./js/types/inputType";
// @ts-ignore
import Options from "./js/types/Options";
// @ts-ignore
import { panelData } from "./js/types/PanelDataType";
// @ts-ignore
import { ValidationIssues, ValidationType } from "./js/types/validationType";

// Context
// @ts-ignore
import useActions from "./js/context/useActions";

// Drag, panels etc
// @ts-ignore
import Inputs from "./js/FormView/Inputs";
// @ts-ignore
import Panel from "./js/FormView/Panel";
// @ts-ignore
import Drag from "./js/FormView/container/Drag";

// Validations
// @ts-ignore
import Validation from "./js/FormView/container/validation/Validation";
// @ts-ignore
import AtLeast from "./js/FormView/container/validation/rules/AtLeast";
// @ts-ignore
import Email from "./js/FormView/container/validation/rules/Email";
// @ts-ignore
import Number from "./js/FormView/container/validation/rules/Number";
// @ts-ignore
import Required from "./js/FormView/container/validation/rules/Required";

// Constants
// @ts-ignore
import Actions from "./js/constants/Actions";
// @ts-ignore
import ClassificationInputs from "./js/constants/ClassificationInputs";
// @ts-ignore
import ClassificationPanel from "./js/constants/ClassificationPanel";
// @ts-ignore
import DragTypes from "./js/constants/DragTypes";
// @ts-ignore
import ModalNames from "./js/constants/ModalNames";
// @ts-ignore
import TitlesTypes from "./js/constants/TitlesTypes";

// Helpers
// @ts-ignore
import UUIDGeneration from "./js/utilities/UUIDGeneration";
// @ts-ignore
import ConciseDraggableInputs from "./js/utilities/ConciseDraggableInputs";
// @ts-ignore
import DeleteRelatedInputs from "./js/utilities/DeleteRelatedInputs";
// @ts-ignore
import KeyMappings from "./js/utilities/KeyMappings";
// @ts-ignore
import ListEmpty from "./js/utilities/ListEmpty";
// @ts-ignore
import OptionBuild, {
  // @ts-ignore
  formatSingleOptions,
  // @ts-ignore
  optionsList
} from "./js/utilities/OptionBuild";
// @ts-ignore
import RelatedInputs from "./js/utilities/RelatedInputs";

// Hooks
// @ts-ignore
import useValidationRequire from "./js/hooks/useValidationRequire";
// @ts-ignore
import useAddToArray from "./js/hooks/useAddToArray";
// @ts-ignore
import useMultiSelect from "./js/hooks/useMultiSelect";
// @ts-ignore
import useValidationAtLeast from "./js/hooks/useValidationAtLeast";
// @ts-ignore
import useValidationEmail from "./js/hooks/useValidationEmail";
// @ts-ignore
import useValidationMinMax from "./js/hooks/useValidationMinMax";
// @ts-ignore
import useValueSet from "./js/hooks/useValueSet";

// Modals
// @ts-ignore
import DeleteModal from "./js/FormView/modals/DeleteModal";
// @ts-ignore
import Modal from "./js/FormView/modals/Modal";

// Styles
import Button from "./js/formBuilder/styles/button";
import Div from "./js/formBuilder/styles/div";
import Input from "./js/formBuilder/styles/input";
import Label from "./js/formBuilder/styles/label";
import Selects from "./js/formBuilder/styles/select";
import Textareas from "./js/formBuilder/styles/textarea";

// Elements
// @ts-ignore
import Checked from './js/formBuilder/elements/Checked';
// @ts-ignore
import Hr from './js/formBuilder/elements/Hr';
// @ts-ignore
import Select from './js/formBuilder/elements/Select';
// @ts-ignore
import Text from './js/formBuilder/elements/Text';
// @ts-ignore
import Textarea from './js/formBuilder/elements/Textarea';
// @ts-ignore
import Title from './js/formBuilder/elements/Title';

// Types
// @ts-ignore
import {ComponentNameType, ComponentType, ComponentListType} from './js/types/ComponentListType';
// @ts-ignore
import {formSubmitType} from './js/types/formSubmitType';
// @ts-ignore
import {validationRule, inputType, inputTypes, selectType, radioType, textareaType} from './js/types/inputType';
// @ts-ignore
import Options from './js/types/Options';
// @ts-ignore
import {panelData} from './js/types/PanelDataType';
// @ts-ignore
import {ValidationIssues, ValidationType} from './js/types/validationType';

// Context
// @ts-ignore
import useActions from './js/context/useActions';

// Drag, panels etc
// @ts-ignore
import Inputs from './js/FormView/Inputs';
// @ts-ignore
import Panel from './js/FormView/Panel';
// @ts-ignore
import Drag from './js/FormView/container/Drag';

// Validations
// @ts-ignore
import Validation from './js/FormView/container/validation/Validation';
// @ts-ignore
import AtLeast from './js/FormView/container/validation/rules/AtLeast';
// @ts-ignore
import Email from './js/FormView/container/validation/rules/Email';
// @ts-ignore
import Number from './js/FormView/container/validation/rules/Number';
// @ts-ignore
import Required from './js/FormView/container/validation/rules/Required';

// Constants
// @ts-ignore
import Actions from './js/constants/Actions';
// @ts-ignore
import ClassificationInputs from './js/constants/ClassificationInputs';
// @ts-ignore
import ClassificationPanel from './js/constants/ClassificationPanel';
// @ts-ignore
import DragTypes from './js/constants/DragTypes';
// @ts-ignore
import ModalNames from './js/constants/ModalNames';
// @ts-ignore
import TitlesTypes from './js/constants/TitlesTypes';

// Helpers
// @ts-ignore
import UUIDGeneration from './js/utilities/UUIDGeneration';
// @ts-ignore
import ConciseDraggableInputs from './js/utilities/ConciseDraggableInputs';
// @ts-ignore
import DeleteRelatedInputs from './js/utilities/DeleteRelatedInputs';
// @ts-ignore
import KeyMappings from './js/utilities/KeyMappings';
// @ts-ignore
import ListEmpty from './js/utilities/ListEmpty';
// @ts-ignore
import OptionBuild, {formatSingleOptions, optionsList} from './js/utilities/OptionBuild';
// @ts-ignore
import RelatedInputs from './js/utilities/RelatedInputs';

// Hooks
// @ts-ignore
import useValidationRequire from './js/hooks/useValidationRequire';
// @ts-ignore
import useAddToArray from './js/hooks/useAddToArray';
// @ts-ignore
import useMultiSelect from './js/hooks/useMultiSelect';
// @ts-ignore
import useValidationAtLeast from './js/hooks/useValidationAtLeast';
// @ts-ignore
import useValidationEmail from './js/hooks/useValidationEmail';
// @ts-ignore
import useValidationMinMax from './js/hooks/useValidationMinMax';
// @ts-ignore
import useValueSet from './js/hooks/useValueSet';

// Modals
// @ts-ignore
import DeleteModal from './js/FormView/modals/DeleteModal';
// @ts-ignore
import Modal from './js/FormView/modals/Modal';
// @ts-ignore

export default FormBuilder;
export {
  Checked,
  Hr,
  Select,
  Text,
  Textarea,
  Title,
  useActions,
  Inputs,
  Panel,
  Drag,
  Validation,
  AtLeast,
  Email,
  Number,
  Required,
  Actions,
  ClassificationInputs,
  ClassificationPanel,
  DragTypes,
  ModalNames,
  TitlesTypes,
  UUIDGeneration,
  ConciseDraggableInputs,
  DeleteRelatedInputs,
  KeyMappings,
  ListEmpty,
  OptionBuild,
  formatSingleOptions,
  optionsList,
  RelatedInputs,
  useValidationRequire,
  useAddToArray,
  useMultiSelect,
  useValidationAtLeast,
  useValidationEmail,
  useValidationMinMax,
  useValueSet,
  DeleteModal,
  Modal,
  Button,
  Div,
  Input,
  Label,
  Selects,
  Textareas
};
export type ComponentNameType = ComponentNameType;
export type ComponentType = ComponentType;
export type ComponentListType = ComponentListType;
export type formSubmitType = formSubmitType;
export type validationRule = validationRule;
export type inputType = inputType;
export type inputTypes = inputTypes;
export type selectType = selectType;
export type radioType = radioType;
export type textareaType = textareaType;
export type Options = Options;
export type panelData = panelData;
export type ValidationIssues = ValidationIssues;
export type ValidationType = ValidationType;
