import React from 'react';
import Panel from '../../Panel';
import Text from '../../../formBuilder/elements/Text';
import Required from '../validation/rules/Required';
import ClassificationPanel from '../../../constants/ClassificationPanel';
import {useStateValue} from '../../../context/FormContext';
import AddOptions from '../../../formBuilder/elements/AddOptions';
import Select from '../../../formBuilder/elements/Select';
import ClassificationInputs from '../../../constants/ClassificationInputs';
import AtLeast from '../validation/rules/AtLeast';
import {panelData} from '../../../types/PanelDataType';

type Props = {
    panel: string,
    panelData: panelData,
};

const CheckedPanel = ({panel, panelData}: Props): any => {
    const {actions}: any = useStateValue();

    return (
        <>
            {panel === ClassificationPanel.RADIOPANEL &&
                <Panel
                    title="Radio/Checkbox input panel"
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
                            ClassificationInputs.RADIO, 
                            ClassificationInputs.CHECKBOX
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
                        <AtLeast 
                            validation={panelData.validation}
                        />
                    </div>
                </Panel>}
        </>
    );
};

export default CheckedPanel;
