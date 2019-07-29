import FormBuilder from './js/FormBuilder';

// Elements
import Checked from './js/formBuilder/elements/Checked';
import Hr from './js/formBuilder/elements/Hr';
import Select from './js/formBuilder/elements/Select';
import Text from './js/formBuilder/elements/Text';
import Textarea from './js/formBuilder/elements/Textarea';
import Title from './js/formBuilder/elements/Title';

// Types
import {ComponentNameType, ComponentType, ComponentListType} from './js/types/ComponentListType';
import {formSubmitType} from './js/types/formSubmitType';
import {validationRule, inputType, inputTypes, selectType, radioType, textareaType} from './js/types/inputType';
import Options from './js/types/Options';
import {panelData} from './js/types/PanelDataType';
import {ValidationIssues, ValidationType} from './js/types/validationType';

// Context
import useActions from './js/context/useActions';

// Drag, panels etc
import Inputs from './js/FormView/Inputs';
import Panel from './js/FormView/Panel';
import Drag from './js/FormView/container/Drag';

// Validations
import Validation from './js/FormView/container/validation/Validation';
import AtLeast from './js/FormView/container/validation/rules/AtLeast';
import Email from './js/FormView/container/validation/rules/Email';
import Number from './js/FormView/container/validation/rules/Number';
import Required from './js/FormView/container/validation/rules/Required';

// Constants
import Actions from './js/constants/Actions';
import ClassificationInputs from './js/constants/ClassificationInputs';
import ClassificationPanel from './js/constants/ClassificationPanel';
import DragTypes from './js/constants/DragTypes';
import ModalNames from './js/constants/ModalNames';
import TitlesTypes from './js/constants/TitlesTypes';

// Helpers
import UUIDGeneration from './js/utilities/UUIDGeneration';
import ConciseDraggableInputs from './js/utilities/ConciseDraggableInputs';
import DeleteRelatedInputs from './js/utilities/DeleteRelatedInputs';
import KeyMappings from './js/utilities/KeyMappings';
import ListEmpty from './js/utilities/ListEmpty';
import OptionBuild, {formatSingleOptions, optionsList} from './js/utilities/OptionBuild';
import RelatedInputs from './js/utilities/RelatedInputs';

// Hooks
import useValidationRequire from './js/hooks/useValidationRequire';
import useAddToArray from './js/hooks/useAddToArray';
import useMultiSelect from './js/hooks/useMultiSelect';
import useValidationAtLeast from './js/hooks/useValidationAtLeast';
import useValidationEmail from './js/hooks/useValidationEmail';
import useValidationMinMax from './js/hooks/useValidationMinMax';
import useValueSet from './js/hooks/useValueSet';

// Modals
import DeleteModal from './js/FormView/modals/DeleteModal';
import Modal from './js/FormView/modals/Modal';

// Styles
import Button from './js/formBuilder/styles/button';
import Div from './js/formBuilder/styles/div';
import Input from './js/formBuilder/styles/input';
import Label from './js/formBuilder/styles/label';
import Selects from './js/formBuilder/styles/select';
import Textareas from './js/formBuilder/styles/textarea';

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
