import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import UserListComponent from "components/Admin/UserList";
import useStore from "lib/hooks/useStore";
import { useHistory } from "react-router-dom";
import { List } from "util/types/UserList";
import { handleAdmin, handleLogin } from "lib/handleErrors";
import { CityRatio, DateRatio, SchoolRatio } from "util/types/UserRatio";
import ExcelApi from "assets/api/ExcelApi";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import UserPrintStatus from "util/enums/UserPrintStatus";

const UserListContainer = ({}) => {
  const { store } = useStore();
  const history = useHistory();

  const { getUserList, getAllUserRatio, adminAddUser, adminDeleteUser } =
    store.AdminStore;

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

  const [result,setResult] = useState<Object>({
    "총가입인원":0,
    "제출인원":0,
    "우편도착인원":0,
    "검토완료인원":0,
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
        .catch((err) => {
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
          .catch((err) => {
            handleAdmin(err);
          });
      }
    });
  };

  // 지원자 현황 받아오기
  const tryGetUserList = useCallback(() => {
    getUserList()
      .then((res) => {
        setUserStatus(res.data);
      })
      .catch((err) => {
        handleAdmin(err, history);
      });
  }, []);


  useEffect(() => {
    console.log(userStatus)
  },[userStatus])

  // 날짜, 출신학교, 지역 별 비율 받아오기
  const tryGetAllUserRatio = useCallback(() => {
    getAllUserRatio()
      .then((res) => {
        setCityStatus(res.data.userCityRatio);
        setDateStatus(res.data.userDateRatio);
        setSchoolStatus(res.data.userSchoolRatio);
      })
      .catch((err) => {
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
    GetUserList().catch((err) => {
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
      result={result}
    />
  );
};

export default observer(UserListContainer);
