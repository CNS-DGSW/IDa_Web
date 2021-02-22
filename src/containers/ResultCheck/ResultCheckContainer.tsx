import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import ResultCheck from "components/ResultCheck";
import useStore from "lib/hooks/useStore";

const ResultCheckContainer = ({}) => {
  //Submit이 인터넷 접수 isPrinted 우편
  const [submit, setSubmit] = useState<boolean>();
  const [print, setPrint] = useState<boolean>();
  const [pass, setPassed] = useState<boolean | null>(null);
  const [clicked, setClicked] = useState<boolean>(false);
  const [coment, setComent] = useState<string>("");

  const { store } = useStore();
  const { tryGetStatus } = store.StatusStore;

  //문구좀 바꿔주셈
  const passCheck = () => {
    if (pass === null) {
      setComent("아직 결과가 나오지 않았습니다");
    } else if (pass === false) {
      setComent("죄송합니다. 불합격입니다");
    } else {
      setComent("1차 합격입니다. 축하드립니다");
    }
  };

  const handleGetStatus = () => {
    tryGetStatus()
      .then((res) => {
        setSubmit(res.data.isSubmit);
        setPrint(res.data.isPrintedApplicationArrived);
        setPassed(res.data.isPassedFirstApply);
        passCheck();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleGetStatus();
  });

  return (
    <ResultCheck
      submit={submit}
      print={print}
      pass={pass}
      clicked={clicked}
      setClicked={setClicked}
      coment={coment}
    />
  );
};

export default observer(ResultCheckContainer);
