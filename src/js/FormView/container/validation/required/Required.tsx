import React, {useState, Fragment} from 'react';
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
            {enabled && 
            <Fragment>
                <Text 
                    label="Message"
                    type="text"
                    inputClassName="validation"
                    inputName="required"
                    id="message"
                    inputValue={required.message}
                />
                <input
                    type="hidden"
                    className="validation"
                    name="required"
                    id="error"
                    value="false"
                />
            </Fragment>
            }
        </div>
    );
};

Required.defaultProps = {
    values: {},
};

export default Required;
