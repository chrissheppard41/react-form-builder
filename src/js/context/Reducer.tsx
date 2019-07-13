import ClassificationPanel from '../constants/ClassificationPanel';
import Actions from '../constants/Actions';

type InputType = {
    inputName: string,
    validation: {
        error: boolean,
        mesage: string,
        enable: boolean,
    }
};

interface IIndivualInput {
    [id: string]: InputType,
}

type Props = {
    inputs: IIndivualInput,
    panel: string,
    panelData: {
        id: string,
    },
    validation: {
        [id: string]: Array<string>,
    }
};

export const initialState: Props = {
    inputs: {},
    panel: "",
    panelData: {id: ""},
    validation: {}
};

const uuidv4 = () => {
    const s4 = () =>  {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

export default (state: any, action: any) => {
    switch (action.type) {
      case Actions.ADD_INPUT:
        const id = uuidv4();

        return {
            ...state,
            inputs: {
                ...state.inputs,
                [id]: {
                    id,
                    ...action.payload.InputData,
                }
            },
        };

    case Actions.SET_PANEL:
        return {
            ...state,
            panel: action.payload.panelName
        };
        
    case Actions.CLEAR_PANEL:
        return {
            ...state,
            panel: '', 
            panelData: {id: ''},
        }
        
    case Actions.EDIT_INPUT:
        return {
            ...state,
            panel: ClassificationPanel.TEXTPANEL, 
            panelData: {
                id: action.payload.id,
            }
        };

    case Actions.DELETE_INPUT:
        delete state.inputs[action.payload.id];
        return {
            ...state,
            /*inputs: state.inputs,*/
        };

    case Actions.SAVE:
        return {
            ...state,
            inputs: {
                ...state.inputs,
                [state.panelData.id]: action.payload.data,
            }
        };

    case Actions.SET_FORM_INPUT_ERROR:
        return {
            ...state,
            validation: {
                ...state.validation,
                [action.payload.id]: [
                    ...state.validation[action.payload.id] 
                        ? state.validation[action.payload.id]
                        : [],
                    action.payload.validationRule
                ],
            }
        };

    case Actions.REMOVE_FORM_INPUT:
        return {
            ...state,
            validation: {
                ...state.validation,
                [action.payload.id]: 
                    state.validation[action.payload.id].filter((validationRule: string) => 
                        validationRule !== action.payload.validationRule
                    ),
            }
        };
        
      default:
        return state;
    }
  };