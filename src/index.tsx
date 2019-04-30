import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppState from "./store/AppState";
import {PreAppRouter} from "./routes/PreAppRouter";

ReactDOM.render(
    <AppState>
        {injectedProps => (
            <PreAppRouter setAppState={injectedProps.setAppState} getAppState={injectedProps.getAppState}/>
            )}
    </AppState>,
    document.getElementById('root'));

// If you want your views to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
