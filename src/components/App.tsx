import React from "react";
import LoginPage from "pages/LoginPage";
import WritePage from "pages/WritePage";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import RegisterPage from "pages/RegisterPage";
import ChangePwPage from "pages/ChangePwPage";
import FindPage from "pages/FindPage";
import QnaPage from "pages/QnaPage";
import FaqPage from "pages/FaqPage";
import NoticePage from "pages/NoticePage";
import { ToastContainer } from "react-toastify";
import SecondTypeScorePage from "pages/AdminPage/SecondTypeScorePage";
import InterViewScorePage from "pages/AdminPage/InterViewScorePage";
import WritePrintPage from "pages/WritePrintPage";
import ReceiptStatusPage from "pages/AdminPage/AdminReceiptStatusPage";
import SchoolCityPage from "pages/AdminPage/AdminUserSchoolCity";
import UserRatePage from "pages/AdminPage/UserRate";
import UserListPage from "pages/AdminPage/UserListPage";
import UserListPassedPage from "pages/AdminPage/UserListPassed";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/write" component={WritePage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/changepw" component={ChangePwPage} />
        <Route exact path="/find" component={FindPage} />
        <Route exact path="/qna" component={QnaPage} />
        <Route exact path="/faq" component={FaqPage} />
        <Route exact path="/notice" component={NoticePage} />
        <Route
          exact
          path="/admin/receiptStatus"
          component={ReceiptStatusPage}
        />
        <Route exact path="/admin/schoolCity" component={SchoolCityPage} />
        <Route
          exact
          path="/admin/secondScore"
          component={SecondTypeScorePage}
        />
        <Route
          exact
          path="/admin/interviewScore"
          component={InterViewScorePage}
        />
        <Route exact path="/print" component={WritePrintPage} />\
        <Route exact path="/admin/userList" component={UserListPage} />
        <Route exact path="/admin/userRate" component={UserRatePage} />
        <Route
          exact
          path="/admin/userListPassed"
          component={UserListPassedPage}
        />
      </Switch>
    </div>
  );
};

export default App;
