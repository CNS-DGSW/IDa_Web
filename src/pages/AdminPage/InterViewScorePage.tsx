import React from "react";
import InterViewScoreContainer from "containers/Admin/InterViewScore/InterViewScoreContainer";
import DefaultAdminHeader from "components/Admin/DefaultAdminHeader";

const SecondTypeScorePage = () => {
  return (
    <DefaultAdminHeader>
      <InterViewScoreContainer />
    </DefaultAdminHeader>
  );
};

export default SecondTypeScorePage;
