import React, { useCallback, useEffect } from "react";
import { observer } from "mobx-react";
import Header from "components/common/Header";
import useStore from "lib/hooks/useStore";
import { RouteComponentProps, useHistory, withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";

interface HeaderContainerProps {
  theme?: boolean;
}

const HeaderContainer = ({ theme }: HeaderContainerProps & RouteComponentProps) => {
  const { store } = useStore();
  const history = useHistory();

  const {
    getInfo,
    changeLogin,
    login,
    name,
    email,
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

  const getInfoCallback = useCallback(async () => {
    if (localStorage.getItem("accessToken") && !name && !email) {
      changeLogin(true);
      await getInfo().catch((err: Error) => {
        tryLogout();
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
    };
  }, []);

  return (
    <>
      <Header
        theme={theme}
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
