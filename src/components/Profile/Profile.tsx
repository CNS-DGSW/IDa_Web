import Button from "components/common/Button";
import CustomInput from "components/common/CustomInput";
import React from "react";
import "./Profile.scss";

interface ProfileProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  originPw: string;
  setOriginPw: React.Dispatch<React.SetStateAction<string>>;
  changePw: string;
  setChangePw: React.Dispatch<React.SetStateAction<string>>;
  checkPw: string;
  setCheckPw: React.Dispatch<React.SetStateAction<string>>;
}

const Profile = ({
  name,
  setName,
  originPw,
  setOriginPw,
  changePw,
  setChangePw,
  checkPw,
  setCheckPw,
}: ProfileProps) => {
  return (
    <div className="Profile">
      <div className="Profile-box">
        <div className="Profile-box-text">정보수정</div>
        <div className="Profile-box-form">
          <CustomInput placeholder={"변경할 이름"} value={name} setValue={setName} />
          <CustomInput
            placeholder={"현재 비밀번호"}
            value={originPw}
            setValue={setOriginPw}
          />
          <CustomInput
            placeholder={"새로운 비밀번호"}
            value={changePw}
            setValue={setChangePw}
          />
          <CustomInput
            placeholder={"새로운 비밀번호 확인"}
            value={checkPw}
            setValue={setCheckPw}
          />
        </div>
        <div className="Profile-box-button">
          <Button content="변경" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
