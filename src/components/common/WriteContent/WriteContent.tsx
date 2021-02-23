import { observer } from "mobx-react";
import React, { useCallback } from "react";
import useStore from "lib/hooks/useStore";
import "./WriteContent.scss";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { RouteComponentProps, useHistory, withRouter } from "react-router-dom";

interface WriteContentProps {
  title: string;
  children: React.ReactNode;
  onSave: () => void | boolean | Promise<boolean>;
  isChanged?: boolean;
}

const WriteContent = ({ title, children, onSave, isChanged }: WriteContentProps & RouteComponentProps) => {
  const { store } = useStore();
  const { page, pageHandle } = store.WriteStore;
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
          text: "수정된 내용이 저장되지 않았습니다.",
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
    [isChanged]
  );

  const prevPage = useCallback(() => {
    if (!isChanged && page !== 0) {
      pageHandle(page - 1);
    } else {
      Swal.fire({
        title: "이동하시겠습니까?",
        text: "수정된 내용이 저장되지 않았습니다.",
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
  }, [isChanged]);

  const changeSubmitCallback = useCallback(async () => {
    if (isChanged) {
      toast.warn("변경사항이 저장되지 않았습니다.");
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
        await changeSubmit()
          .then(() => {
            history.push("/");
            toast.success("제출되었습니다.");
          })
          .catch((err: Error) => {
            if (err.message.includes("401") || err.message.includes("410")) {
              history.push("/login");
              toast.warn("로그인이 필요합니다.");
            } else if (err.message.includes("406")) {
              toast.warn("원서를 모두 작성하지 않았습니다.");
            } else if (err.message.includes("409")) {
              toast.warn("이미 제출하셨습니다.");
            } else if (err.message.includes("403")) {
              toast.warn("제출 기간이 아닙니다.");
            } else {
              toast.error("서버 오류입니다.");
            }
          });
      }
    });
  }, [isChanged]);

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
                  nextPage(true);
                }
              }}
            >
              원서저장
            </div>
            <div className="writecontent-children-area-btn preview">원서 미리보기</div>
            {page === 6 && (
              <div className="writecontent-children-area-btn prev" onClick={() => history.push("/print")}>
                원서 출력
              </div>
            )}
            <div className="writecontent-children-area-hr"></div>

            {page === 6 ? (
              <div className="writecontent-children-area-btn last" onClick={() => changeSubmitCallback()}>
                원서 최종 제출
              </div>
            ) : (
              <div className="writecontent-children-area-btn next" onClick={() => nextPage()}>
                다음
              </div>
            )}
            {page !== 0 && (
              <div className="writecontent-children-area-btn prev" onClick={prevPage}>
                이전
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(observer(WriteContent));
