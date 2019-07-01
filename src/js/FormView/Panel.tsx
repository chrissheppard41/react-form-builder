import React from 'react';
import {FormConsumer} from '../context/FormContext';

type Props = {
    children: Array<React.ReactNode>,
    title: string,
    submit: (data: any) => void,
    setPanel: (panelName: string) => void,
    clearPanel: () => void,
    id: string,
}

class Panel extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit = (event: any) => {
        event.preventDefault();
        
        const {
            clearPanel,
            submit,
        } = this.props;

        let formData = {};
        
        for(const field in event.target){
            if (event.target[field] && event.target[field].value) {
                const name = event.target[field].name || event.target[field].id;

                formData = {
                    ...formData,
                    [name]: event.target[field].value,
                };
            }
        }
        
        submit(formData);
        clearPanel();
    }

    render() {
        const {
            children,
            title,
            setPanel,
            id,
        } = this.props;

        return (
            <div className="panel-container">
                <div className="panel-overlay" />
                <div className="panel-area">
                    <div className="header">
                        {title}
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.submit}>
                            <div className="inputs">
                                {children}
                            </div>
                            <div className="footer">
                                <input type="hidden" name="id" value={id} />
                                <button type="submit">Submit</button>
                                <button onClick={() => setPanel("")}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default FormConsumer(Panel);
