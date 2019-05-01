import React from "react";
import { CoverageState } from "../views/Coverage";
import {Button} from "@material-ui/core";

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
        this.setState({ids: input_arr});
        console.log(this.state);
    };

    handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            this.props.setCoverageState(this.state);
        }
    };

    render() {
        return (
            <form>
                <div>
                    <label htmlFor={this.props.id}>{this.props.label}</label>
                    <input type="text" id={this.props.id} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
                </div>
                <div>
                    <Button>GO</Button>
                </div>
            </form>
        )
    }
}