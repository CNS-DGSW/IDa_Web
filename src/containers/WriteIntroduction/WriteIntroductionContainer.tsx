import React from "react";
import { observer } from "mobx-react";
import useStore from "util/lib/hooks/useStore";
import WriteIntroduction from "../../components/WriteIntroduction";

const WriteIntroductionContainer = ({}) => {
  const { store } = useStore();
  const { page, pageHandle } = store.WriteStore;

  const nextPage = () => {
    pageHandle(page + 1);
  };

  const prevPage = () => {
    pageHandle(page - 1);
  };
  return (
    <>
      <WriteIntroduction
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
      ></WriteIntroduction>
    </>
  );
};

export default observer(WriteIntroductionContainer);
