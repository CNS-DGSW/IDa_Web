import React from "react";
import { observer } from "mobx-react";
import useStore from "util/lib/hooks/useStore";
import WriteIntroduction from "../../components/WriteIntroduction";

const WriteIntroductionContainer = ({}) => {
  const { store } = useStore();

  return (
    <>
      <WriteIntroduction></WriteIntroduction>
    </>
  );
};

export default observer(WriteIntroductionContainer);
