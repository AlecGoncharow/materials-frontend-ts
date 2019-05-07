import * as React from "react";
import * as d3 from "d3";
import {NodeData} from "../utils/BuildData";

class Node extends React.Component<{ node: NodeData, color: string }, {}> {
  // @ts-ignore
  ref: SVGCircleElement;

  componentDidMount() {
    d3.select(this.ref).data([this.props.node]);
  }

  render() {
    return (
      <circle className="node" r={5} fill={this.props.color}
        ref={(ref: SVGCircleElement) => this.ref = ref}>
        <title>{this.props.node.id}</title>
      </circle>
    );
  }
}

export default class Nodes extends React.Component<{ nodes: NodeData[], simulation: any }, {}> {
  componentDidMount() {
    const simulation = this.props.simulation;
    // @ts-ignore
    d3.selectAll(".node").call(d3.drag()
        .on("start", onDragStart)
        .on("drag", onDrag)
        .on("end", onDragEnd));

    function onDragStart(d: any) {
      if (!d3.event.active) {
        simulation.alphaTarget(0.3).restart();
      }
      d.fx = d.x;
      d.fy = d.y;
    }

    function onDrag(d: any) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function onDragEnd(d: any) {
      if (!d3.event.active) {
        simulation.alphaTarget(0);
      }
      d.fx = null;
      d.fy = null;
    }
  }

  render() {
    const nodes = this.props.nodes.map((node: NodeData, index: number) => {
      return <Node key={index} node={node} color={"blue"} />;
    });

    return (
      <g className="nodes">
        {nodes}
      </g>
    );
  }
}