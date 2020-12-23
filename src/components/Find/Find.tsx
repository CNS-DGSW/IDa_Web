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
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            birth={birth}
            setBirth={setBirth}
            newPw={newPw}
            setNewPw={setNewPw}
            checkPw={checkPw}
            setCheckPw={setCheckPw}
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
