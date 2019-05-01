import React from 'react';
import './App.css';
import {InjectedChildrenProps} from "../store/AppState";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Coverage} from "./Coverage";

interface AppProps extends InjectedChildrenProps{

}

interface State {

}


class App extends React.Component<AppProps, State> {
    constructor(props: AppProps) {
        super(props);
        props.setAppState({message: "hello from App"});
    }

    render() {
        console.log(this.props);
        let loading
        if (this.props.getAppState().data === undefined) {
            loading = <div className="App">
                    loading data
                </div>;
        }
        return (
            <div className="App">
                <header className="App-header">
                    HEADER
                </header>
                {loading}
                <BrowserRouter>
                    <Switch>
                        <Route path="/coverage"
                               render={(routerProps) => <Coverage {...routerProps}
                                                                  setAppState={this.props.setAppState}
                                                                  getAppState={this.props.getAppState}/>}
                        />
                        <Route path="/" render={(routerProps) =>
                            <div>
                                home
                            </div>
                        }
                            />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
