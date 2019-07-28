import React from 'react';
import Panel from '../../Panel';
import Text from '../../../formBuilder/elements/Text';
import ClassificationPanel from '../../../constants/ClassificationPanel';
import TitlesTypes from '../../../constants/TitlesTypes';
import {useStateValue} from '../../../context/FormContext';
import Select from '../../../formBuilder/elements/Select';
import { panelData } from '../../../types/PanelDataType';

type Props = {
    panel: string,
    panelData: panelData,
};

const TitlePanel = ({panel, panelData}: Props): any => {
    const {actions}: any = useStateValue();
    
    return (
        <>
            {panel === ClassificationPanel.TITLEPANEL &&
                <Panel
                    title="Title panel"
                    id={panelData.id}
                    submit={actions.save}
                    clearPanel={actions.clearPanel}
                >
                    <h5>Title fields</h5>
                    <Text 
                        label="Enter label"
                        type="text"
                        inputValue={panelData.label}
                        inputClassName="text"
                        inputName="label"
                    />
                    <Select 
                        label="Enter type"
                        inputClassName="select"
                        id="inputName"
                        inputName="inputName"
                        inputValue={panelData.inputName}
                        options={Object.keys(TitlesTypes).map((key: string) => TitlesTypes[key])}
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
        </>
    );
};

export default TitlePanel;
