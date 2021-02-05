import React from "react";
import "./AuthContent.scss";

interface AuthContentProps {
  title: string;
  description?: string;
  contentTitle: string;
  children: React.ReactNode;
  footers?: React.ReactNode;
}

const AuthContent = ({ children, title, description, contentTitle, footers }: AuthContentProps) => {
  return (
    <div className="auth-content">
      <div className="auth-content-img" />
      <div className="auth-content-text">
        <div className="auth-content-text-title">{title}</div>
        {description && <div className="auth-content-text-description">{description}</div>}
      </div>
      <div className="auth-content-box">
        <div className="auth-content-box-content">
          <div className="auth-content-box-title">{contentTitle}</div>
          {children}
        </div>
        {footers}
      </div>
    </div>
  );
};

export default AuthContent;
