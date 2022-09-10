import React from 'react';

interface VerificationNumberType {
    value:string
    setValue:React.Dispatch<React.SetStateAction<string>>
}

/**
 * 
 * @todo customInput에 hover가 되는 css없애기,
 * 5분 세아리기
 */
const VerificationNumber = ({
    value,
    setValue
}:VerificationNumberType) => {
    return (
        <div className='wrapper'>

        </div>
    );
};

export default VerificationNumber;