import React from "react";
import { observer } from "mobx-react";
import WritePhoto from "../../components/WritePhoto";
import useStore from "util/lib/hooks/useStore";

const WritePhotoContainer = ({}) => {
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
      <WritePhoto page={page} nextPage={nextPage} prevPage={prevPage}></WritePhoto>
    </>
  );
};

export default observer(WritePhotoContainer);
