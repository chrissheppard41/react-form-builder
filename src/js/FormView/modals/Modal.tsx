import React from 'react';
import {useStateValue} from '../../context/FormContext';
import styled from 'styled-components';

interface Props {
    children: any,
    header: string,
    submit: () => void
}

const DivOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 501;
`;

const DivModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -150px;
    width: 300px;
    height: 200px;
    background-color: white;
    border: 1px solid #666;
`;

const Modal = ({submit, header, children}: Props) => {
    const {actions}: any = useStateValue();

    const submitModal = (): void => {
        submit();
        actions.manageModals("");
    };

    return (
        <DivOverlay className="modalOverlay">
            <DivModal className="modal">
                <h3>
                    {header}
                </h3>
                {children}
                <div>
                    <button onClick={() => submitModal()}>Ok</button>
                    <button onClick={() => actions.manageModals("")}>Cancel</button>
                </div>
            </DivModal>
        </DivOverlay>
    );
};

export default Modal;