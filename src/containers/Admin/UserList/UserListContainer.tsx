import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import UserListComponent from "components/Admin/UserList";
import useStore from "lib/hooks/useStore";
import { useNavigate } from "react-router-dom";
import { List } from "util/types/UserList";
import { handleAdmin, handleLogin } from "lib/handleErrors";
import { CityRatio, DateRatio, SchoolRatio } from "util/types/UserRatio";
import ExcelApi from "assets/api/ExcelApi";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import {
  adminAddUser,
  adminDeleteUser,
  getAllUserRatio,
  getUserList,
} from "stores/Admin/util";

const UserListContainer = ({}) => {
  const { store } = useStore();
  const history = useNavigate();

  const { changeArrived, changeReview } = store.StatusStore;

  const [userStatus, setUserStatus] = useState<List[]>();
  const [cityStatus, setCityStatus] = useState<CityRatio[]>([]);
  const [dateStatus, setDateStatus] = useState<DateRatio[]>([]);
  const [schoolStatus, setSchoolStatus] = useState<SchoolRatio[]>([]);
  const [search, setSearch] = useState<string>("");

  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);

  const [userResult, setUserResult] = useState<{
    totalValue: number;
    submiteValue: number;
    postArrivedValue: number;
    checkedValue: number;
  }>({
    totalValue: 0,
    submiteValue: 0,
    postArrivedValue: 0,
    checkedValue: 0,
  });

  const { GetUserList } = ExcelApi;

  const tryAddUser = () => {
    if (!id || !pw || !birth || !name) {
      toast.warning("빈칸이 있습니다.");
    } else if (pw.length < 8) {
      toast.warning("비밀번호는 8자리 이상이여야 합니다.");
    } else {
      adminAddUser(id, name, pw, birth)
        .then(() => {
          toast.success("회원이 추가되었습니다.");
          tryGetUserList();
        })
        .catch((err: any) => {
          handleAdmin(err);
        });
    }
  };

  const deleteUser = (userIdx: number) => {
    Swal.fire({
      title: "삭제하시겠습니까?",
      text: "회원 정보는 사라집니다.",
      showCancelButton: true,
      icon: "warning",
      cancelButtonText: "취소",
      confirmButtonText: "확인",
    }).then((result) => {
      if (result.isConfirmed) {
        adminDeleteUser(userIdx)
          .then(() => {
            toast.success("회원이 삭제되었습니다.");
            tryGetUserList();
          })
          .catch((err: any) => {
            handleAdmin(err);
          });
      }
    });
  };

  // 지원자 현황 받아오기
  const tryGetUserList = useCallback(() => {
    getUserList()
      .then((res: any) => {
        setUserStatus(res.data);
      })
      .catch((err: any) => {
        handleAdmin(err, history);
      });
  }, []);

  useEffect(() => {
    if (userStatus !== undefined) {
      let submiteValue: number = 0;
      let postArrivedValue: number = 0;
      let checkedValue: number = 0;

      userStatus.forEach((i) => {
        // 제출 인원
        if (i.isSubmit) {
          submiteValue++;
        }
        if (i.isPrintedApplicationArrived) {
          postArrivedValue++;
        }
        if (i.applicationChecked === "SUCCEED") {
          checkedValue++;
        }
      });

      setUserResult({
        totalValue: userStatus.length,
        submiteValue: submiteValue,
        postArrivedValue: postArrivedValue,
        checkedValue: checkedValue,
      });
    }
  }, [userStatus]);

  // 날짜, 출신학교, 지역 별 비율 받아오기
  const tryGetAllUserRatio = useCallback(() => {
    getAllUserRatio()
      .then((res: any) => {
        setCityStatus(res.data.userCityRatio);
        setDateStatus(res.data.userDateRatio);
        setSchoolStatus(res.data.userSchoolRatio);
      })
      .catch((err: any) => {
        handleLogin(err, history);
      });
  }, []);

  // 최종 원서 도착 또는 미도착 변경
  const tryChangeArrived = (userIdx: number, status: boolean) => {
    changeArrived(userIdx, status).then(() => {
      tryGetUserList();
    });
  };

  //최종 원서 검토 예정 또는 검토 완료 변경 이민욱 만듬
  const tryChangeReview = (userIdx: number, status: string) => {
    changeReview(userIdx, status).then(() => {
      tryGetUserList();
    });
  };

  // 엑셀 다운
  const tryDownExcel = () => {
    GetUserList().catch((err: any) => {
      toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요.");
    });
  };

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === "NumpadEnter") {
        tryAddUser();
      }
    };

    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [name, id, pw, birth]);

  useEffect(() => {
    tryGetUserList();
  }, [tryGetUserList]);

  useEffect(() => {
    tryGetAllUserRatio();
  }, [tryGetAllUserRatio]);

  useEffect(() => {
    if (birth) {
      setBirth(
        birth.replace(/-/g, "").replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3")
      );
    }
  }, [birth]);

  return (
    <UserListComponent
      search={search}
      setSearch={setSearch}
      dateStatus={dateStatus}
      schoolStatus={schoolStatus}
      cityStatus={cityStatus}
      userStatus={userStatus}
      tryDownExcel={tryDownExcel}
      tryChangeArrived={tryChangeArrived}
      id={id}
      setId={setId}
      pw={pw}
      setPw={setPw}
      name={name}
      setName={setName}
      birth={birth}
      setBirth={setBirth}
      tryAddUser={tryAddUser}
      deleteUser={deleteUser}
      modal={modal}
      setModal={setModal}
      tryChangeReview={tryChangeReview}
      userResult={userResult}
    />
  );
};

export default observer(UserListContainer);
