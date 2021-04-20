import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "../src/components/common/MainPage";
import Login from "../src/components/common/Login";
import Register from "../src/components/common/Register";
import BuyingPage from "../src/components/BuyerPage/BuyingPage";
import SellerPage from "./components/SellerPage/SellerPage";
import AdministratorPage from "./components/AdministratorPage/AdministratorPage";
import { Header } from "antd/lib/layout/layout";
import AppHeader from "./components/common/Header";
import AppFooter from "./components/common/Footer";

function App() {
  return (
    <>
      <Router>
        <Link to="/main">
          <Header>
            <AppHeader />
          </Header>
        </Link>
        <Switch>
          <Route path="/main">
            <MainPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/buying">
            <BuyingPage />
          </Route>
          <Route path="/seller">
            <SellerPage />
          </Route>
          <Route path="/administrator">
            <AdministratorPage />
          </Route>
        </Switch>
      </Router>
      <AppFooter />
    </>
  );
}

export default App;
