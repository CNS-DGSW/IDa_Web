import React from "react";
import UserResultContainer from "containers/Admin/UserResult/UserResultContainer";
import DefaultAdminHeader from "components/Admin/DefaultAdminHeader";

const UserRatePage = () => {
  return (
    <DefaultAdminHeader>
      <UserResultContainer />
    </DefaultAdminHeader>
  );
};

export default UserRatePage;
