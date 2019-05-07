import React from 'react'
import * as d3 from 'd3'
import {Card, CardContent} from "@material-ui/core";
import {NodeData, NodeLinkData} from "../utils/BuildData";
import {d3Node} from "../types";
import Links from "./Links";
import Nodes from "./Nodes"

interface Props {
    data: NodeLinkData;
    id: string;
    width: number
    height: number
}

interface State {

}

export class HierarchyGraph extends React.Component <Props, State> {
    simulation: any;

    constructor(props: Props) {
        super(props);

        // typescript haha
        this.simulation = d3.forceSimulation()
            .force("link", d3.forceLink().id((d: any | NodeData) => d.id))
            .force("charge", d3.forceManyBody().strength(-100))
            .force("center", d3.forceCenter(
                this.props.width / 2, this.props.height / 2
            ))
            .force("x", d3.forceX(0))
            .force("y", d3.forceY(0))
            .nodes(this.props.data.nodes);

        this.simulation.force("link").links(this.props.data.links);
        console.log(this.simulation);
    }

    componentDidMount(): void {
        const node = d3.select(".nodes").selectAll("circle");
        const link = d3.select(".links").selectAll("line");

        this.simulation.nodes(this.props.data.nodes).on("tick", ticked);

        function ticked() {
            link
                .attr("x1", function(d: any) {
                    return d.source.x;
                })
                .attr("y1", function(d: any) {
                    return d.source.y;
                })
                .attr("x2", function(d: any) {
                    return d.target.x;
                })
                .attr("y2", function(d: any) {
                    return d.target.y;
                });

            node
                .attr("cx", function(d: any) {
                    return d.x;
                })
                .attr("cy", function(d: any) {
                    return d.y;
                });
        }
    };

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        this.simulation.nodes(this.props.data.nodes);
        this.simulation.alpha(.8).restart();
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <svg width={this.props.width}
                         height={this.props.height}>
                        <Links links={this.props.data.links}/>
                        <Nodes nodes={this.props.data.nodes} simulation={this.simulation}/>
                    </svg>
                </CardContent>
            </Card>
        )
    }
}