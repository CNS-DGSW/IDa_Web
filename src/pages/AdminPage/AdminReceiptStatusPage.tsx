import DefaultAdminHeader from "components/Admin/DefaultAdminHeader";
import React from "react";
import AdminReceiptStatus from "../../containers/Admin/AdminReceiptStatus/AdminReceiptStatusContainer";

const AdminReceiptStatusPage = () => {
  return (
    <DefaultAdminHeader>
      <AdminReceiptStatus />
    </DefaultAdminHeader>
  );
};

export default AdminReceiptStatusPage;
