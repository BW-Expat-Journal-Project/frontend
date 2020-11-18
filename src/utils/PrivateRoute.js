import React from "react";
import { Route, Redirect } from "react-router-dom";
import { storageKeyToken } from "../config";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (window.sessionStorage.getItem(storageKeyToken)) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
