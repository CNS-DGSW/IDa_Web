import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import ReceiptStatus from "../../../components/Admin/AdminReceiptStatus";
import useStore from "lib/hooks/useStore";
import { handleAdmin } from "lib/handleErrors";
import { useHistory } from "react-router-dom";
import { Receipt } from "util/types/ReceiptType";
import Swal from "sweetalert2";

const AdminReceiptStatusContainer = ({}) => {
  const { store } = useStore();
  const history = useHistory();

  const [receiptStatus, setReceiptStatus] = useState<Receipt[]>([]);
  const [search, setSearch] = useState<string>("");

  const { getReceiptStatus, getReceiptStatusExcel, handleCancelSubmit } =
    store.AdminStore;

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

  const cancelSubmit = useCallback(
    async (userIdx: number, name: string) => {
      Swal.fire({
        title: "주의!!",
        text: `해당 유저(${name}) 를 제출 취소하시겠습니까?`,
        showCancelButton: true,
        icon: "warning",
        cancelButtonText: "취소",
        confirmButtonText: "확인",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await handleCancelSubmit(userIdx).then((response) => {
            if (response.status === 200) {
              const arr = receiptStatus.slice();
              arr[arr.findIndex((data) => data.userIdx === userIdx)].isSubmit =
                false;
              setReceiptStatus(arr);
            }
          });
        }
      });
    },
    [receiptStatus]
  );

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
        handleCancelSubmit={cancelSubmit}
        setReceiptStatus={setReceiptStatus}
      />
    </>
  );
};

export default observer(AdminReceiptStatusContainer);
