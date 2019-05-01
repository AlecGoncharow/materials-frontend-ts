import React from "react";
import {InjectedChildrenProps} from "../store/AppState";
import {IdTextEntry} from "../components/IdTextEntry";

interface Props extends InjectedChildrenProps{

}

export interface CoverageState {
    ids: number[]
}

export class Coverage extends React.Component<Props, CoverageState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            ids: [],
        };
    }

    setCoverageState = (newState: CoverageState): void => {
        this.setState(newState);
    };

    getCoverageState = (): CoverageState => {
        return this.state;
    };

    render() {
        return (
            <div className="Coverage">
                Coverage
                <div>
                    <IdTextEntry setCoverageState={this.setCoverageState}
                                 getCoverageState={this.getCoverageState}
                                 label={"Some Label"}
                                 id={"Some ID"}
                                 defaultValue={"Some default"}/>
                </div>
            </div>
        )
    }
}