import React from 'react';

type Props = {
    test: string,
}

class FormView extends React.Component<Props> {
    static defaultProps = {
        test: '',
    };
    
    render() {
        return (
            <div>Hello world</div>
        );
    }

}

export default FormView;