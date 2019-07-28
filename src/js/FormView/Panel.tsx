import React from 'react';
import { panelData } from '../types/PanelDataType';
import styled from 'styled-components';
import Div from '../formBuilder/styles/div';
import Button from '../formBuilder/styles/button';

const PanelContainer = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 500;
`;
const PanelOverlay = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 500;
`;
const PanelArea = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 500px;
    height: 100%;
    background-color: #666;
    z-index: 501;
    padding: 10px;
`;
const PanelHeader = styled.div`
    width: 100%;
    height: 30px;
    @include font-size(16px, 20px);
`;
const PanelBody = styled.div`
    width: 100%;
    position: relative;
    height: calc(100% - 30px);
`;
const PanelFooter = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50px;
`;

type Props = {
    children: Array<React.ReactNode>,
    title: string,
    id: string,
    submit: (data: panelData) => void,
    clearPanel: () => void,
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
        
        let formData: panelData = {validation: {}};
        
        for(const field in event.target){
            if (event.target[field] && event.target[field].value !== undefined) {
                const name = event.target[field].name || event.target[field].id;

                if (name === undefined || name === '') {continue;}
                if (!formData[name]) {formData[name] = undefined;}
                if (event.target[field].value && event.target[field].className.includes('validation')) {
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
                    if (event.target[field].type === 'checkbox') {
                        if (event.target[field].checked) {
                            formData = {
                                ...formData,
                                [name]: [
                                    ...(formData[name] || []),
                                    event.target[field].value
                                ],
                            };
                        }
                    } else if (event.target[field].type === 'radio') {
                        if (event.target[field].checked) {
                            formData = {
                                ...formData,
                                [name]: event.target[field].value,
                            };
                        }
                    } else {
                        formData = {
                            ...formData,
                            [name]: event.target[field].value,
                        };
                    }
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
            clearPanel
        } = this.props;

        return (
            <PanelContainer className="panel-container">
                <PanelOverlay className="panel-overlay" onClick={() => clearPanel()} />
                <PanelArea className="panel-area">
                    <PanelHeader className="header">
                        {title}
                    </PanelHeader>
                    <PanelBody className="panel-body">
                        <form onSubmit={this.submit}>
                            <Div className="inputs">
                                {children}
                            </Div>
                            <PanelFooter className="footer">
                                <input type="hidden" name="id" value={id} />
                                <Button type="submit">Submit</Button>
                                <Button onClick={() => clearPanel()}>Cancel</Button>
                            </PanelFooter>
                        </form>
                    </PanelBody>
                </PanelArea>
            </PanelContainer>
        );
    }

}

export default Panel;
