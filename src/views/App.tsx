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
        if (this.props.getAppState().data === undefined) {
            return (
                <div className="App">
                    loading data
                </div>
            );
        }
        return (
            <div className="App">
                <header className="App-header">
                    HEADER
                </header>
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
