import React from "react";
import Modal from "./Modal";
import { useStateValue } from "../../context/FormContext";
import RelatedInputs from "../../utilities/RelatedInputs";
import { inputType } from "../../types/inputType";
import styled from "styled-components";

const Ul = styled.ul`
  list-style-type: none;
  margin: 10px 0 10px 5px;
`;
const Li = styled.li`
  margin: 10px 0;
`;

const DeleteModal = () => {
  const { state, actions }: any = useStateValue();

  return (
    <Modal
      submit={() => actions.deleteInput(state.modal.data.id)}
      header="You sure you want to delete?"
    >
      <p>
        Deleting this input will result in the following being removed with it:
      </p>
      <Ul>
        {RelatedInputs(state.inputs, state.modal.data.id).map(
          (input: inputType) => (
            <Li key={input.id}>- {input.label}</Li>
          )
        )}
      </Ul>
      <p>Are you sure?</p>
    </Modal>
  );
};

export default DeleteModal;
