import React from "react";
import DefaultTemplate from "components/common/Template/DefaultTemplate";
import ProfileContainer from "containers/Profile/ProfileContainer";

const MainPage = () => {
  return (
    <DefaultTemplate>
      <ProfileContainer />
    </DefaultTemplate>
  );
};

export default MainPage;
