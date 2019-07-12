import React from 'react';

type Props = {
    children: Array<React.ReactNode>,
    title: string,
    id: string,
    submit: (data: any) => void,
    clearPanel: () => void,
    setPanel: (name: string) => void,
}

class Panel extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit = (event: any) => {
        event.preventDefault();
        const {
            submit,
            clearPanel,
        } = this.props;
        
        let formData = {validation: {}};
        
        for(const field in event.target){
            if (event.target[field] && event.target[field].value) {
                const name = event.target[field].name || event.target[field].id;

                if (event.target[field].className.includes('validation')) {
                    formData = {
                        ...formData,
                        validation: {
                            ...formData.validation,
                            [event.target[field].name]: {
                                //@ts-ignore
                                ...formData.validation[event.target[field].name],
                                [event.target[field].id]: (event.target[field].type === 'checkbox') 
                                    ? event.target[field].checked
                                    : event.target[field].value,
                            },
                        },
                    };
                } else {
                    formData = {
                        ...formData,
                        [name]: event.target[field].value,
                    };
                }

                
            }
        }
        
        submit(formData);
        clearPanel();
    }

    render() {
        const {
            children,
            title,
            id,
            setPanel,
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

export default Panel;