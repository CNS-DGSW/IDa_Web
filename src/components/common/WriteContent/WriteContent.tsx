import { observer } from "mobx-react";
import React, { useCallback } from "react";
import "./WriteContent.scss";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { pageAtom, userIdxAtom } from "stores/Write/WriteAtom";
import { changeSubmit } from "stores/Status/util";

interface WriteContentProps {
  title: string;
  children: React.ReactNode;
  onSave: () => void | boolean | Promise<boolean>;
  isChanged?: boolean;
}

const WriteContent = ({
  title,
  children,
  onSave,
  isChanged,
}: WriteContentProps) => {
  const [page, setPage] = useRecoilState(pageAtom);
  const userIdx = useRecoilValue(userIdxAtom);
  const history = useNavigate();

  const nextPage = useCallback(
    (skip?: boolean) => {
      if (!isChanged || skip) {
        if (page !== 6) {
          setPage(page + 1);
        }
      } else {
        Swal.fire({
          title: "원서가 저장되지 않았습니다!",
          html: "수정된 내용이 저장되지 않았습니다.<p style='color:red;font-weight: 700;'>원서 저장을 눌러 주세요</p>",
          showCancelButton: false,
          icon: "warning",
          confirmButtonText: "확인",
        }).then(async (result) => {});
      }
    },
    [isChanged, page, setPage]
  );

  const prevPage = useCallback(() => {
    if (!isChanged && page !== 0) {
      setPage(page - 1);
    } else {
      Swal.fire({
        title: "원서가 저장되지 않았습니다!",
        html: "수정된 내용이 저장되지 않았습니다.<p style='color:red;font-weight: 700;'>원서 저장을 눌러 주세요</p>",
        showCancelButton: false,
        icon: "warning",
        confirmButtonText: "확인",
      }).then(async (result) => {});
    }
  }, [isChanged, page, setPage]);

  const showPreview = useCallback(() => {
    if (!isChanged) {
      window.open(
        `/print?auto=false${userIdx !== null ? "&userIdx=" + userIdx : ""}`,
        "_blank"
      );
    } else {
      Swal.fire({
        title: "원서가 저장되지 않았습니다!",
        html: "수정된 내용이 저장되지 않았습니다.<p style='color:red;font-weight: 700;'>원서 저장을 눌러 주세요</p>",
        showCancelButton: false,
        icon: "warning",
        confirmButtonText: "확인",
      }).then(async (result) => {});
    }

    // rel="noopener noeferrer"
  }, [isChanged, userIdx]);

  const changeSubmitCallback = useCallback(async () => {
    if (isChanged) {
      toast.warning("변경사항이 저장되지 않았습니다.");
      return;
    }
    Swal.fire({
      title: "제출하시겠습니까?",
      text: "제출 후 모든 수정은 불가능합니다.",
      showCancelButton: true,
      icon: "warning",
      cancelButtonText: "취소",
      confirmButtonText: "확인",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await changeSubmit(userIdx)
          .then(() => {
            history("/", { state: { isValid: true } });
            toast.success("제출되었습니다.");
          })
          .catch((err) => {
            if (err.response?.status === 401 || err.response?.status === 410) {
              history("/login", { state: { isValid: true } });
              toast.warning("로그인이 필요합니다.");
            } else if (err.response?.status === 406) {
              toast.warning("원서를 모두 작성하지 않았습니다.");
            } else if (err.response?.status === 409) {
              toast.warning("이미 제출하셨습니다.");
            } else if (err.response?.status === 403) {
              toast.warning("제출 기간이 아닙니다.");
            } else {
              toast.error(
                "서버 오류입니다. 잠시 후 다시 시도해주세요. 다시 시도해 주세요"
              );
            }
          });
      }
    });
  }, [changeSubmit, history, isChanged, userIdx]);

  return (
    <>
      <div className="writecontent">
        <div className="writecontent-title">{title}</div>
        <div className="writecontent-children">
          <div className="writecontent-children-box">{children}</div>
          <div className="writecontent-children-area">
            <div
              className="writecontent-children-area-btn save"
              onClick={async () => {
                if ((await onSave()) === true) {
                  toast.success("저장되었습니다.");
                }
              }}
            >
              원서저장
            </div>
            <div
              className="writecontent-children-area-btn preview"
              onClick={() => showPreview()}
            >
              원서 미리보기
            </div>
            {page === 6 && (
              <Link
                to={`/print${userIdx !== null ? "?userIdx=" + userIdx : ""}`}
                state={{ isValid: true }}
                target="_blank"
                rel="noopener noeferrer"
                className="writecontent-children-area-btn prev"
              >
                원서 출력
              </Link>
            )}
            <div className="writecontent-children-area-hr"></div>

            {page === 6 ? (
              <div
                className="writecontent-children-area-btn last"
                onClick={() => changeSubmitCallback()}
              >
                원서 최종 제출
              </div>
            ) : (
              <div
                className="writecontent-children-area-btn next"
                onClick={() => nextPage()}
              >
                다음
              </div>
            )}
            {page !== 0 && (
              <div
                className="writecontent-children-area-btn prev"
                onClick={() => {
                  prevPage();
                }}
              >
                이전
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default observer(WriteContent);
