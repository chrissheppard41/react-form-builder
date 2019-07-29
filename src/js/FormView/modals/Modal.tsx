import React from "react";
import { useStateValue } from "../../context/FormContext";
import styled from "styled-components";

interface Props {
  children: any;
  header: string;
  submit: () => void;
}

const DivOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 501;
  background-color: rgba(255, 255, 255, 0.5);
`;

const DivModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -150px;
  width: 300px;
  background-color: white;
  border: 1px solid #666;
  padding: 15px 15px 50px 15px;
`;
const DivFooter = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  width: calc(100% - 20px);
`;
const Buttons = styled.button`
  padding: 5px 10px;
  margin-right: 10px;
`;

const Modal = ({ submit, header, children }: Props) => {
  const { actions }: any = useStateValue();

  const submitModal = (): void => {
    submit();
    actions.manageModals("");
  };

  return (
    <DivOverlay className="modalOverlay">
      <DivModal className="modal">
        <h3>{header}</h3>
        {children}
        <DivFooter>
          <Buttons onClick={() => submitModal()}>Ok</Buttons>
          <Buttons onClick={() => actions.manageModals("")}>Cancel</Buttons>
        </DivFooter>
      </DivModal>
    </DivOverlay>
  );
};

export default Modal;
