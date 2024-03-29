import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useBeforeunload } from "react-beforeunload";
import Write from "components/Write/Write";
import { useLocation, useNavigate } from "react-router-dom";
import useQuery from "lib/hooks/useQuery";
import { useRecoilState, useSetRecoilState } from "recoil";
import { pageAtom, userIdxAtom } from "stores/Write/WriteAtom";
import useTimeLimit from "lib/hooks/useTimeLimit";

const WriteContainer = ({}) => {
  const [page, setPage] = useRecoilState(pageAtom);
  const [userIdx, setUserIdx] = useRecoilState(userIdxAtom);
  const { search } = useLocation();
  const query = useQuery();
  const history = useNavigate();

  // 웹 사이트에 변경점이 있을 때 뒤로가기, 새로고침 시 경고 띄우기
  useBeforeunload((event) => event.preventDefault());

  // 만약 ?userIdx=${userIdx} 로 접속을 했으면 관리자가 다른사람 원서 수정하는 것으로 판단.
  // 서버에 요청도 userIdx를 포함하여 보내야 하기 때문에 전역으로 userIdx를 관리
  // 하지만 403 오류 발생시 "/"" 경로로 이동
  useEffect(() => {
    console.log(userIdx);
    if (query) {
      setUserIdx(Number(query.get("userIdx")));
      // console.log(query.get("userIdx"), "dfdf", userIdx);
    } else {
      setUserIdx(null);
    }
  }, [search, history]);

  // 접근 시간 이외에는 접근 금지
  const { canAccessWrite, WriteLimitControl } = useTimeLimit();

  useEffect(() => {
    // WriteLimitControl();
    // if (canAccessWrite === false) {
    //   history("/", { state: { isValid: true } });
    //   toast.error("원서 입력 기간이 아닙니다.");
    // }
  }, [canAccessWrite]);

  useEffect(() => {
    return () => {
      setPage(0);
      setUserIdx(null);
    };
  }, []);

  return (
    <>
      <Write page={page} pageHandle={(value: number) => setPage(value)} />
    </>
  );
};

export default observer(WriteContainer);
