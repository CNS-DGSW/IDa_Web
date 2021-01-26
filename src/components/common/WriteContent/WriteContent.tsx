import { observer } from "mobx-react";
import React, { useCallback } from "react";
import useStore from "lib/hooks/useStore";
import "./WriteContent.scss";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

interface WriteContentProps {
  title: string;
  children: React.ReactNode;
  onSave: () => void | boolean | Promise<boolean>;
  isChanged?: boolean;
}

const WriteContent = ({ title, children, onSave, isChanged }: WriteContentProps) => {
  const { store } = useStore();
  const { page, pageHandle } = store.WriteStore;

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
              <div className="writecontent-children-area-btn prev" onClick={prevPage}>
                원서 출력
              </div>
            )}
            <div className="writecontent-children-area-hr"></div>

            {page === 6 ? (
              <div className="writecontent-children-area-btn last" onClick={() => nextPage()}>
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

export default observer(WriteContent);
