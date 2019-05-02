import React from 'react'
import * as d3 from 'd3'
import {Card, CardContent} from "@material-ui/core";

interface Props {

}


export class HierarchyGraph extends React.Component {
    
    
    createGraph = () => {
        
    };

    render () {
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