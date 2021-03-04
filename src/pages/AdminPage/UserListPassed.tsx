import React from "react";
import UserListPassedContainer from "containers/Admin/UserListPassed/UserListPassedContainer";
import DefaultAdminHeader from "components/Admin/DefaultAdminHeader";

const UserRatePage = () => {
  return (
    <DefaultAdminHeader>
      <UserListPassedContainer />
    </DefaultAdminHeader>
  );
};

export default UserRatePage;
