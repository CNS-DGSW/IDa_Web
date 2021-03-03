import React from "react";
import AdminReceiptStatus from "../../containers/Admin/AdminReceiptStatus/AdminReceiptStatusContainer";
import DefaultAdminHeader from "components/Admin/DefaultAdminHeader";

const AdminReceiptStatusPage = () => {
  return (
    <DefaultAdminHeader>
      <AdminReceiptStatus />
    </DefaultAdminHeader>
  );
};

export default AdminReceiptStatusPage;
