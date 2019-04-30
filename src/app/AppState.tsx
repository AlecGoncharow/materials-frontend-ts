import * as React from "react";

export interface InjectedChildrenProps {
    setAppState(newState: State): void;
    getAppState(): State
}

interface AppStateProps {
    children(props: InjectedChildrenProps): JSX.Element
}


export interface State {
    message?: string;
}


/*
    Container for App's State, exports functions to every child
    component that allow the augmentation and fetching of the App's top level State
 */
class AppState extends React.Component<AppStateProps, State> {
    constructor(props: AppStateProps) {
       super(props);
       this.state = {
            message: 'hello from AppState'
       };
    }

    setAppState = (newState: State): void => {
        this.setState(newState);
    };

    getAppState= (): State => {
        return this.state;
    };

    render() {
        return this.props.children({
            setAppState: this.setAppState,
            getAppState: this.getAppState,
        })

    }
}

export default AppState;