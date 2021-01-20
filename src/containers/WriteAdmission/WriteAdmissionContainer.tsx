import React, { useState } from "react";
import { observer } from "mobx-react";
import useStore from "util/lib/hooks/useStore";
import WriteAdmission from "../../components/WriteAdmission";

const WriteAdmissionContainer = ({}) => {
  const { store } = useStore();
  const { page, pageHandle } = store.WriteStore;
  const [mission, setMission] = useState<string>("");
  const [special, setSpecial] = useState<string>("");
  const [typical, setTypical] = useState<string>("");

  const nextPage = () => {
    pageHandle(page + 1);
  };

  const prevPage = () => {
    pageHandle(page - 1);
  };
  return (
    <>
      <WriteAdmission
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
        mission={mission}
        setMission={setMission}
        special={special}
        setSpecial={setSpecial}
        typical={typical}
        setTypical={setTypical}
      ></WriteAdmission>
    </>
  );
};

export default observer(WriteAdmissionContainer);
