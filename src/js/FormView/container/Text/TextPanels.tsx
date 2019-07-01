import React, { Fragment } from 'react';
import Panel from '../../Panel';
import Text from '../../Panel/Text';
import Select from '../../Panel/Select';

type Props = {
    panel: string,
    save: (data: any) => void,
    panelData: any,
};

const TextPanel = ({panel, save, panelData}: Props): any => {
    return (
        <Fragment>
            {panel === 'textPanel' &&
                <Panel
                    title="Text input panel"
                    submit={save}
                    id={panelData.id}
                >
                    <Select 
                        label="Enter label"
                        className="select"
                        name="type"
                        value={panelData.type}
                        options={[
                            'text', 'email'
                        ]}
                    />
                    <Text 
                        label="Enter label"
                        className="text"
                        name="label"
                        value={panelData.label}
                    />
                    <Text 
                        label="Enter id"
                        className="text"
                        name="inputId"
                        value={panelData.inputId}
                    />
                    <Text 
                        label="Enter name"
                        className="text"
                        name="inputName"
                        value={panelData.inputName}
                    />
                    <Text 
                        label="Enter default value"
                        className="text"
                        name="inputValue"
                        value={panelData.inputValue}
                    />
                    <Text 
                        label="Enter parent class name"
                        className="text"
                        name="parentClassName"
                        value={panelData.parentClassName}
                    />
                    <Text 
                        label="Enter input class name"
                        className="text"
                        name="inputClassName"
                        value={panelData.inputClassName}
                    />
                </Panel>}
        </Fragment>
    );
};

export default TextPanel;