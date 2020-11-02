import React from "react";
import LoginPage from "pages/LoginPage";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import RegisterPage from "pages/RegisterPage";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </div>
  );
};

export default App;
