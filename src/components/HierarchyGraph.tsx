import React from 'react'
import * as d3 from 'd3'
import {Card, CardContent} from "@material-ui/core";
import {NodeLinkData} from "../utils/BuildData";

interface Props {
    data: NodeLinkData;
    id: string;
}

interface State {

}

export class HierarchyGraph extends React.Component <Props, State> {

    createGraph = () => {
        let node = this.props.id;
        let data = this.props.data;


    };

    render() {
        return (
            <Card>
                <CardContent>
                    <svg width={1000} height={1000}>
                    </svg>
                </CardContent>
            </Card>
        )
    }
}