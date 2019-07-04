import React, { Fragment } from 'react';
import Panel from '../../Panel';
import Text from '../../../formBuilder/elements/Text';
import Select from '../../../formBuilder/elements/Select';
import ClassificationInputs from '../../../constants/ClassificationInputs';
import ClassificationPanel from '../../../constants/ClassificationPanel';

type Props = {
    panel: string,
    save: (data: any) => void,
    panelData: any,
};

const TextPanel = ({panel, save, panelData}: Props): any => {
    return (
        <Fragment>
            {panel === ClassificationPanel.TEXTPANEL &&
                <Panel
                    title="Text input panel"
                    submit={save}
                    id={panelData.id}
                >
                    <Select 
                        label="Enter type"
                        inputClassName="select"
                        inputName="type"
                        inputValue={panelData.type}
                        options={[
                            ClassificationInputs.TEXT, ClassificationInputs.EMAIL
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
                        label="Enter id"
                        type="text"
                        inputClassName="text"
                        inputName="inputId"
                        inputValue={panelData.inputId}
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
                </Panel>}
        </Fragment>
    );
};

export default TextPanel;
