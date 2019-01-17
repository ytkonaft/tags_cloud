import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";

const Router = () => (
  <Switch>
    {routes.map((route, indx) => {
      return <Route {...route} key={indx} />;
    })}
  </Switch>
);

export default Router;
