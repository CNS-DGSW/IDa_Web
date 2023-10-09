import React from "react";
import HeaderContainer from "containers/Header/HeaderContainer";
import useIsApplyPeriod from "lib/hooks/useIsApplyPeriod";
import "./AppStyle.scss";

interface DefaultTemplateProps {
  children: React.ReactNode;
  theme?: boolean;
  style?: React.CSSProperties;
}

const BlurTemplate = ({ children, theme, style }: DefaultTemplateProps) => {
  const isTest = useIsApplyPeriod();
  return (
    <div className={!isTest ? "App" : ""}>
      <HeaderContainer theme={theme} style={style} />
      <div className={!isTest ? "BlurContainer" : ""}>{children}</div>
    </div>
  );
};

export default BlurTemplate;
