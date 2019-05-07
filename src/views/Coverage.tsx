import React from "react";
import {InjectedChildrenProps} from "../store/AppState";
import {IdTextEntry} from "../components/IdTextEntry";
import {buildHierarchyData, NodeLinkData} from "../utils/BuildData";
import {HierarchyGraph} from "../components/HierarchyGraph";

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
        let data: NodeLinkData | undefined;
        if (appState.data !== undefined && appState.acm !== undefined) {
            for (let key in this.state) {
                data = buildHierarchyData(this.state[key], appState.data.assignments, appState.acm);
            }
        }

        if (data === undefined) {
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
                    <HierarchyGraph data={data} id={"id"} width={1000} height={1000}/>
            </div>
        )
    }
}