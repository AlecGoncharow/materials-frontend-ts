import * as React from "react"
import acmData from "../data/acm.json";
import pdcData from "../data/pdc.json"

export interface InjectedChildrenProps {
    setAppState(newState: State): void;
    getAppState(): State
}

interface AppStateProps {
    children(props: InjectedChildrenProps): JSX.Element
}

interface FieldsShape {
    title: string;
    description: string;
    upstream_url: string;
    instance_of: string;
    authors: string[];
    topics: string[];
    data_sets: string[];
    languages: string[];
    courses: string[];
    classifications: string[];
}

export interface AssignmentShape {
    pk: number;
    fields: FieldsShape
}

export interface DataShape {
    assignments: AssignmentShape[];
    authors: string[];
    topics: string[];
    data_sets: string[];
    languages: string[];
    courses: string[];
    classifications: string[];
}

export interface ClassificationShape {
    [index: string]: {
        id: string;
        parent?: string;
        pk: number;
        hits: number;
        instance_of: string;
        depth: number;
    }
}

export interface State {
    message?: string;
    data?: DataShape;
    acm?: ClassificationShape;
    pdc?: ClassificationShape;
}


/*
    Container for App's State, exports functions to every child
    component that allow the augmentation and fetching of the App's top level State
 */
class AppState extends React.Component<AppStateProps, State> {
    constructor(props: AppStateProps) {
       super(props);
       this.state = {
            message: 'hello from AppState',
            acm: acmData,
            pdc: pdcData,
       };
    }

    componentDidMount(): void {
        let go = new Promise( (resolve, reject) => {
            fetch('https://unfrozen-materials-cs.herokuapp.com/data/')
                .then((response) => {
                    return response.json();
                })
                .then((resp_data) => {
                    this.setState({...this.state, data: resp_data})
                })
        })

        go.then(() => {
            console.log("data loaded")
        })
    }

    setAppState = (newState: State): void => {
        this.setState(newState);
    };

    getAppState= (): State => {
        return this.state;
    };

    render() {
        return this.props.children({
            setAppState: this.setAppState,
            getAppState: this.getAppState,
        })

    }
}

export default AppState;