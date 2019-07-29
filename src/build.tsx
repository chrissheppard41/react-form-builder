import FormBuilder from './js/FormBuilder';

export default FormBuilder;

// Elements
import Checked from './js/FormBuilder/elements/Checked';
import Hr from './js/FormBuilder/elements/Hr';
import Select from './js/FormBuilder/elements/Select';
import Text from './js/FormBuilder/elements/Text';
import Textarea from './js/FormBuilder/elements/Textarea';
import Title from './js/FormBuilder/elements/Title';

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

export {
  Checked,
  Hr,
  Select,
  Text,
  Textarea,
  Title,
  ComponentNameType,
  ComponentType,
  ComponentListType,
  formSubmitType,
  validationRule,
  inputType,
  inputTypes,
  selectType,
  radioType,
  textareaType,
  Options,
  panelData,
  ValidationIssues,
  ValidationType,
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
