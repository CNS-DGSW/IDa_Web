import { observer } from "mobx-react";
import React, { useCallback } from "react";
import useStore from "lib/hooks/useStore";
import "./WriteContent.scss";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";

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
  const { store } = useStore();
  const { page, pageHandle, userIdx } = store.WriteStore;
  const { changeSubmit } = store.StatusStore;

  const history = useHistory();

  const nextPage = useCallback(
    (skip?: boolean) => {
      if (!isChanged || skip) {
        if (page !== 6) {
          pageHandle(page + 1);
        }
      } else {
        Swal.fire({
          title: "이동하시겠습니까?",
          html: "수정된 내용이 저장되지 않았습니다.<p style='color:red;font-weight: 700;'>원서 저장을 눌러 주세요</p>",
          showCancelButton: true,
          icon: "warning",
          cancelButtonText: "취소",
          confirmButtonText: "확인",
        }).then(async (result) => {
          if (result.isConfirmed) {
            if (page !== 6) {
              pageHandle(page + 1);
            }
          }
        });
      }
    },
    [isChanged, page, pageHandle]
  );

  const prevPage = useCallback(() => {
    if (!isChanged && page !== 0) {
      pageHandle(page - 1);
    } else {
      Swal.fire({
        title: "이동하시겠습니까?",
        html: "수정된 내용이 저장되지 않았습니다. <br/>원서 저장을 눌러 주세요",
        showCancelButton: true,
        icon: "warning",
        cancelButtonText: "취소",
        confirmButtonText: "확인",
      }).then(async (result) => {
        if (result.isConfirmed) {
          if (page !== 0) {
            pageHandle(page - 1);
          }
        }
      });
    }
  }, [isChanged, page, pageHandle]);

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
            history.push("/");
            toast.success("제출되었습니다.");
          })
          .catch((err) => {
            if (err.response?.status === 401 || err.response?.status === 410) {
              history.push("/login");
              toast.warning("로그인이 필요합니다.");
            } else if (err.response?.status === 406) {
              toast.warning("원서를 모두 작성하지 않았습니다.");
            } else if (err.response?.status === 409) {
              toast.warning("이미 제출하셨습니다.");
            } else if (err.response?.status === 403) {
              toast.warning("제출 기간이 아닙니다.");
            } else {
              toast.error("서버 오류입니다.");
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
            <Link
              to={`/print?auto=false${
                userIdx !== null ? "&userIdx=" + userIdx : ""
              }`}
              target="_blank"
              rel="noopener noeferrer"
              className="writecontent-children-area-btn preview"
            >
              원서 미리보기
            </Link>
            {page === 6 && (
              <Link
                to={`/print${userIdx !== null ? "?userIdx=" + userIdx : ""}`}
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
                onClick={prevPage}
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
