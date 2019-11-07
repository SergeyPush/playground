import React from "react";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ShowsPage from "./pages/ShowsPage";
import routes from "./routes";

import "./App.css";
import style from "./components/styles/App.module.css";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className={style.container}>
        <Switch>
          <Route path={routes.ABOUT} render={props => <h1>About page</h1>} />
          <Route path={routes.SHOWS} component={ShowsPage} />
          <Route path={routes.HOME} component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
