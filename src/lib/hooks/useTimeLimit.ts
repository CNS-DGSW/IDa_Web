import React, { useState } from 'react';

const currentDate = new Date()

const useTimeLimit = () => {
    // 원서접수 접근 시간 관리

    // 10/11(수) 9시 ~ 10/13(금) 17시 (시범운영)
    // 10/16(월) 9시 ~ 10/19(목) 17시 (정식운영)
    const WriteFirstPeriodStart = new Date(2023, 9, 11, 9, 0, 0)
    const WriteFirstPeriodEnd = new Date(2023, 9, 13, 17)
    const WriteSecondPeriodStart = new Date(2023, 9, 16, 9)
    const WriteSecondPeriodEnd = new Date(2023, 9, 19, 17)

    /* const WriteFirstTestTimeStart = new Date(2023,9,9,22,14)
    const WriteFirstTestTimeEnd = new Date(2023,9,9,22,30)
    const WriteSecondTestTimeStart = new Date(2023,9,9,22,56)
    const WriteSecondTestTimeEnd = new Date(2023,9,9,22,57) */

    const [canAccessWrite,setCanAccessWrite] = useState<boolean>(false)
    const WriteLimitControl = () => {
        if (currentDate >= WriteFirstPeriodStart && currentDate <= WriteFirstPeriodEnd){
            setCanAccessWrite(true)
        } else if (currentDate >= WriteSecondPeriodStart && currentDate <= WriteSecondPeriodEnd){
            setCanAccessWrite(true)
        } else {
            setCanAccessWrite(false)
        }
        /* if (currentDate >= WriteFirstTestTimeStart && currentDate <= WriteFirstTestTimeEnd){
            setCanAccessWrite(true)
        } else if (currentDate >= WriteSecondTestTimeStart && currentDate <= WriteSecondTestTimeEnd){
            setCanAccessWrite(true)
        } else {
            setCanAccessWrite(false)
        } */
        return canAccessWrite
    }

    // 원서 최종 제출 접근 시간 관리
    // 서버에서 처리

    // 회원가입 접근 시간 관리
    // 10/11(수) 9시 ~ 10/19(목) 17시
    const SignupPeriodStart = new Date(2023, 9, 11, 9)
    const SignupPeriodEnd = new Date(2023, 9, 19, 17)

    const [canAccessSignup, setCanAccessSignup] = useState<boolean>()
    const SignupLimitControl = () => {
        if(currentDate >= SignupPeriodStart && currentDate <= SignupPeriodEnd){
            setCanAccessSignup(true)
        } else {
            setCanAccessSignup(false)
        }
    }

    return{
        canAccessWrite,
        WriteLimitControl,



        canAccessSignup,
        SignupLimitControl
    }
};

export default useTimeLimit;