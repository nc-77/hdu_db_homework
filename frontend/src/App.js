import "./App.css";
import ROUTES, { RenderRoutes } from "./router/router";

function App() {
  return (
    <div style={{ display: "flex", height: "100vh", alignItems: "stretch" }}>
      <div style={{ flex: 0.3, backgroundColor: "#f2f2f2" }}></div>
      <div>
        <RenderRoutes routes={ROUTES} />
      </div>
    </div>
  );
}

export default App;

/* function App() {
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

export default App; */
