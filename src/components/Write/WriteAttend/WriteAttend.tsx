import React from "react";
import "./WriteAttend.scss";
import numberCheck from "lib/numberCheck";
import AttendType from "util/types/Attend";

interface WriteAdmissionProps {
  attend:AttendType;
  setAttend:React.Dispatch<React.SetStateAction<AttendType>>;
  handleIsChanged: (value: boolean) => void;

  /* absence1: number;
  absence2: number;
  absence3: number;
  lateness1: number;
  lateness2: number;
  lateness3: number;
  earlyLeave1: number;
  earlyLeave2: number;
  earlyLeave3: number;
  absenceLecture1: number;
  absenceLecture2: number;
  absenceLecture3: number;
  handleAbsence1: (absence1: number) => void;
  handleAbsence2: (absence2: number) => void;
  handleAbsence3: (absence3: number) => void;
  handleLateness1: (lateness1: number) => void;
  handleLateness2: (lateness2: number) => void;
  handleLateness3: (lateness3: number) => void;
  handleEarlyLeave1: (earlyLeave1: number) => void;
  handleEarlyLeave2: (earlyLeave2: number) => void;
  handleEarlyLeave3: (earlyLeave3: number) => void;
  handleAbsenceLecture1: (absenceLecture1: number) => void;
  handleAbsenceLecture2: (absenceLecture2: number) => void;
  handleAbsenceLecture3: (absenceLecture3: number) => void; */
}

const WriteAttend = ({
  attend,
  setAttend,
  handleIsChanged,
  /* absence1,
  absence2,
  absence3,
  lateness1,
  lateness2,
  lateness3,
  earlyLeave1,
  earlyLeave2,
  earlyLeave3,
  absenceLecture1,
  absenceLecture2,
  absenceLecture3,
  handleAbsence1,
  handleAbsence2,
  handleAbsence3,
  handleLateness1,
  handleLateness2,
  handleLateness3,
  handleEarlyLeave1,
  handleEarlyLeave2,
  handleEarlyLeave3,
  handleAbsenceLecture1,
  handleAbsenceLecture2,
  handleAbsenceLecture3, */
}: WriteAdmissionProps) => {
  return (
    <>
      <div className="addition">
        <div className="addition-attend">
          <div className="addition-attend-grade">학년</div>
          <div className="addition-attend-white">1학년</div>
          <div className="addition-attend-white">2학년</div>
          <div className="addition-attend-white">3학년</div>
        </div>

        <div className="addition-attend">
          <div className="addition-attend-grade">미인정결석</div>
          <div>
            <input
              type="number"
              value={attend.absence1.toString()}
              onChange={(e) => {
                setAttend((attend) => {
                  return {...attend,absence1:numberCheck(e.target.value, 0, 365)}
                })
                handleIsChanged(true);
              }}
            />
          </div>
          <div>
            <input
              type="number"
              value={attend.absence2.toString()}
              onChange={(e) => {
                setAttend((attend) => {
                  return {...attend,absence2:numberCheck(e.target.value, 0, 365)}
                })
                handleIsChanged(true);
              }}
            />
          </div>
          <div>
            <input
              type="number"
              value={attend.absence3.toString()}
              onChange={(e) => {
                setAttend((attend) => {
                  return {...attend,absence3:numberCheck(e.target.value, 0, 365)}
                })
                handleIsChanged(true);
              }}
            />
          </div>
        </div>

        <div className="addition-attend">
          <div className="addition-attend-grade">미인정지각</div>
          <div>
            <input
              type="number"
              value={attend.lateness1.toString()}
              onChange={(e) => {
                setAttend((attend) => {
                  return {...attend,lateness1:numberCheck(e.target.value, 0, 365)}
                })
                handleIsChanged(true);
              }}
            />
          </div>
          <div>
            <input
              type="number"
              value={attend.lateness2.toString()}
              onChange={(e) => {
                setAttend((attend) => {
                  return {...attend,lateness2:numberCheck(e.target.value, 0, 365)}
                })
                handleIsChanged(true);
              }}
            />
          </div>
          <div>
            <input
              type="number"
              value={attend.lateness3.toString()}
              onChange={(e) => {
                setAttend((attend) => {
                  return {...attend,lateness3:numberCheck(e.target.value, 0, 365)}
                })
                handleIsChanged(true);
              }}
            />
          </div>
        </div>

        <div className="addition-attend">
          <div className="addition-attend-grade">미인정조퇴</div>
          <div>
            <input
              type="number"
              value={attend.earlyLeave1.toString()}
              onChange={(e) => {
                setAttend((attend) => {
                  return {...attend,earlyLeave1:numberCheck(e.target.value, 0, 365)}
                })
                handleIsChanged(true);
              }}
            />
          </div>
          <div>
            <input
              type="number"
              value={attend.earlyLeave2.toString()}
              onChange={(e) => {
                setAttend((attend) => {
                  return {...attend,earlyLeave2:numberCheck(e.target.value, 0, 365)}
                })
                handleIsChanged(true);
              }}
            />
          </div>
          <div>
            <input
              type="number"
              value={attend.earlyLeave3.toString()}
              onChange={(e) => {
                setAttend((attend) => {
                  return {...attend,earlyLeave3:numberCheck(e.target.value, 0, 365)}
                })
                handleIsChanged(true);
              }}
            />
          </div>
        </div>

        <div className="addition-attend">
          <div className="addition-attend-grade">미인정결과</div>
          <div>
            <input
              type="number"
              value={attend.absenceLecture1.toString()}
              onChange={(e) => {
                setAttend((attend) => {
                  return {...attend,absenceLecture1:numberCheck(e.target.value, 0, 365)}
                })
                handleIsChanged(true);
              }}
            />
          </div>
          <div>
            <input
              type="number"
              value={attend.absenceLecture2.toString()}
              onChange={(e) => {
                setAttend((attend) => {
                  return {...attend,absenceLecture2:numberCheck(e.target.value, 0, 365)}
                })
                handleIsChanged(true);
              }}
            />
          </div>
          <div>
            <input
              type="number"
              value={attend.absenceLecture3.toString()}
              onChange={(e) => {
                setAttend((attend) => {
                  return {...attend,absenceLecture3:numberCheck(e.target.value, 0, 365)}
                })
                handleIsChanged(true);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteAttend;
