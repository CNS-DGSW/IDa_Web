import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import WriteStudent from "../../components/WriteStudent";
import useStore from "util/lib/hooks/useStore";
import { UserInfoResponse } from "util/types/Response";
import Sex from "util/enums/Sex";
import moment from "moment";
import { useHistory, withRouter } from "react-router-dom";

const WriteStudentContainer = ({}) => {
  const { store } = useStore();

  const { getStudentInfo, editStudentInfo } = store.WriteStore;

  const history = useHistory();

  const [name, setName] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const [sex, setSex] = useState<Sex | null>(null);
  const [studentTel, setStudentTel] = useState<string>("");

  const [isChanged, setIsChanged] = useState<boolean>(false);

  const getStudentInfoCallback = useCallback(() => {
    getStudentInfo()
      .then((res: UserInfoResponse) => {
        setName(res.data.name);
        setBirth(moment(res.data.birth).format("yyyy-MM-DD"));
        setSex(res.data.sex);
        setStudentTel(res.data.studentTel || "");
      })
      .catch((err: Error) => {
        if (err.message.includes("401")) {
          history.push("/login");
        }
      });
  }, []);

  const onSave = useCallback(() => {
    if (name !== "" && birth !== "" && sex !== null && studentTel !== "") {
      editStudentInfo(name, birth, sex, studentTel);
      return true;
    } else {
      return false;
    }
  }, [name, birth, sex, studentTel]);

  useEffect(() => {
    getStudentInfoCallback();
  }, []);

  useEffect(() => {
    if (studentTel.length === 10) {
      setStudentTel(studentTel.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (studentTel.length === 13) {
      setStudentTel(
        studentTel.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
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
