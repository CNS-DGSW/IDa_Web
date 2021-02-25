import React from "react";
import SecondTypeScoreContainer from "containers/Admin/SecondTypeScore/SecondTypeScoreContainer";
import DefaultAdminHeader from "components/Admin/DefaultAdminHeader";

const SecondTypeScorePage = () => {
  return (
    <DefaultAdminHeader>
      <SecondTypeScoreContainer />
    </DefaultAdminHeader>
  );
};

export default SecondTypeScorePage;
