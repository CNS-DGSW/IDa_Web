import React from "react";
import ApplyStatusContainer from "containers/Admin/ApplyStatus/ApplyStatusContainer";
import DefaultAdminHeader from "components/Admin/DefaultAdminHeader";

const ApplyStatusPage = () => {
  return (
    <DefaultAdminHeader>
      <ApplyStatusContainer />
    </DefaultAdminHeader>
  );
};

export default ApplyStatusPage;
