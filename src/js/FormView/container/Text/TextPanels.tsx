import React, { Fragment } from 'react';
import Panel from '../../Panel';
import Text from '../../../formBuilder/elements/Text';
import Select from '../../../formBuilder/elements/Select';
import Required from '../validation/required/Required';
import ClassificationInputs from '../../../constants/ClassificationInputs';
import ClassificationPanel from '../../../constants/ClassificationPanel';
import {useStateValue} from '../../../context/FormContext';

type Props = {
    panel: string,
    panelData: any,
};

const TextPanel = ({panel, panelData}: Props): any => {
    const {actions}: any = useStateValue();

    return (
        <Fragment>
            {panel === ClassificationPanel.TEXTPANEL &&
                <Panel
                    title="Text input panel"
                    id={panelData.id}
                    submit={actions.save}
                    clearPanel={actions.clearPanel}
                    setPanel={actions.setPanel}
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
                            ClassificationInputs.NUMBER
                        ]}
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
                    </div>
                </Panel>}
        </Fragment>
    );
};

export default TextPanel;
