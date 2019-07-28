import React from 'react';
import Panel from '../../Panel';
import Text from '../../../formBuilder/elements/Text';
import Select from '../../../formBuilder/elements/Select';
import Required from '../validation/rules/Required';
import ClassificationPanel from '../../../constants/ClassificationPanel';
import ClassificationInputs from '../../../constants/ClassificationInputs';
import {useStateValue} from '../../../context/FormContext';
import Email from '../validation/rules/Email';
import Number from '../validation/rules/Number';
import { panelData } from '../../../types/PanelDataType';

type Props = {
    panel: string,
    panelData: panelData,
};

const TextPanel = ({panel, panelData}: Props): any => {
    const {actions}: any = useStateValue();

    return (
        <>
            {panel === ClassificationPanel.TEXTPANEL &&
                <Panel
                    title="Text input panel"
                    id={panelData.id}
                    submit={actions.save}
                    clearPanel={actions.clearPanel}
                >
                    <h5>Input fields</h5>
                    <Select 
                        label="Enter type"
                        inputClassName="select"
                        id="type"
                        inputName="type"
                        inputValue={panelData.type}
                        options={[
                            ClassificationInputs.TEXT, 
                            ClassificationInputs.EMAIL, 
                            ClassificationInputs.NUMBER, 
                            ClassificationInputs.FILE
                        ]}
                        fromPanel={true}
                    />
                    <Text 
                        label="Enter label"
                        type="text"
                        inputValue={panelData.label}
                        inputClassName="text"
                        inputName="label"
                    />
                    <Text 
                        label="Enter name"
                        type="text"
                        inputClassName="text"
                        inputName="inputName"
                        inputValue={panelData.inputName}
                    />
                    <Text 
                        label="Enter default value"
                        type="text"
                        inputClassName="text"
                        inputName="inputValue"
                        inputValue={panelData.inputValue}
                    />
                    <Text 
                        label="Enter parent class name"
                        type="text"
                        inputClassName="text"
                        inputName="parentClassName"
                        inputValue={panelData.parentClassName}
                    />
                    <Text 
                        label="Enter input class name"
                        type="text"
                        inputClassName="text"
                        inputName="inputClassName"
                        inputValue={panelData.inputClassName}
                    />
                    <div className="validation">
                        <h5>Validation rules</h5>
                        <Required 
                            validation={panelData.validation}
                        />
                        <Email 
                            validation={panelData.validation}
                        />
                        <Number 
                            validation={panelData.validation}
                        />
                    </div>
                </Panel>}
        </>
    );
};

export default TextPanel;
