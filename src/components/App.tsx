import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import LoginPage from "pages/LoginPage";
import MainPage from "pages/MainPage";
import RegisterPage from "pages/RegisterPage";
import ChangePwPage from "pages/ChangePwPage";
import FindPage from "pages/FindPage";
import QnaPage from "pages/QnaPage";
import FaqPage from "pages/FaqPage";
import WritePrintPage from "pages/WritePrintPage";
import NoticePage from "pages/NoticePage";
import WritePage from "pages/WritePage";

const SecondTypeScorePage = React.lazy(
  () => import("pages/AdminPage/SecondTypeScorePage")
);
const ReceiptStatusPage = React.lazy(
  () => import("pages/AdminPage/AdminReceiptStatusPage")
);
const SchoolCityPage = React.lazy(
  () => import("pages/AdminPage/AdminUserSchoolCity")
);
const UserRatePage = React.lazy(() => import("pages/AdminPage/UserRate"));
const UserListPage = React.lazy(() => import("pages/AdminPage/UserListPage"));
const UserListPassedPage = React.lazy(
  () => import("pages/AdminPage/UserListPassed")
);
const InterViewScorePage = React.lazy(
  () => import("pages/AdminPage/InterViewScorePage")
);

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Switch>
        <Suspense fallback={<></>}>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/write" component={WritePage} />
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
          <Route exact path="/print" component={WritePrintPage} />
          <Route exact path="/admin/userList" component={UserListPage} />
          <Route exact path="/admin/userRate" component={UserRatePage} />
          <Route
            exact
            path="/admin/userListPassed"
            component={UserListPassedPage}
          />
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
