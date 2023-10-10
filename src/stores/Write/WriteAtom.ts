import { atom } from "recoil";
import Score from "util/enums/Score";
import Grade from "util/enums/Grade";
import FreeSemType from "util/types/FreeSem";
import ScoreGrade from "util/types/ScoreGrade";

const userIdxAtom = atom<number | null>({
  key: "userIdx",
  default: null,
});

const pageAtom = atom<number>({
  key: "page",
  default: 0,
});

const gradeTypeAtom = atom<Grade | null>({
  key: "gradeType",
  default: null,
});

const isChangedAtom = atom<boolean>({
  key: "isChanged",
  default: false,
});

const englishScoreAtom = atom<number>({
  key: "englishScore",
  default: 0,
});

const koreanScoreAtom = atom<number>({
  key: "koreanScore",
  default: 0,
});

const mathScoreAtom = atom<number>({
  key: "mathScore",
  default: 0,
});

const otherScoreAtom = atom<number>({
  key: "otherScore",
  default: 0,
});

const scienceScoreAtom = atom<number>({
  key: "scienceScore",
  default: 0,
});

const socialScoreAtom = atom<number>({
  key: "socialScore",
  default: 0,
});

const gradesAtom = atom<ScoreGrade[]>({
  key: "grades",
  default: [
    {
      score11: Score.NONE,
      score12: Score.NONE,
      score21: Score.NONE,
      score22: Score.NONE,
      score31: Score.NONE,
      score32: Score.NONE,
      subjectName: "",
    },
  ],
});

const freeSemAtom = atom<FreeSemType>({
  key: "freeSem",
  default: {
    freeSem11: false,
    freeSem12: false,
    freeSem21: false,
    freeSem22: false,
    freeSem31: false,
    freeSem32: false,
  },
});

//학년별 미인정 출석
const absence1Atom = atom<number>({
  key: "absence1",
  default: 0,
});
const absence2Atom = atom<number>({
  key: "absence2",
  default: 0,
});
const absence3Atom = atom<number>({
  key: "absence3",
  default: 0,
});

//학년별 미인정 지각
const lateness1Atom = atom<number>({
  key: "lateness1",
  default: 0,
});
const lateness2Atom = atom<number>({
  key: "lateness2",
  default: 0,
});
const lateness3Atom = atom<number>({
  key: "lateness3",
  default: 0,
});

//학년별 미인정 조퇴
const earlyLeave1Atom = atom<number>({
  key: "earlyLeave1",
  default: 0,
});
const earlyLeave2Atom = atom<number>({
  key: "earlyLeave2",
  default: 0,
});
const earlyLeave3Atom = atom<number>({
  key: "earlyLeave3",
  default: 0,
});

//학년별 미인정 결과
const absenceLecture1Atom = atom<number>({
  key: "absenceLecture1",
  default: 0,
});
const absenceLecture2Atom = atom<number>({
  key: "absenceLecture2",
  default: 0,
});
const absenceLecture3Atom = atom<number>({
  key: "absenceLecture3",
  default: 0,
});

//학기중 학생임원 여부
const leadership11Atom = atom<boolean>({
  key: "leadership11",
  default: false,
});
const leadership12Atom = atom<boolean>({
  key: "leadership12",
  default: false,
});
const leadership21Atom = atom<boolean>({
  key: "leadership21",
  default: false,
});
const leadership22Atom = atom<boolean>({
  key: "leadership22",
  default: false,
});
const leadership31Atom = atom<boolean>({
  key: "leadership31",
  default: false,
});
const leadership32Atom = atom<boolean>({
  key: "leadership32",
  default: false,
});

//모범생 수상 개수
const prizeAtom = atom<number>({
  key: "prize",
  default: 0,
});

//학년별 봉사 시간
const volunteer1Atom = atom<number>({
  key: "volunteer1",
  default: 0,
});
const volunteer2Atom = atom<number>({
  key: "volunteer2",
  default: 0,
});
const volunteer3Atom = atom<number>({
  key: "volunteer3",
  default: 0,
});


export {
  userIdxAtom,
  pageAtom,
  gradeTypeAtom,
  isChangedAtom,
  englishScoreAtom,
  koreanScoreAtom,
  mathScoreAtom,
  otherScoreAtom,
  scienceScoreAtom,
  socialScoreAtom,
  gradesAtom,
  freeSemAtom,
  absence1Atom,
  absence2Atom,
  absence3Atom,
  absenceLecture1Atom,
  absenceLecture2Atom,
  absenceLecture3Atom,
  lateness1Atom,
  lateness2Atom,
  lateness3Atom,
  earlyLeave1Atom,
  earlyLeave2Atom,
  earlyLeave3Atom,
  leadership11Atom,
  leadership12Atom,
  leadership21Atom,
  leadership22Atom,
  leadership31Atom,
  leadership32Atom,
  prizeAtom,
  volunteer1Atom,
  volunteer2Atom,
  volunteer3Atom,
};
