import React from "react";
import HeaderContainer from "containers/Header/HeaderContainer";
import useIsApplyPeriod from "lib/hooks/useIsApplyPeriod";
import "./AppStyle.scss";
import { useLocation } from "react-router-dom";
import NotFound from "components/NotFound";
import { ILocationState } from "util/types/ILocationState";

interface DefaultTemplateProps {
  children: React.ReactNode;
  theme?: boolean;
  style?: React.CSSProperties;
}

const BlurTemplate = ({ children, theme, style }: DefaultTemplateProps) => {
  const isTest = useIsApplyPeriod();
  const location = useLocation();
  const { state } = location as unknown as ILocationState;
  return (
    <div className={!isTest ? "App" : ""}>
      <HeaderContainer theme={theme} style={style} />
      <div className={!isTest ? "BlurContainer" : ""}>
        {state?.isValid ? <>{children}</> : <NotFound />}
      </div>
    </div>
  );
};

export default BlurTemplate;
