import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import WriteStudent from "../../../components/Write/WriteStudent";
import { UserInfoResponse } from "util/types/Response";
import Sex from "util/enums/Sex";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { handleWriteError, handleGetWriteError } from "lib/handleErrors";
import useQuery from "lib/hooks/useQuery";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { nameAtom } from "stores/Auth/AuthAtom";
import { editStudentInfo, getStudentInfo } from "stores/Write/util";
import { userIdxAtom } from "stores/Write/WriteAtom";

const WriteStudentContainer = ({}) => {
  const setNameAtom = useSetRecoilState<string>(nameAtom);
  const userIdx = useRecoilValue(userIdxAtom);
  const editStudentInfoAtom = editStudentInfo;
  // const { getStudentInfo, editStudentInfo } = store.WriteStore;

  const history = useNavigate();

  const [name, setName] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const [sex, setSex] = useState<Sex | null>(null);
  const [studentTel, setStudentTel] = useState<string>("");

  const query = useQuery();

  const [isChanged, setIsChanged] = useState<boolean>(false);

  const getStudentInfoCallback = useCallback(async () => {
    await getStudentInfo({ userIdx: Number(query.get("userIdx")) })
      .then((res: UserInfoResponse) => {
        console.log("dfdf", res, userIdx);

        setName(res.data.name || "");
        setBirth(
          isNaN(Date.parse(res.data.birth ? res.data.birth.toString() : ""))
            ? ""
            : moment(res.data.birth).format("yyyy-MM-DD")
        );
        setSex(res.data.sex);
        setStudentTel(res.data.studentTel || "");
      })
      .catch((err: any) => {
        handleGetWriteError(err, history);
      });
  }, []);

  // 전화번호 - 추가
  useEffect(() => {
    if (studentTel) {
      if (studentTel.length === 10) {
        setStudentTel(studentTel.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
      }
      if (studentTel.length === 13) {
        setStudentTel(
          studentTel
            .replace(/-/g, "")
            .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
        );
      }
    }
  }, [studentTel]);

  const onSave = useCallback(async () => {
    let flag = true;
    const passRule = /^\d{3}-\d{3,4}-\d{4}$/;

    if (!passRule.test(studentTel)) {
      toast.warning("올바르지 않은 전화번호입니다. '-' 를 포함하여주세요.");
      flag = false;
    } else if (name !== "" && birth !== "" && sex !== null) {
      await editStudentInfoAtom({
        name,
        birth,
        sex,
        studentTel,
        userIdx,
      }).catch((err: any) => {
        handleWriteError(err, history);
        flag = false;
      });

      setNameAtom(name);
      setIsChanged(false);
    } else {
      toast.warning("빈칸을 채워주세요.");
      flag = false;
    }
    return flag;
  }, [name, birth, sex, studentTel]);

  useEffect(() => {
    getStudentInfoCallback();
  }, [getStudentInfoCallback]);

  useEffect(() => {
    return () => {
      setName("");
      setBirth("");
      setSex(null);
      setStudentTel("");
    };
  }, []);

  return (
    <>
      <WriteStudent
        onSave={onSave}
        name={name}
        setName={setName}
        birth={birth}
        setBirth={setBirth}
        sex={sex}
        setSex={setSex}
        studentTel={studentTel}
        setStudentTel={setStudentTel}
        isChanged={isChanged}
        setIsChanged={setIsChanged}
      />
    </>
  );
};

export default observer(WriteStudentContainer);
