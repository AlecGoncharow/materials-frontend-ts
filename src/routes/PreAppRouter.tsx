import {BrowserRouter, Route} from "react-router-dom";
import App from "../views/App";
import * as React from "react"
import {InjectedChildrenProps} from "../store/AppState";

interface RouterProps extends InjectedChildrenProps{

}

/*
 * Preemptive router before entering App, passing AppState functions
 */
export const PreAppRouter = (props: RouterProps) => {
    console.log(props);
    return (
        <BrowserRouter>
            <Route path="/" render={(routerProps) => <App {...routerProps}
                                               setAppState={props.setAppState}
                                               getAppState={props.getAppState}/>}
            />
        </BrowserRouter>
    )
}