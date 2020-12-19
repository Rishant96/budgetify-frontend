import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import * as ROUTES from "./constants/routes";
import { useAuthListener } from "./hooks/use-auth-listener";
import { Landing, Signin, Home, Creator, Charts } from "./pages";


export const App = () => {
  const user = useAuthListener();
  const isUser = user !== null;

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.HOME}
          path={ROUTES.SIGN_IN}
        >
          <Signin isUser={isUser} />
        </IsUserRedirect>


        <ProtectedRoute user={user} path={ROUTES.CHARTS + '/:id'}>
          <Charts isUser={isUser} userEmail={user ? user.email : null} />
        </ProtectedRoute>

        <ProtectedRoute user={user} path={ROUTES.CREATOR + '/:id'}>
          <Creator isUser={isUser} userEmail={user ? user.email : null} />
        </ProtectedRoute>

        <ProtectedRoute user={user} path={ROUTES.CREATOR}>
          <Creator isUser={isUser} userEmail={user ? user.email : null} />
        </ProtectedRoute>

        <ProtectedRoute user={user} path={ROUTES.HOME}>
          <Home isUser={isUser} userEmail={user ? user.email : null} />
        </ProtectedRoute>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.HOME}
          path={ROUTES.LANDING}
        >
          <Landing isUser={isUser} />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
};
