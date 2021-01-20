import { observer } from "mobx-react";
import React, { useCallback } from "react";
import useStore from "util/lib/hooks/useStore";
import "./WriteContent.scss";

interface WriteContentProps {
  title: string;
  children: React.ReactNode;
  onSave: () => void | boolean;
  isChanged?: boolean;
}

const WriteContent = ({ title, children, onSave, isChanged }: WriteContentProps) => {
  const { store } = useStore();
  const { page, pageHandle } = store.WriteStore;

  const nextPage = useCallback(() => {
    if (!isChanged) {
      pageHandle(page + 1);
    }
  }, [isChanged]);

  const prevPage = useCallback(() => {
    if (!isChanged) {
      pageHandle(page - 1);
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
              onClick={() => {
                if (onSave() === true) {
                  nextPage();
                }
              }}
            >
              원서저장
            </div>
            <div className="writecontent-children-area-btn preview">원서 미리보기</div>
            <div className="writecontent-children-area-hr"></div>

            {page !== 6 && (
              <div className="writecontent-children-area-btn next" onClick={nextPage}>
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
