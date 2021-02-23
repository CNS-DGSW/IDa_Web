import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import ReceiptStatus from "../../../components/Admin/AdminReceiptStatus";
import useStore from "lib/hooks/useStore";
import { handleLogin } from "lib/handleErrors";
import { useHistory } from "react-router-dom";
import { Receipt } from "util/types/ReceiptType";

const AdminReceiptStatusContainer = ({}) => {
  const { store } = useStore();
  const history = useHistory();

  const [receiptStatus, setReceiptStatus] = useState<Receipt[]>([]);
  const [search, setSearch] = useState<string>("");

  const { getReceiptSatus } = store.AdminStore;

  const getApplyTypeCallback = useCallback(() => {
    getReceiptSatus()
      .then((res) => {
        setReceiptStatus(res.data);
      })
      .catch((err: Error) => {
        handleLogin(err, history);
      });
  }, []);

  useEffect(() => {
    getApplyTypeCallback();
  }, [getApplyTypeCallback]);

  return (
    <>
      <ReceiptStatus
        receiptStatus={receiptStatus}
        setSearch={setSearch}
        search={search}
      ></ReceiptStatus>
    </>
  );
};

export default observer(AdminReceiptStatusContainer);
