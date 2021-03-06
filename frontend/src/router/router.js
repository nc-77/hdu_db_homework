import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Market from "../components/Market";
import BuyerPage from "../pages/BuyerPage";
import Hero from "../pages/Hero";
import PersonalCenter from "../components/PersonalCenter";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import SellerPage from "../pages/SellerPage";
import ManageProductCenter from "../components/ManageProductCenter";
import BuyerOrderCenter from "../components/BuyerOrderCenter";
import SellerOrderCenter from "../components/SellerOrderCenter";

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
        component: () => (
          <BuyerPage>
            <Market />
          </BuyerPage>
        ),
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
            <BuyerOrderCenter />
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
              <Market />
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
        component: () => (
          <SellerPage>
            <ManageProductCenter />
          </SellerPage>
        ),
      },

      {
        path: "/seller/putOnProduct",
        key: "SELLER_PUTONPRODUCT",
        exact: true,
        component: () => (
          <SellerPage>
            <ManageProductCenter />
          </SellerPage>
        ),
      },
      {
        path: "/seller/order",
        key: "SELLER_ORDER",
        exact: true,
        component: () => (
          <SellerPage>
            <SellerOrderCenter />
          </SellerPage>
        ),
      },
      {
        path: "/seller/personalCenter",
        key: "SELLER_PERSONALCENTER",
        exact: true,
        component: () => (
          <SellerPage>
            <PersonalCenter />
          </SellerPage>
        ),
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
    <HashRouter>
      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
        <Route component={() => <h1>Not Found!</h1>} />
      </Switch>
    </HashRouter>
  );
}
