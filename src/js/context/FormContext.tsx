import React from 'react';
import ClassificationPanel from '../constants/ClassificationPanel';

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

const FormContext = React.createContext({});

type Props = {
    children: any,
};

interface IIndivualInput {
    [id: string]: {
        inputName: string,
    },
}

type State = {
    inputs: IIndivualInput,
    panel: string,
    panelData: {
        id: string,
    },
};

interface IInputs {
    id: string,
    type: string,
    inputId: string,
    inputName: string,
    label: string,
    inputValue: string,
    parentClassName: string,
    inputClassName: string,
}

function uuidv4() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

class FormProvider extends React.Component<Props, State> {
    state: State = {
        inputs: {},
        panel: "",
        panelData: {id: ""},
    };

    render() {
        return (
            <FormContext.Provider
                value={{
                    addInput: (InputData: IInputs) => {
                        const id = uuidv4();
                        this.setState({
                            inputs: {
                                ...this.state.inputs,
                                [id]: {
                                    id,
                                    ...InputData,
                                },
                            },
                        });
                    },
                    setPanel: (panelName: string) => {this.setState({panel: panelName})},
                    clearPanel: () => {
                        this.setState({
                            panel: '', 
                            panelData: {id: ''},
                        });
                    },
                    editInput: (id: string) => {
                        this.setState({
                            panel: ClassificationPanel.TEXTPANEL, 
                            panelData: {
                                id,
                            }   
                        });
                    },
                    deleteInput: (id: string) => {
                        delete this.state.inputs[id];
                        this.setState({
                            inputs: this.state.inputs,
                        });
                    },
                    save: (data: any) => {
                        this.setState({
                            inputs: {
                                ...this.state.inputs,
                                [this.state.panelData.id]: data,
                            }
                        });
                    },
                    ...this.state,
                }}
            >
                {this.props.children}
            </FormContext.Provider>
        );
    }
}

export default FormProvider;

export const FormConsumer = (Component: any): any => 
    class extends React.Component<any, any> {
        render() { 
            return(<FormContext.Consumer>
                {(context: any) => (
                    <Component {...this.props} {...context} />
                )}
            </FormContext.Consumer>)
        }
    };