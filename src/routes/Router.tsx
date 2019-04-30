import {BrowserRouter, Route} from "react-router-dom";
import App from "../app/App";
import * as React from "react"
import {InjectedChildrenProps} from "../app/AppState";

interface RouterProps extends InjectedChildrenProps{

}

export const Router = (props: RouterProps) => {
    console.log(props.getAppState());
    return (
        <BrowserRouter>
            <Route path="/" render={() => <App {...props}
                                               setAppState={props.setAppState}
                                               getAppState={props.getAppState}/>}
            />
        </BrowserRouter>
    )
}