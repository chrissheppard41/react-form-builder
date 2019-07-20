import React from 'react';
import Modal from './Modal';
import {useStateValue} from '../../context/FormContext';
import RelatedInputs from '../../utilities/RelatedInputs';
import {inputType} from '../../types/inputType';

const DeleteModal = () => {
    const {state, actions}: any = useStateValue();

    console.log();

    return (
        <Modal
            submit={() => actions.deleteInput(state.modal.data.id)}
            header="You sure you want to delete?"
        >
            <p>Deleting this input will result in the following being removed with it:</p>
            <ul>
                {RelatedInputs(state.inputs, state.modal.data.id).map((input: inputType) => 
                    <li key={input.id}>
                        {input.label}
                    </li>
                )}
            </ul>
            <p>Are you sure?</p>
        </Modal>
    );
};

export default DeleteModal;