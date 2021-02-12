import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useBeforeunload } from "react-beforeunload";
import Write from "components/Write/Write";
import useStore from "lib/hooks/useStore";
import { useLocation, withRouter } from "react-router-dom";
import useQuery from "lib/hooks/useQuery";

const WriteContainer = ({}) => {
  const { store } = useStore();
  const { page, pageHandle, handleUserIdx } = store.WriteStore;
  const { search } = useLocation();
  const query = useQuery();

  useBeforeunload((event) => event.preventDefault());

  useEffect(() => {
    if (Number(query.get("userIdx"))) {
      handleUserIdx(Number(query.get("userIdx")));
    }
  }, [search]);

  useEffect(() => {
    return () => {
      pageHandle(0);
      handleUserIdx(null);
    };
  }, []);

  return (
    <>
      <Write page={page} />
    </>
  );
};

export default withRouter(observer(WriteContainer));
