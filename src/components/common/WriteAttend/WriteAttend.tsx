import React from "react";
import PropTypes from "prop-types";
import "./WriteAttend.scss";

interface WriteAdmissionProps {
  absence1: number;
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
  handleAbsenceLecture3: (absenceLecture3: number) => void;
}

const WriteAttend = ({
  absence1,
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
  handleAbsenceLecture3,
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
          <div className="addition-attend-grade">미인정출석</div>
          <div>
            <input
              type="number"
              value={absence1}
              onChange={(e) => handleAbsence1(e.target.valueAsNumber)}
            />
          </div>
          <div>
            <input
              type="number"
              value={absence2}
              onChange={(e) => handleAbsence2(e.target.valueAsNumber)}
            />
          </div>
          <div>
            <input
              type="number"
              value={absence3}
              onChange={(e) => handleAbsence3(e.target.valueAsNumber)}
            />
          </div>
        </div>

        <div className="addition-attend">
          <div className="addition-attend-grade">미인정지각</div>
          <div>
            <input
              type="number"
              value={lateness1}
              onChange={(e) => handleLateness1(e.target.valueAsNumber)}
            />
          </div>
          <div>
            <input
              type="number"
              value={lateness2}
              onChange={(e) => handleLateness2(e.target.valueAsNumber)}
            />
          </div>
          <div>
            <input
              type="number"
              value={lateness3}
              onChange={(e) => handleLateness3(e.target.valueAsNumber)}
            />
          </div>
        </div>

        <div className="addition-attend">
          <div className="addition-attend-grade">미인정조퇴</div>
          <div>
            <input
              type="number"
              value={earlyLeave1}
              onChange={(e) => handleEarlyLeave1(e.target.valueAsNumber)}
            />
          </div>
          <div>
            <input
              type="number"
              value={earlyLeave2}
              onChange={(e) => handleEarlyLeave2(e.target.valueAsNumber)}
            />
          </div>
          <div>
            <input
              type="number"
              value={earlyLeave3}
              onChange={(e) => handleEarlyLeave3(e.target.valueAsNumber)}
            />
          </div>
        </div>

        <div className="addition-attend">
          <div className="addition-attend-grade">미인정결과</div>
          <div>
            <input
              type="number"
              value={absenceLecture1}
              onChange={(e) => handleAbsenceLecture1(e.target.valueAsNumber)}
            />
          </div>
          <div>
            <input
              type="number"
              value={absenceLecture2}
              onChange={(e) => handleAbsenceLecture2(e.target.valueAsNumber)}
            />
          </div>
          <div>
            <input
              type="number"
              value={absenceLecture3}
              onChange={(e) => handleAbsenceLecture3(e.target.valueAsNumber)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

WriteAttend.propTypes = {};

export default WriteAttend;
