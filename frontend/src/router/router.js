import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Hero from "../pages/Hero";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";

const ROUTES = [
  {
    path: "/",
    key: "ROOT",
    exact: true,
    component: Hero,
  },
  {
    path: "/login",
    key: "LOGIN",
    exact: true,
    component: () => <Login />,
  },
  {
    path: "/register",
    key: "REGISTER",
    exact: true,
    component: () => <Register />,
  },
  {
    path: "/app",
    key: "APP",
    component: RenderRoutes,
    routes: [
      {
        path: "/app",
        key: "APP_ROOT",
        exact: true,
        component: () => <h1>App Index</h1>,
      },
      {
        path: "/app/page",
        key: "APP_PAGE",
        exact: true,
        component: () => <h1>App Page</h1>,
      },
    ],
  },
];

export default ROUTES;

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
        <Route component={() => <h1>Not Found!</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
