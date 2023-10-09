import React from "react";
import HeaderContainer from "containers/Header/HeaderContainer";
import { useLocation } from "react-router-dom";
import NotFound from "components/NotFound";
import { ILocationState } from "util/types/ILocationState";

interface DefaultTemplateProps {
  children: React.ReactNode;
  theme?: boolean;
  style?: React.CSSProperties;
}

const DefaultTemplate = ({ children, theme, style }: DefaultTemplateProps) => {
  const location = useLocation();
  const { state } = location as unknown as ILocationState;
  console.log(location)
  return (
    <div className="default-template">
      <HeaderContainer theme={theme} style={style} />
      {state?.isValid || location.pathname === '/' ? <>{children}</> : <NotFound />}
    </div>
  );
};

export default DefaultTemplate;
