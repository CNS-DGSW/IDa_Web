import React from "react";
import UserListContainer from "containers/Admin/UserList/UserListContainer";
import DefaultAdminHeader from "components/Admin/DefaultAdminHeader";
const ApplicantStatusPage = () => {
  return (
    <DefaultAdminHeader>
      <UserListContainer />
    </DefaultAdminHeader>
  );
};

export default ApplicantStatusPage;
