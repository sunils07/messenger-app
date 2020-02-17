import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";

import LoginIndex from "./Containers/Login/LoginIndex";
import AppIndex from "./Containers/App/AppIndex";
import ChatIndex from "./Containers/Chat/ChatIndex";

const routeList = [{
    path: "/",
    exact: true,
    component: LoginIndex
},
{
    path: "/app",
    component: AppIndex
},
{
    path: "/app2",
    component: AppIndex,
    routes: [
        {
            path: "/app2/app1",
            component: AppIndex
        },
        {
            path: "/app2/app2",
            component: AppIndex
        }
    ]
}];

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => {
                return (<route.component {...props} routes={route.routes} />);
            }}
        />
    );
}

export default function Routes() {
    return (
        <Switch>
            {routeList.map((route, i) => {
                return (<RouteWithSubRoutes key={i} {...route} />);
            })}
        </Switch>
    );
}
