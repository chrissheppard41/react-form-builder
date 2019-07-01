import React from 'react';
import MapFormInputs from './MapFormInputs';

type Props = {
    children: Array<React.ReactNode>,
    inputs: {
        [id: string] : any,
    },
}

class FormBuilderView extends React.Component<Props> {
    render() {
        const {
            children,
            inputs,
        } = this.props;

        return (
            <div className="formBuilder-container">
                {children}
                <MapFormInputs 
                    inputs={inputs}
                />
            </div>
        );
    }

}

export default FormBuilderView;
