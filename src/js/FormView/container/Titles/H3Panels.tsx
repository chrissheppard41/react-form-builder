import React from 'react';
import Panel from '../../Panel';
import Text from '../../../formBuilder/elements/Text';
import ClassificationInputs from '../../../constants/ClassificationInputs';
import {useStateValue} from '../../../context/FormContext';

type Props = {
    panel: string,
    panelData: any,
};

const H3Panel = ({panel, panelData}: Props): any => {
    const {actions}: any = useStateValue();

    return (
        <>
            {panel === ClassificationInputs.H3 &&
                <Panel
                    title="H3 panel"
                    id={panelData.id}
                    submit={actions.save}
                    clearPanel={actions.clearPanel}
                >
                    <h5>H3 fields</h5>
                    <Text 
                        label="Enter label"
                        type="text"
                        inputValue={panelData.label}
                        inputClassName="text"
                        inputName="label"
                    />
                </Panel>}
        </>
    );
};

export default H3Panel;
