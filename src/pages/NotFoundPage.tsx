import React from "react";
import DefaultTemplate from "components/common/Template/DefaultTemplate";
import NotFound from "components/NotFound";
import { useLocation } from "react-router-dom";
import { ILocationState } from "util/types/ILocationState";

const NotFoundPage = () => {
  return (
    <DefaultTemplate>
      <NotFound />
    </DefaultTemplate>
  );
};

export default NotFoundPage;
