import React, { useState } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import WriteIntroduction from "../../components/WriteIntroduction";

const WriteIntroductionContainer = ({}) => {
  const { store } = useStore();
  const [file, setFile] = useState("");

  return (
    <>
      <WriteIntroduction file={file} setFile={setFile}></WriteIntroduction>
    </>
  );
};

export default observer(WriteIntroductionContainer);
