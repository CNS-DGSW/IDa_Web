import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useBeforeunload } from "react-beforeunload";
import Write from "components/Write/Write";
import useStore from "lib/hooks/useStore";
import { useHistory, withRouter } from "react-router-dom";
import { toast } from "react-toastify";

const WriteContainer = ({}) => {
  const { store } = useStore();
  const { page, pageHandle } = store.WriteStore;

  useBeforeunload((event) => event.preventDefault());

  useEffect(() => {
    return () => pageHandle(0);
  }, []);

  return (
    <>
      <Write page={page} />
    </>
  );
};

export default withRouter(observer(WriteContainer));
