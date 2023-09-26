import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import ResultStatus from "components/ResultStatusCheck/ResultStatus";
import { handleLogin } from "lib/handleErrors";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { applyBox } from "stores/Auth/AuthAtom";
import {
  canAccessAtom,
  checkedPrintAtom,
  passAtom,
  printAtom,
  submitAtom,
} from "stores/Status/StatusAtom";
import { ResultStatusResponse } from "util/types/Response";
import StatusApi from "assets/api/StatusApi";

interface ResultStatusContainerPropse {}

const ResultStatusContainer = ({}: ResultStatusContainerPropse) => {
  const [submit, setSubmit] = useRecoilState(submitAtom);
  const [print, setPrint] = useRecoilState(printAtom);
  const [checkedPrint, setCheckedPrint] = useRecoilState(checkedPrintAtom);
  const setPass = useSetRecoilState(passAtom);
  const setCanAccess = useSetRecoilState(canAccessAtom);

  const tryGetStatus = async (
    userIdx?: number | null
  ): Promise<ResultStatusResponse> => {
    // 1차 합격 여부 및 우편 원서 접수, 인터넷 원서 접수 현황
    const response: ResultStatusResponse = await StatusApi.GetStatus(userIdx);

    console.log(">>", response.data.isPassedFirstApply);
    // if (response.status === 200) {
    setSubmit(response.data.isSubmit); // 인터넷 원서 접수 현홍
    setPrint(response.data.isPrintedApplicationArrived); //  우편 원서 접수 현황
    setCheckedPrint(response.data.applicationChecked); //  우편 원서 검토 현황
    setPass(response.data.isPassedFirstApply); // 1차 합격 여부
    setCanAccess(response.data.canAccess);
    // }

    return response;
  };
  const history = useNavigate();

  const [applyBoxAtom, setApplyBoxAtom] = useRecoilState<boolean>(applyBox);
  const [post, setPost] = useState<boolean | undefined>(undefined);
  // 우편 접수 현황
  const [checkedPost, setCheckedPost] = useState<boolean | string | undefined>(
    undefined
  );
  // // 우편 검토 현황
  const [internet, setInternet] = useState<boolean | undefined>(undefined);
  // 인터넷 원서 접수 현황
  // 헤더에 있어서 모달을 store에서 관리해줌

  // api 받아오기
  const getStatus = useCallback(async () => {
    await tryGetStatus()
      .then((res) => {
        console.log("from getStatus() ", res);
        console.log(submit, res.data.isSubmit);
        console.log(print, res.data.isPrintedApplicationArrived);
        console.log(checkedPrint, res.data.applicationChecked);
        setInternet(submit); // 인터넷 원서 접수 현황
        setPost(print); // 우편 원서 접수 현황
        setCheckedPost(checkedPrint); // 우편 원서 검토 현황
        // setInternet(res.data.isSubmit); // 인터넷 원서 접수 현황
        // setPost(res.data.isPrintedApplicationArrived); // 우편 원서 접수 현황
        // setCheckedPost(res.data.isPrintedApplicationCheck); // 우편 원서 검토 현황
      })
      .catch((err) => {
        handleLogin(err, history);
      });
  }, []);

  useEffect(() => {
    getStatus();
  }, [getStatus]);

  return (
    <>
      {/* api를 받고 난후 데이터가 오면 보여줌 */}
      {post !== undefined && internet !== undefined && (
        // !post로 안하는 이유는 우편 접수가 아직 안되있으면 서버에서 false로 주기 때문
        <ResultStatus
          post={post}
          checkedPost={checkedPost}
          internet={internet}
          tryCloseModal={() => {
            setApplyBoxAtom(!applyBoxAtom);
          }}
        />
      )}
    </>
  );
};

export default observer(ResultStatusContainer);
