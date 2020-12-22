import React from "react";
import LoginPage from "pages/LoginPage";
import WritePage from "pages/WritePage";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import RegisterPage from "pages/RegisterPage";
import ChangePwPage from "pages/ChangePwPage";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/write" component={WritePage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/changepw" component={ChangePwPage} />
      </Switch>
    </div>
  );
};

export default App;
