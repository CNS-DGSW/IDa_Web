import React from "react";
import "./Footer.scss";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <>
      <div className="footer">
        <div className="footer-wrap">
          <span className="footer-wrap-address">
            원서접수처 주소:(43010)대구광역시 달성군 구지면 창리로 11길 93
            대구소프트웨어마이스터고등학교
          </span>
        </div>
        <div className="footer-wrap">
          <span className="footer-wrap-tel">
            교무실: 053-231-9226 | 행정실: 053-231-9215 / FAX{")"}
            053-614-0709
          </span>
        </div>
        <div className="footer-wrap">
          <span>대구소프트웨어마이스터고등학교 CNS동아리</span>
          <span className="footer-wrap-copyright">
            Copyright 2020. IDA all rights reserved.
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
