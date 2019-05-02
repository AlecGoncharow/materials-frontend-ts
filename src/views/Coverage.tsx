import React from "react";
import {InjectedChildrenProps} from "../store/AppState";
import {IdTextEntry} from "../components/IdTextEntry";
import {buildHierarchyData} from "../utils/BuildData";

interface Props extends InjectedChildrenProps{

}

export interface CoverageState {
    [index: string]: number[]
}

export class Coverage extends React.Component<Props, CoverageState> {
    constructor(props: Props) {
        super(props);

        this.state = {
        };
    }

    setCoverageState = (newState: CoverageState): void => {
        console.log("Coverage state update:");
        console.log(newState);
        this.setState(newState);
    };

    getCoverageState = (): CoverageState => {
        return this.state;
    };

    render() {
        let appState = this.props.getAppState();
        if (appState.data !== undefined && appState.acm !== undefined) {
            for (let key in this.state) {
                console.log(buildHierarchyData(this.state[key], appState.data.assignments, appState.acm))
            }
        }

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