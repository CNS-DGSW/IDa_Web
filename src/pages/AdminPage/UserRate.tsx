import React from "react";
import UserRateContainer from "containers/Admin/UserRate/UserRateContainer";
import DefaultAdminHeader from "components/Admin/DefaultAdminHeader";

const UserRatePage = () => {
  return (
    <DefaultAdminHeader>
      <UserRateContainer />
    </DefaultAdminHeader>
  );
};

export default UserRatePage;
