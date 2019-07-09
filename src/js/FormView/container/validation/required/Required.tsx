import React, {useState} from 'react';
import Text from '../../../../formBuilder/elements/Text';

type validation = {
    enabled: boolean,
    message: string,
}

interface Props {
    validation: {
        required: validation,
    },
};

const Required = ({validation}: Props): any => {
    const required: validation = validation.required 
        ? validation.required
        : {enabled: false, message: ''};
    const [enabled, setEnabled] = useState(required.enabled);

    return (
        <div className="validation-input">
            <h6>Require</h6>
            Enable: <input 
                type="checkbox" 
                className="validation" 
                name="required"
                id="enabled"
                onChange={() => setEnabled(!enabled)}
                defaultChecked={enabled}
            />
            {enabled && <Text 
                label="Message"
                type="text"
                inputClassName="validation"
                inputName="required"
                id="message"
                inputValue={required.message}
            />}
        </div>
    );
};

Required.defaultProps = {
    values: {},
};

export default Required;
