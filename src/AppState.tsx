import * as React from "react";

export interface Props {
    children: any,
}

export interface State {

}


/*
    Container for App's State, exports functions to every child
    component that allow the augmentation and fetching of the App's top level State
 */
class AppState extends React.Component<Props, State> {
    constructor(props: Props) {
       super(props);
       this.state = {

       };
    }

    setAppState(newState: State) {
        this.setState(newState);
    }

    getAppState() {
        return this.state;
    }

    render() {
        return (
            <div className="AppState">
                {React.Children.map(this.props.children, child => {
                    return React.cloneElement(child, {
                        getAppState: this.getAppState,
                        setAppState: this.setAppState
                    });
                })}
            </div>
        )
    }
}

export default AppState;