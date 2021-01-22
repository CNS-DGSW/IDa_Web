import React from "react";
import LoginPage from "pages/LoginPage";
import WritePage from "pages/WritePage";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import RegisterPage from "pages/RegisterPage";
import ChangePwPage from "pages/ChangePwPage";
import FindPage from "pages/FindPage";
import ApplyStatusPage from "pages/AdminPage/ApplyStatusPage";
import QnaPage from "pages/QnaPage";
import FaqPage from "pages/FaqPage";
import NoticePage from "pages/NoticePage";

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
        <Route exact path="/admin/applystatus" component={ApplyStatusPage} />
        <Route exact path="/find" component={FindPage} />
        <Route exact path="/qna" component={QnaPage} />
        <Route exact path="/faq" component={FaqPage} />
        <Route exact path="/notice" component={NoticePage} />
      </Switch>
    </div>
  );
};

export default App;
