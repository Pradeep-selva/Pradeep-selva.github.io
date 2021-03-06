import React from "react";
import { Switch, Route } from "react-router-dom";
import { RouteNames } from "../Configs";
import { About, Contact, Projects, AllProjects, Home, Blogs } from "../Pages";

const Routes = () => (
  <Switch>
    <Route exact path={RouteNames.HOME} component={Home} />
    <Route path={RouteNames.PROJECTS} component={Projects} />
    <Route path={RouteNames.ABOUT} component={About} />
    <Route path={RouteNames.ALLPROJECTS} component={AllProjects} />
    <Route path={RouteNames.CONTACT} component={Contact} />
    <Route path={RouteNames.BLOGS} component={Blogs} />
  </Switch>
);

export default Routes;
