import React, { Suspense, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./AppStyle.scss";

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
import NotFoundPage from "pages/NotFoundPage";
import MainAlert from "./MainAlert/MainAlert";

const currentDate = new Date();

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
  const [isTest, setIsTest] = useState<boolean>(true);
  useEffect(() => {
    const targetDate = new Date(currentDate.getFullYear(), 9, 10, 9, 0, 0);
    if (currentDate >= targetDate) {
      // console.log("10월 10일 9시 이후입니다.");
      setIsTest(false);
    } else {
      setIsTest(true);
    }
  }, []);
  return (
    <div className={!isTest ? "App" : ""}>
      {!isTest && <MainAlert />}
      <div className={!isTest ? "BlurContainer" : ""}>
        <ToastContainer />
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/write" element={<WritePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/changepw" element={<ChangePwPage />} />
            <Route path="/find" element={<FindPage />} />
            <Route path="/notice" element={<NoticePage />} />
            <Route
              path="/admin/receiptStatus"
              element={<ReceiptStatusPage />}
            />
            <Route path="/admin/schoolCity" element={<SchoolCityPage />} />
            <Route
              path="/admin/secondScore"
              element={<SecondTypeScorePage />}
            />
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
            <Route path={"*"} element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

{
  /* <Route  path="/qna" element={QnaPage} />
          <Route  path="/faq" element={FaqPage} /> */
}
export default App;
