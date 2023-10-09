import { useLayoutEffect, useState } from "react";

const currentDate = new Date();

const useIsApplyPeriod = () => {
  const [isTest, setIsTest] = useState<boolean>(true);
  /* useLayoutEffect(() => {
    const targetDate = new Date(currentDate.getFullYear(), 9, 10, 9, 0, 0);
    if (currentDate >= targetDate) {
      console.log("10월 10일 9시 이후입니다.");
      setIsTest(true);
    } else {
      console.log("10월 10일 9시 이wjsjsjs입니다.");
      setIsTest(false);
    }
  }, []); */
  return isTest;
};

export default useIsApplyPeriod;
