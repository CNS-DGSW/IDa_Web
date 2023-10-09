import React, { useLayoutEffect, useEffect } from "react";
import { observer } from "mobx-react";
import Header from "components/common/Header";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import {
  emailAtom,
  isAdminAtom,
  loginAtom,
  nameAtom,
  profileBox,
} from "stores/Auth/AuthAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { UserInfoResponse } from "util/types/Response";
import AuthApi from "assets/api/AuthApi";
import { statusModalAtom } from "stores/Status/StatusAtom";
import useIsApplyPeriod from "lib/hooks/useIsApplyPeriod";

interface HeaderContainerProps {
  theme?: boolean;
  style?: React.CSSProperties;
}

const HeaderContainer = ({ theme, style }: HeaderContainerProps) => {
  const history = useNavigate();
  const changeLoginAtom = useSetRecoilState<boolean>(loginAtom);
  const [isAdminValue, setIsAdminAtom] = useRecoilState(isAdminAtom);
  const [emailValue, setEmailAtom] = useRecoilState(emailAtom);
  const [nameValue, setNameAtom] = useRecoilState(nameAtom);
  const [loginValue, setLoginAtom] = useRecoilState(loginAtom);
  const [profileBoxAtom, setProfileBoxAtom] =
    useRecoilState<boolean>(profileBox);
  // const {
  //   tryProfileBox,
  //   tryCloseModal,
  // } = store.AuthStore;

  const [statusModal, setStatusModal] = useRecoilState(statusModalAtom);

  const [cookie, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const isApplyPeriod = useIsApplyPeriod();

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
    console.log("log를 찍어보는거시와요");

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
  const getInfoCallback = async () => {
    if (localStorage.getItem("accessToken") && !nameValue && !emailValue) {
      changeLoginAtom(true);
      await getInfo().catch((err: any) => {
        HandleLogout();
      });
    }
  };

  // 프로필 버튼 눌렀을 때 모달 닫기
  const closeAllModal = () => {
    if (!profileBox) {
      setStatusModal(false);
    }
  };

  useLayoutEffect(() => {
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
        isApplyPeriod={!isApplyPeriod}
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
        tryStatusModal={() => setStatusModal(!statusModal)}
        closeStatusModal={() => setStatusModal(false)}
      />
    </>
  );
};

export default observer(HeaderContainer);
