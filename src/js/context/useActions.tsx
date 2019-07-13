import Actions from '../constants/Actions';

export default (state: any, dispatch: any) => {
    console.log(state)
    const addInput = (InputData: any) => dispatch({
        type: Actions.ADD_INPUT,
        payload: {InputData}
    });

    const save = (data: any) => dispatch({
        type: Actions.SAVE,
        payload: {data}
    });

    const editInput = (id: string) => dispatch({
        type: Actions.EDIT_INPUT,
        payload: {id}
    });

    const deleteInput = (id: string) => dispatch({
        type: Actions.DELETE_INPUT,
        payload: {id}
    });

    const clearPanel = () => dispatch({
        type: Actions.CLEAR_PANEL
    });

    const setPanel = (panelName: string) => dispatch({
        type: Actions.SET_PANEL,
        payload: {
            panelName
        }
    });

    const addValidation = (id: string, validationRule: string) => {
      if (!state.validation[id] || !state.validation[id].includes(validationRule)) {
        return dispatch({
            type: Actions.SET_FORM_INPUT_ERROR,
            payload: {
                id,
                validationRule,
            }
        });
      }
    };

    const removeValidation = (id: string, validationRule: string) => {
        if (state.validation[id] && state.validation[id].includes(validationRule)) {
            return dispatch({
                type: Actions.REMOVE_FORM_INPUT,
                payload: {
                    id,
                    validationRule,
                }
            });
        }
    };

    return {
        addInput,
        save,
        editInput,
        deleteInput,
        clearPanel,
        setPanel,
        addValidation,
        removeValidation
    };
};
