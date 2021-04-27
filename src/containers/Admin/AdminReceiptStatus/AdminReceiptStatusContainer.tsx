import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import ReceiptStatus from "../../../components/Admin/AdminReceiptStatus";
import useStore from "lib/hooks/useStore";
import { handleAdmin } from "lib/handleErrors";
import { useHistory } from "react-router-dom";
import { Receipt } from "util/types/ReceiptType";

const AdminReceiptStatusContainer = ({}) => {
  const { store } = useStore();
  const history = useHistory();

  const [receiptStatus, setReceiptStatus] = useState<Receipt[]>([]);
  const [search, setSearch] = useState<string>("");

  const {
    getReceiptStatus,
    getReceiptStatusExcel,
    handleCancelSubmit,
  } = store.AdminStore;

  //입학 전형 원부 받아오기
  const getReceiptStatusCallBack = useCallback(() => {
    getReceiptStatus()
      .then((res) => {
        setReceiptStatus(res.data);
      })
      .catch((err) => {
        handleAdmin(err, history);
      });
  }, []);

  useEffect(() => {
    getReceiptStatusCallBack();
  }, [getReceiptStatusCallBack]);

  return (
    <>
      <ReceiptStatus
        receiptStatus={receiptStatus}
        setSearch={setSearch}
        search={search}
        getReceiptStatusExcel={getReceiptStatusExcel}
        handleCancelSubmit={handleCancelSubmit}
        setReceiptStatus={setReceiptStatus}
      />
    </>
  );
};

export default observer(AdminReceiptStatusContainer);
