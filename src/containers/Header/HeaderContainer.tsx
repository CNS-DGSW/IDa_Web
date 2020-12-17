import React, { useCallback, useEffect } from "react";
import { inject, observer } from "mobx-react";
import Header from "components/common/Header";
import useStore from "util/lib/hooks/useStore";
import { useHistory } from "react-router-dom";
import refresh from "util/lib/refresh";
import axios from "axios";

const HeaderContainer = ({}) => {
  const { store } = useStore();
  const history = useHistory();

  const { getInfo, login, profileBox, tryProfileBox } = store.AuthStore;

  const getInfoCallback = useCallback(() => {
    if (!login && localStorage.getItem("accessToken")) {
      console.log("asd");
      axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
        "accessToken"
      )}`;
      getInfo().catch(async (err: Error) => {
        if (err.message.indexOf("410")) {
          if (await refresh()) {
            getInfo().catch((err: Error) => {
              console.log("권한 없음");
            });
          }
        }
      });
    }
  }, [login]);

  useEffect(() => {
    getInfoCallback();
  }, [getInfoCallback]);

  return (
    <>
      <Header
        login={login}
        history={history}
        profileBox={profileBox}
        tryProfileBox={tryProfileBox}
      />
    </>
  );
};

export default inject("store")(observer(HeaderContainer));
