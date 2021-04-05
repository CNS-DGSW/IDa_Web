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
    getReceiptSatus,
    getReceiptSatusExcel,
    handleCancelSubmit,
  } = store.AdminStore;

  const getReceiptSatusCallBack = useCallback(() => {
    getReceiptSatus()
      .then((res) => {
        setReceiptStatus(res.data);
      })
      .catch((err) => {
        handleAdmin(err, history);
      });
  }, []);

  useEffect(() => {
    getReceiptSatusCallBack();
  }, [getReceiptSatusCallBack]);

  return (
    <>
      <ReceiptStatus
        receiptStatus={receiptStatus}
        setSearch={setSearch}
        search={search}
        getReceiptSatusExcel={getReceiptSatusExcel}
        handleCancelSubmit={handleCancelSubmit}
        setReceiptStatus={setReceiptStatus}
      />
    </>
  );
};

export default observer(AdminReceiptStatusContainer);
