import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import WriteParents from "../../../components/Write/WriteParents";
import Relation from "util/enums/Relation";
// import type { Address } from "react-daum-postcode";
import { ParentInfoResponse } from "util/types/Response";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { handleGetWriteError, handleWriteError } from "lib/handleErrors";
import moment from "moment";

const WriteParentContainer = ({}) => {
  const { store } = useStore();
  const history = useNavigate();

  const [parentName, setParentName] = useState<string>("");
  const [parentRelation, setParentRelation] = useState<Relation | null>(null);
  const [parentTel, setParentTel] = useState<string>("");
  const [parentBirth, setParentBirth] = useState<string>("1978");
  const [address, setAddress] = useState<string>("");
  const [detailAddress, setDetailAddress] = useState<string>("");
  const [postCode, setPostCode] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isChanged, setIsChanged] = useState<boolean>(false);

  const { editParentInfo, getParentInfo } = store.WriteStore;

  //주소 설정 함수
  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddress(fullAddress);
    setIsOpen(false);
    setIsChanged(true);
    setPostCode(data.zonecode);
  };

  // 전화번호 - 추가
  useEffect(() => {
    if (parentTel) {
      if (parentTel.length === 10) {
        setParentTel(parentTel.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
      }
      if (parentTel.length === 13) {
        setParentTel(
          parentTel
            .replace(/-/g, "")
            .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
        );
      }
    }
  }, [parentTel]);

  //변경사항 저장 함수
  const onSave = useCallback(async () => {
    let flag = true;
    const passRule = /^\d{3}-\d{3,4}-\d{4}$/;

    if (!passRule.test(parentTel)) {
      toast.warning("올바르지 않은 전화번호입니다. '-' 를 포함하여주세요.");
      flag = false;
    } else if (
      parentName !== "" &&
      parentTel !== "" &&
      parentRelation !== null &&
      parentBirth !== "" &&
      address !== "" &&
      postCode !== ""
    ) {
      await editParentInfo(
        address,
        parentName,
        parentRelation,
        parentBirth,
        parentTel,
        detailAddress,
        postCode
      ).catch((err) => {
        handleWriteError(err, history);
        flag = false;
      });
      setIsChanged(false);
    } else {
      toast.warning("빈칸을 채워주세요.");
      flag = false;
    }
    return flag;
  }, [
    parentTel,
    parentName,
    parentRelation,
    parentBirth,
    address,
    postCode,
    editParentInfo,
    detailAddress,
    history,
  ]);

  //학부모 정보 받아오기
  const getParentInfoCallback = useCallback(() => {
    getParentInfo()
      .then((res: ParentInfoResponse) => {
        setAddress(res.data.address || "");
        setParentName(res.data.parentName || "");
        setParentRelation(res.data.parentRelation);
        setParentTel(res.data.parentTel || "");
        setParentBirth(
          res.data.parentBirth !== null
            ? moment(res.data.parentBirth).format("yyyy-MM-DD")
            : ""
        );
        setPostCode(res.data.postCode || "");
        setDetailAddress(res.data.detailAddress || "");
      })
      .catch((err) => {
        handleGetWriteError(err, history);
      });
  }, [getParentInfo, history]);

  useEffect(() => {
    getParentInfoCallback();
  }, [getParentInfoCallback]);

  useEffect(() => {
    return () => {
      setAddress("");
      setParentTel("");
      setParentName("");
      setParentRelation(null);
      setParentBirth("");
      setPostCode("");
    };
  }, []);

  return (
    <>
      <WriteParents
        parentName={parentName}
        setParentName={setParentName}
        parentRelation={parentRelation}
        setParentRelation={setParentRelation}
        parentTel={parentTel}
        setParentTel={setParentTel}
        parentBirth={parentBirth}
        setParentBirth={setParentBirth}
        detailAddress={detailAddress}
        setDetailAddress={setDetailAddress}
        address={address}
        handleComplete={handleComplete}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSave={onSave}
        isChanged={isChanged}
        setIsChanged={setIsChanged}
      />
    </>
  );
};

export default observer(WriteParentContainer);
