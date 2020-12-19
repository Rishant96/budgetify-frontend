import React from "react";
import { Route, Redirect } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (user === null) {
          return children;
        }
        else {
          return (
            <Redirect
              to={{
                pathname: loggedInPath
              }}
            />
          );
        }
      }
    }
    />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user !== null) {
          return children;
        } else {
          return (
            <Redirect
              to={{
                pathname: "signin",
                state: { from: location }
              }}
            />
          );
        }
      }}
    />
  );
}
