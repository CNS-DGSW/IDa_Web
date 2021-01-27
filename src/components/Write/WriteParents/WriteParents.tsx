import Modal from "components/common/Modal";
import React from "react";
import DaumPostcode from "react-daum-postcode";
import Relation from "util/enums/Relation";
import WriteContent from "../../common/WriteContent";
import "./WriteParents.scss";

interface WriteParentsProps {
  parentName: string;
  setParentName: React.Dispatch<React.SetStateAction<string>>;
  parentRelation: Relation | null;
  setParentRelation: React.Dispatch<React.SetStateAction<Relation | null>>;
  parentTel: string;
  setParentTel: React.Dispatch<React.SetStateAction<string>>;
  address: string;
  handleComplete: (data: any) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSave: () => Promise<boolean>;
  isChanged: boolean;
  setIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const WriteParents = ({
  parentName,
  setParentName,
  parentRelation,
  setParentRelation,
  parentTel,
  setParentTel,
  address,
  handleComplete,
  isOpen,
  setIsOpen,
  onSave,
  isChanged,
  setIsChanged,
}: WriteParentsProps) => {
  return (
    <>
      <WriteContent title="보호자 정보를 입력해 주세요" onSave={onSave} isChanged={isChanged}>
        <div className="parent">
          <div className="parent-select">
            <div className="parent-select-box">
              <label>성명</label>
              <div className="parent-select-box-area">
                <input
                  type="text"
                  maxLength={45}
                  className="parent-select-box-area-textInput"
                  value={parentName}
                  onChange={(e) => {
                    setParentName(e.target.value);
                    setIsChanged(true);
                  }}
                />
              </div>
            </div>
            <div className="parent-select-box">
              <label>지원자와의 관계</label>
              <div className="parent-select-box-area">
                <select
                  className="parent-select-box-area-textInput"
                  value={parentRelation?.toString()}
                  onChange={(e) => {
                    setParentRelation(e.target.value as Relation);
                    setIsChanged(true);
                  }}
                >
                  <option>선택</option>
                  <option value={Relation.MOTHER}>모</option>
                  <option value={Relation.FATHER}>부</option>
                  <option value={Relation.GRANDMOTHER}>조모</option>
                  <option value={Relation.GRANDFATHER}>조부</option>
                  <option value={Relation.OTHER}>기타</option>
                </select>
              </div>
            </div>
          </div>
          <div className="parent-select">
            <div className="parent-select-box">
              <label>휴대폰</label>
              <div className="parent-select-box-area">
                <input
                  maxLength={20}
                  type="text"
                  className="parent-select-box-area-textInput"
                  value={parentTel}
                  onChange={(e) => {
                    setParentTel(e.target.value);
                    setIsChanged(true);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="parent-text">
            <label>주소</label>
            <input
              type="text"
              className="parent-select-box-area-textInput"
              value={address}
              readOnly
              onClick={() => setIsOpen(true)}
            />
            {isOpen === true && (
              <Modal onClose={() => setIsOpen(false)}>
                <DaumPostcode onComplete={handleComplete} width={"500"} height={"500"} autoClose={true} />
              </Modal>
            )}
          </div>
        </div>
      </WriteContent>
    </>
  );
};

export default WriteParents;
