import React from "react";
import {InjectedChildrenProps} from "../store/AppState";

interface Props extends InjectedChildrenProps{

}

interface State {

}

export class Coverage extends React.Component<Props, State> {


    render() {
        return (
            <div className="Coverage">
                Coverage
            </div>
        )
    }
}