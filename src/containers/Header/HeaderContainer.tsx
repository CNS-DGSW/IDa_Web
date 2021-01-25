import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import Header from "components/common/Header";
import useStore from "lib/hooks/useStore";
import { useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import { UserInfoResponse } from "util/types/Response";
import { useCookies } from "react-cookie";

const HeaderContainer = ({}) => {
  const { store } = useStore();
  const history = useHistory();

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();

  const {
    getInfo,
    login,
    profileBox,
    tryProfileBox,
    tryLogout,
    tryCloseModal,
  } = store.AuthStore;

  const [cookie, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const HandleLogout = () => {
    tryLogout();
    removeCookie("refreshToken");
    localStorage.removeItem("accessToken");
    history.push("/");
  };

  const getInfoCallback = useCallback(() => {
    if (localStorage.getItem("accessToken") && !login) {
      getInfo()
        .then((res: UserInfoResponse) => {
          setName(res.data.name);
          setEmail(res.data.email);
        })
        .catch(async (err: Error) => {
          if (err.message.indexOf("401")) {
            console.log("권한 없음");
          }
        });
    }
  }, [login]);

  useEffect(() => {
    getInfoCallback();
  }, [getInfoCallback]);

  useEffect(() => {
    return () => {
      tryCloseModal();
      setName("");
      setEmail("");
    };
  }, []);

  return (
    <>
      <Header
        login={login}
        profileBox={profileBox}
        tryProfileBox={tryProfileBox}
        name={name}
        email={email}
        HandleLogout={HandleLogout}
      />
    </>
  );
};

export default withRouter(observer(HeaderContainer));
