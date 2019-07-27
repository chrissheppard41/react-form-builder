import React from 'react';
import Panel from '../../Panel';
import Text from '../../../formBuilder/elements/Text';
import Required from '../validation/rules/Required';
import ClassificationPanel from '../../../constants/ClassificationPanel';
import {useStateValue} from '../../../context/FormContext';
import AddOptions from '../../../formBuilder/elements/AddOptions';
import Radio from '../../../formBuilder/elements/Radio';

type Props = {
    panel: string,
    panelData: any,
};

const RadioPanel = ({panel, panelData}: Props): any => {
    const {actions}: any = useStateValue();

    return (
        <>
            {panel === ClassificationPanel.RADIOPANEL &&
                <Panel
                    title="Radio input panel"
                    id={panelData.id}
                    submit={actions.save}
                    clearPanel={actions.clearPanel}
                >
                    <h5>Input fields</h5>
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
                    <Radio
                        label="Enter radio test class name"
                        type="radio"
                        inputClassName="radio"
                        inputName="inputClassNameRadio"
                        inputValue={panelData.inputClassNameRadio}
                        options={['test']}
                    />
                    <AddOptions 
                        inputValue={panelData.options ? JSON.parse(panelData.options) : []}
                        inputClassName="option"
                        inputName="options"
                    />
                    <div className="validation">
                        <h5>Validation rules</h5>
                        <Required 
                            validation={panelData.validation}
                        />
                    </div>
                </Panel>}
        </>
    );
};

export default RadioPanel;
