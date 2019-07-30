import React from "react";
import { useStateValue } from "../../context/FormContext";

interface Props {
  children: any;
  header: string;
  submit: () => void;
}

const Modal = ({ submit, header, children }: Props) => {
  const { actions }: any = useStateValue();

  const submitModal = (): void => {
    submit();
    actions.manageModals("");
  };

  return (
    <div className="modalOverlay">
      <div className="modal">
        <h3>{header}</h3>
        {children}
        <div className="modal-footer">
          <button onClick={() => submitModal()}>Ok</button>
          <button onClick={() => actions.manageModals("")}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
