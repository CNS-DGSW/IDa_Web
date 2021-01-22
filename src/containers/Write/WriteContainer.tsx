import React from "react";
import { observer } from "mobx-react";
import { useBeforeunload } from "react-beforeunload";
import Write from "components/Write/Write";
import useStore from "lib/hooks/useStore";

const WriteContainer = ({}) => {
  const { store } = useStore();
  const { page } = store.WriteStore;

  useBeforeunload((event) => event.preventDefault());

  return (
    <>
      <Write page={page} />
    </>
  );
};

export default observer(WriteContainer);
