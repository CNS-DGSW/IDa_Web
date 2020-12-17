import React, { useCallback, useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import Header from "components/common/Header";
import useStore from "util/lib/hooks/useStore";
import { useHistory } from "react-router-dom";
import refresh from "util/lib/refresh";
import axios from "axios";
import { UserInfoResponse } from "util/types/Response";
import { useCookies } from "react-cookie";

const HeaderContainer = ({}) => {
  const { store } = useStore();
  const history = useHistory();

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();

  const { getInfo, login, profileBox, tryProfileBox, tryLogout } = store.AuthStore;

  const [cookie, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const HandleLogout = () => {
    console.log("asd");
    tryLogout();
    removeCookie("refreshToken");
    localStorage.removeItem("accessToken");
  };

  const getInfoCallback = useCallback(() => {
    if (!login && localStorage.getItem("accessToken")) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
        "accessToken"
      )}`;

      getInfo()
        .then((res: UserInfoResponse) => {
          setName(res.data.name);
          setEmail(res.data.email);
        })
        .catch(async (err: Error) => {
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
        name={name}
        email={email}
        HandleLogout={HandleLogout}
      />
    </>
  );
};

export default inject("store")(observer(HeaderContainer));
