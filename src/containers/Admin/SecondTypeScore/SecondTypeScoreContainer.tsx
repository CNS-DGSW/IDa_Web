import React from "react";
import { observer } from "mobx-react";
import SecondTypeScore from "components/Admin/SecondTypeScore";

const SecondTypeScoreContainer = ({}) => {
  return (
    <>
      <SecondTypeScore />
    </>
  );
};

export default observer(SecondTypeScoreContainer);
