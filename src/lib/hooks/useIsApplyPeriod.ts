import { useEffect, useState } from "react";

const currentDate = new Date();

const useIsApplyPeriod = () => {
  const [isTest, setIsTest] = useState<boolean>(true);
  useEffect(() => {
    const targetDatebefore = new Date(
      currentDate.getFullYear(),
      9,
      15,
      17,
      0,
      0
    );
    const targetDateafter = new Date(currentDate.getFullYear(), 9, 16, 9, 0, 0);
    if (currentDate >= targetDatebefore && currentDate <= targetDateafter) {
      //   console.log("10월 10일 9시 이후입니다.");
      setIsTest(false);
    } else {
      //   console.log("10월 10일 9시 이wjsjsjs입니다.");
      setIsTest(true);
    }
  }, []);
  return isTest;
};

export default useIsApplyPeriod;
