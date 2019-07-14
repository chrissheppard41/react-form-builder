import React from 'react';
import MapFormInputs from './MapFormInputs';
import ComponentList from './ComponentList';
import {ComponentListType} from '../types/ComponentListType';

type Props = {
    children: Array<React.ReactNode>,
    inputs: {
        [id: string] : any,
    },
    validation: {
        [id: string] : Array<string>,
    },
    customComponents: ComponentListType
}

type State = {
    error: boolean,
}

class FormBuilderView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            error: false,
        };
    }

    anyErrors = () => {
        const {
            validation,
        } = this.props;
        let errors = 0;

        Object.keys(validation).forEach((key: string) => {
            errors += validation[key].length;
        });

        if (errors > 0) {
            this.setState({error: true});
        } else {
            this.setState({error: false});
        }
    }

    submit = (e: any) => {
        e.preventDefault();
        this.anyErrors();
    }

    render() {
        const {
            children,
            inputs,
            validation,
            customComponents,
        } = this.props;
        const {error} = this.state;

        return (
            <div className="formBuilder-container">
                {children}
                <MapFormInputs 
                    inputs={inputs}
                    submit={this.submit}
                    error={error}
                    validation={validation}
                    componentList={{...customComponents, ...ComponentList}}
                />
            </div>
        );
    }

}

export default FormBuilderView;
