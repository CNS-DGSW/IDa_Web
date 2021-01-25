import React from "react";
import { observer } from "mobx-react";
import WriteAdditional from "../../../components/common/WriteAdditional";
import useStore from "lib/hooks/useStore";

const WriteGradeAdditionalContainer = ({}) => {
  const { store } = useStore();

  const {
    leadership11,
    leadership12,
    leadership21,
    leadership22,
    leadership31,
    leadership32,
    prize,
  } = store.WriteStore;

  const { volunteer1, volunteer2, volunteer3 } = store.WriteStore;

  const {
    handleLeadership11,
    handleLeadership12,
    handleLeadership21,
    handleLeadership22,
    handleLeadership31,
    handleLeadership32,
    handleVolunteer1,
    handleVolunteer2,
    handleVolunteer3,
    handlePrize,
  } = store.WriteStore;

  return (
    <>
      <WriteAdditional
        leadership11={leadership11}
        leadership12={leadership12}
        leadership21={leadership21}
        leadership22={leadership22}
        leadership31={leadership31}
        leadership32={leadership32}
        prize={prize}
        volunteer1={volunteer1}
        volunteer2={volunteer2}
        volunteer3={volunteer3}
        handleLeadership11={handleLeadership11}
        handleLeadership12={handleLeadership12}
        handleLeadership21={handleLeadership21}
        handleLeadership22={handleLeadership22}
        handleLeadership31={handleLeadership31}
        handleLeadership32={handleLeadership32}
        handleVolunteer1={handleVolunteer1}
        handleVolunteer2={handleVolunteer2}
        handleVolunteer3={handleVolunteer3}
        handlePrize={handlePrize}
      ></WriteAdditional>
    </>
  );
};

export default observer(WriteGradeAdditionalContainer);
