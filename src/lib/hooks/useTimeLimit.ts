import React, { useState } from "react";

const currentDate = new Date();

const useTimeLimit = () => {
  // 원서접수 접근 시간 관리

    // 10/11(수) 9시 ~ 10/13(금) 17시 (시범운영)
    // 10/16(월) 9시 ~ 10/19(목) 17시 (정식운영)
    const WriteFirstPeriodStart = new Date(2023, 9, 11, 9, 0, 0)
    const WriteFirstPeriodEnd = new Date(2023, 9, 13, 17, 0, 0)
    const WriteSecondPeriodStart = new Date(2023, 9, 16, 9, 0, 0)
    const WriteSecondPeriodEnd = new Date(2023, 9, 19, 17, 0, 0)

    const [canAccessWrite,setCanAccessWrite] = useState<boolean>(true)
    const WriteLimitControl = () => {
        /*
        if (currentDate >= WriteFirstPeriodStart && currentDate <= WriteFirstPeriodEnd){
            setCanAccessWrite(true)
        } else if (currentDate >= WriteSecondPeriodStart && currentDate <= WriteSecondPeriodEnd){
            setCanAccessWrite(true)
        } else {
            setCanAccessWrite(false)
        } */
    return canAccessWrite;
  };

    // 원서 최종 제출 접근 시간 관리
    // 서버에서 처리

    // 회원가입 접근 시간 관리
    // 10/11(수) 9시 ~ 10/19(목) 17시
    const SignupPeriodStart = new Date(2023, 9, 11, 9, 0, 0)
    const SignupPeriodEnd = new Date(2023, 9, 19, 17, 0, 0)

    const [canAccessSignup, setCanAccessSignup] = useState<boolean>(true)
    const SignupLimitControl = () => {
        /* if(currentDate >= SignupPeriodStart && currentDate <= SignupPeriodEnd){
            setCanAccessSignup(true)
        } else {
            setCanAccessSignup(false)
        } */
        return canAccessSignup
    }

    return{
        canAccessWrite,
        WriteLimitControl,

        canAccessSignup,
        SignupLimitControl
    }
};

export default useTimeLimit;
