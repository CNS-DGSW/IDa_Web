import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import LoginPage from "pages/LoginPage";
import MainPage from "pages/MainPage";
import RegisterPage from "pages/RegisterPage";
import ChangePwPage from "pages/ChangePwPage";
import FindPage from "pages/FindPage";
// import QnaPage from "pages/QnaPage";
// import FaqPage from "pages/FaqPage";
import WritePrintPage from "pages/WritePrintPage";
import NoticePage from "pages/NoticePage";
import WritePage from "pages/WritePage";

const SecondTypeScorePage = React.lazy(
  () => import("pages/AdminPage/SecondTypeScorePage")
);

const SecondDetailSocre = React.lazy(
  () => import("pages/AdminPage/SecondDetailScore")
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

const UserResultPage = React.lazy(
  () => import("pages/AdminPage/UserResultPage")
);

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Suspense fallback={<></>}>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/changepw" element={<ChangePwPage />} />
          <Route path="/find" element={<FindPage />} />
          {/* <Route  path="/qna" element={QnaPage} />
          <Route  path="/faq" element={FaqPage} /> */}
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/admin/receiptStatus" element={<ReceiptStatusPage />} />
          <Route path="/admin/schoolCity" element={<SchoolCityPage />} />
          <Route path="/admin/secondScore" element={<SecondTypeScorePage />} />
          <Route
            path="/admin/interviewScore"
            element={<InterViewScorePage />}
          />
          <Route path="/print" element={<WritePrintPage />} />
          <Route path="/admin/userList" element={<UserListPage />} />
          <Route path="/admin/userRate" element={<UserRatePage />} />
          <Route
            path="/admin/userListPassed"
            element={<UserListPassedPage />}
          />
          <Route path="/admin/userResultPage" element={<UserResultPage />} />
          <Route path="/admin/detailScore" element={<SecondDetailSocre />} />
        </Suspense>
      </Routes>
    </div>
  );
};

export default App;
