import React from "react";
import "./Find.scss";
import FindEmail from "./FindEmail";
import FindPw from "./FindPw";

interface FindProps {
  changePage: boolean;
  setChangePage: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  birth: string;
  setBirth: React.Dispatch<React.SetStateAction<string>>;
  newPw: string;
  setNewPw: React.Dispatch<React.SetStateAction<string>>;
  checkPw: string;
  setCheckPw: React.Dispatch<React.SetStateAction<string>>;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  emailLoading: boolean;
  handlePwCode: () => void;
  handleChangePw: () => void;
}

const Find = ({
  changePage,
  setChangePage,
  name,
  setName,
  email,
  setEmail,
  birth,
  setBirth,
  newPw,
  setNewPw,
  checkPw,
  setCheckPw,
  handlePwCode,
  handleChangePw,
  code,
  setCode,
  emailLoading,
}: FindProps) => {
  return (
    <div className="Find">
      <div className="Find-text">
        <div className="Find-text-Welcome">Welcome</div>
        <div className="Find-text-content">동해물과 백두산이 마르고 닳도록</div>
      </div>
      <div className="Find-box">
        {changePage ? (
          <FindPw
            setChangePage={setChangePage}
            email={email}
            setEmail={setEmail}
            newPw={newPw}
            setNewPw={setNewPw}
            checkPw={checkPw}
            setCheckPw={setCheckPw}
            handlePwCode={handlePwCode}
            handleChangePw={handleChangePw}
            code={code}
            setCode={setCode}
            emailLoading={emailLoading}
          />
        ) : (
          <FindEmail
            setChangePage={setChangePage}
            name={name}
            setName={setName}
            birth={birth}
            setBirth={setBirth}
          />
        )}
      </div>
    </div>
  );
};

export default Find;
