import React, { useCallback, useEffect } from "react";
import { observer } from "mobx-react";
import Header from "components/common/Header";
import useStore from "lib/hooks/useStore";
import { RouteComponentProps, useHistory, withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";

interface HeaderContainerProps {
  theme?: boolean;
  style?: React.CSSProperties;
}

const HeaderContainer = ({
  theme,
  style,
}: HeaderContainerProps & RouteComponentProps) => {
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

  const { statusModal, closeSatusModal, trySatusModal } = store.StatusStore;

  const [cookie, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const openStatusModal = () => {};

  const HandleLogout = () => {
    tryLogout();
    removeCookie("refreshToken");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("expireAt");
    history.push("/");
  };

  const getInfoCallback = useCallback(async () => {
    if (localStorage.getItem("accessToken") && !name && !email) {
      changeLogin(true);
      await getInfo().catch((err: Error) => {
        HandleLogout();
      });
    }
  }, [login]);

  const closeAllModal = () => {
    if (!profileBox) {
      closeSatusModal();
    }
  };

  useEffect(() => {
    getInfoCallback();
  }, [getInfoCallback]);

  useEffect(() => {
    closeAllModal();
  }, [profileBox]);

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
        style={style}
        statusModal={statusModal}
        trySatusModal={trySatusModal}
        closeSatusModal={closeSatusModal}
      />
    </>
  );
};

export default withRouter(observer(HeaderContainer));
