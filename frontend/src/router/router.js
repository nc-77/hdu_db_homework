import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Market from "../components/Market";
import PersonalCenter from "../components/PersonalCenter";
import BuyerPage from "../pages/BuyerPage";
import Hero from "../pages/Hero";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import Modal from "../components/Modal";
import TitlebarGridList from "../components/MarketTest";

const ROUTES = [
  {
    path: "/",
    key: "ROOT",
    exact: true,
    component: () => <Hero />,
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
    path: "/buyer",
    key: "BUYER",
    component: RenderRoutes,
    routes: [
      {
        path: "/buyer",
        key: "BUYER_ROOT",
        exact: true,
        component: () => <BuyerPage />,
      },
      {
        path: "/buyer/personalCenter",
        key: "BUYER_PERSONALCENTER",
        exact: true,
        component: () => (
          <BuyerPage>
            <PersonalCenter />
          </BuyerPage>
        ),
      },
      {
        path: "/buyer/contact",
        key: "BUYER_CONTACT",
        exact: true,
        component: () => (
          <BuyerPage>
            <h1>1</h1>
          </BuyerPage>
        ),
      },
      {
        path: "/buyer/market",
        key: "BUYER_MARKET",
        exact: true,
        component: () => (
          <>
            <BuyerPage>
              {/*  <Market /> */}
              <TitlebarGridList />
            </BuyerPage>
          </>
        ),
      },
    ],
  },
  {
    path: "/seller",
    key: "SELLER",
    component: RenderRoutes,
    routes: [
      {
        path: "/seller",
        key: "SELLER_ROOT",
        exact: true,
        component: () => <h1>App Index</h1>,
      },
      {
        path: "/seller/personalCenter",
        key: "SELLER_PAGE",
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
