import CustomInput from 'components/common/CustomInput';
import React from 'react';
import "./VerificationNumber.scss"

interface VerificationNumberType {
    value:string
    setValue:React.Dispatch<React.SetStateAction<string>>
    counter:string
}

/**
 * @todo customInput에 hover가 되는 css없애기,
 * 5분 세아리기
 */
const VerificationNumber = ({
    value,
    setValue
}:VerificationNumberType) => {
    return (
        <div className='VerificationNumber-wrapper'>
            <CustomInput
                style={{margin:"0px" ,border:"0px", width:"80%"}}
                value={value}
                setValue={setValue}
                type="text"
                placeholder='인증번호'
            />
            <div>
                
            </div>
        </div>
    );
};

export default VerificationNumber;