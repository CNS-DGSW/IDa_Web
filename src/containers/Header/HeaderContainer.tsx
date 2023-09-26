import React, { useCallback, useEffect } from "react";
import { observer } from "mobx-react";
import Header from "components/common/Header";
import useStore from "lib/hooks/useStore";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { email, isAdmin, login, name, profileBox } from "stores/Auth/AuthAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { UserInfoResponse } from "util/types/Response";
import AuthApi from "assets/api/AuthApi";

interface HeaderContainerProps {
  theme?: boolean;
  style?: React.CSSProperties;
}

const HeaderContainer = ({ theme, style }: HeaderContainerProps) => {
  const { store } = useStore();
  const history = useNavigate();
  const changeLoginAtom = useSetRecoilState<boolean>(login);
  const [isAdminValue, setIsAdminAtom] = useRecoilState(isAdmin);
  const [emailValue, setEmailAtom] = useRecoilState(email);
  const [nameValue, setNameAtom] = useRecoilState(name);
  const [loginValue, setLoginAtom] = useRecoilState(login);
  const [profileBoxAtom, setProfileBoxAtom] =
    useRecoilState<boolean>(profileBox);
  // const {
  //   tryProfileBox,
  //   tryCloseModal,
  // } = store.AuthStore;

  const { statusModal, closeStatusModal, tryStatusModal } = store.StatusStore;

  const [cookie, setCookie, removeCookie] = useCookies(["refreshToken"]);

  // 로그아웃
  const HandleLogout = () => {
    setLoginAtom(false);
    setProfileBoxAtom(false);
    setNameAtom("");
    setEmailAtom("");
    setIsAdminAtom(false);
    removeCookie("refreshToken");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("expireAt");
    history("/");
  };

  const getInfo = async () => {
    const response: UserInfoResponse = await AuthApi.GetInfo();

    if (response.status === 200) {
      setLoginAtom(true);
      setEmailAtom(response.data.email);
      setNameAtom(response.data.name);
      setIsAdminAtom(response.data.isAdmin);
    } else {
      setLoginAtom(false);
    }
  };

  // 유저 정보 가져오기
  const getInfoCallback = useCallback(async () => {
    if (localStorage.getItem("accessToken") && !name && !email) {
      changeLoginAtom(true);
      await getInfo().catch((err: any) => {
        HandleLogout();
      });
    }
  }, [login]);

  // 프로필 버튼 눌렀을 때 모달 닫기
  const closeAllModal = () => {
    if (!profileBox) {
      closeStatusModal();
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
      setProfileBoxAtom(false);
    };
  }, []);

  useEffect(() => {
    statusModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [statusModal]);

  return (
    <>
      <Header
        isAdmin={isAdminValue}
        theme={theme}
        login={loginValue}
        profileBox={profileBoxAtom}
        tryProfileBox={() => {
          setProfileBoxAtom(!profileBoxAtom);
        }}
        name={nameValue}
        email={emailValue}
        HandleLogout={HandleLogout}
        style={style}
        statusModal={statusModal}
        tryStatusModal={tryStatusModal}
        closeStatusModal={closeStatusModal}
      />
    </>
  );
};

export default observer(HeaderContainer);
