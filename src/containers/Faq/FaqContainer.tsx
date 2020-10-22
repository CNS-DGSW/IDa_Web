import React from "react";
import { inject, observer } from "mobx-react";
import Faq from "components/Faq";

const FaqContainer = ({}) => {
  return (
    <>
      <div>
        <Faq />
      </div>
    </>
  );
};

export default inject("store")(observer(FaqContainer));
