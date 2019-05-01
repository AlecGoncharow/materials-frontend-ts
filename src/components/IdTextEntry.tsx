import React from "react";
import { CoverageState } from "../views/Coverage";
import {Button} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

interface CoverageProps {
    setCoverageState(newState: CoverageState): void;
    getCoverageState(): CoverageState;
    label: string
    id: string
    defaultValue: string
}

export class IdTextEntry extends React.Component<CoverageProps, CoverageState> {

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let input = event.currentTarget.value;
        let input_arr: number[];
        input_arr = input.split(' ').map(Number);
        this.setState({[this.props.id]: input_arr});
        console.log(this.state);
    };

    handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            this.props.setCoverageState(this.state);
        }
    };

    render() {
        return (
            <div>
                <div>
                    <TextField label={this.props.label}
                               id={this.props.id}
                               onChange={this.handleChange}
                               onKeyPress={this.handleKeyPress}/>
                </div>
                <div>
                    <Button color="primary"
                            variant="contained"
                            size="small"
                            onClick={() => this.props.setCoverageState(this.state)}>Set IDs</Button>
                </div>
            </div>
        )
    }
}