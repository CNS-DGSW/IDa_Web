import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import WriteStudent from "../../../components/Write/WriteStudent";
import useStore from "lib/hooks/useStore";
import { UserInfoResponse } from "util/types/Response";
import Sex from "util/enums/Sex";
import moment from "moment";
import { useHistory, withRouter } from "react-router-dom";
import { toast } from "react-toastify";

const WriteStudentContainer = ({}) => {
  const { store } = useStore();

  const { getStudentInfo, editStudentInfo } = store.WriteStore;

  const history = useHistory();

  const [name, setName] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const [sex, setSex] = useState<Sex | null>(null);
  const [studentTel, setStudentTel] = useState<string>("");

  const [isChanged, setIsChanged] = useState<boolean>(false);

  const getStudentInfoCallback = useCallback(async () => {
    await getStudentInfo()
      .then((res: UserInfoResponse) => {
        setName(res.data.name || "");
        setBirth(moment(res.data.birth || "").format("yyyy-MM-DD"));
        setSex(res.data.sex);
        setStudentTel(res.data.studentTel || "");
      })
      .catch((err: Error) => {
        if (err.message.includes("401") || err.message.includes("410")) {
          history.push("/login");
          toast.warn("로그인이 필요합니다.");
        } else {
          toast.error("서버 오류입니다.");
        }
      });
  }, []);

  const onSave = useCallback(async () => {
    if (name !== "" && birth !== "" && sex !== null && studentTel !== "") {
      await editStudentInfo(name, birth, sex, studentTel).catch((err: Error) => {
        if (err.message.includes("401") || err.message.includes("410")) {
          history.push("/login");
          toast.warn("로그인이 필요합니다.");
        } else {
          toast.error("서버 오류입니다.");
        }
      });
      setIsChanged(false);
      return true;
    } else {
      toast.warn("빈칸을 채워주세요.");
      return false;
    }
  }, [name, birth, sex, studentTel]);

  useEffect(() => {
    getStudentInfoCallback();
  }, [getStudentInfoCallback]);

  useEffect(() => {
    if (studentTel) {
      if (studentTel.length === 10) {
        setStudentTel(studentTel.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
      }
      if (studentTel.length === 13) {
        setStudentTel(studentTel.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
      }
    }
  }, [studentTel]);

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
      ></WriteStudent>
    </>
  );
};

export default observer(withRouter(WriteStudentContainer));
