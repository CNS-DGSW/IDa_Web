import React from "react";
import { observer } from "mobx-react";
import WritePhoto from "../../components/WritePhoto";
import useStore from "lib/hooks/useStore";

const WritePhotoContainer = ({}) => {
  const { store } = useStore();

  return (
    <>
      <WritePhoto></WritePhoto>
    </>
  );
};

export default observer(WritePhotoContainer);
