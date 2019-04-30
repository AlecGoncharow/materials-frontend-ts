import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {InjectedChildrenProps} from "./AppState";

interface AppProps extends InjectedChildrenProps{

}

interface State {

}


class App extends React.Component<AppProps, State> {
  constructor(props: AppProps) {
    super(props)
      props.setAppState({message: "hello from App"});
  }


  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React!
            </a>
          </header>
        </div>
    );
  }
}

export default App;
