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

    return {
        addInput,
        save,
        editInput,
        deleteInput,
        clearPanel,
        setPanel
    };
};
