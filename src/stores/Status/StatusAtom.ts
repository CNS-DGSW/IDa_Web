import StatusApi from "assets/api/StatusApi";
import { atom, selector } from "recoil";
import { FinalStatusResponse } from "util/types/Response";

const submitAtom = atom<boolean>({
  key: "submitAtom",
  default: false,
});

const printAtom = atom<boolean>({
  key: "printAtom",
  default: false,
});

const checkedPrintAtom = atom<boolean | string>({
  key: "checkedPrintAtom",
  default: false,
});

const passAtom = atom<boolean | null | undefined | string>({
  key: "passAtom",
  default: undefined,
});

const statusModalAtom = atom<boolean>({
  key: "statusModalAtom",
  default: false,
});

const canAccessAtom = atom<boolean>({
  key: "canAccessAtom",
  default: false,
});

const isPassedAtom = atom<boolean | null>({
  key: "isPassedAtom",
  default: null,
});
const examCodeAtom = atom<number | null>({
  key: "examCodeAtom",
  default: null,
});
const nameAtom = atom<string | null>({
  key: "nameAtom",
  default: null,
});
const sexAtom = atom<string | null>({
  key: "sexAtom",
  default: null,
});
const birthAtom = atom<string | null>({
  key: "birthAtom",
  default: null,
});
const areaAtom = atom<string | null>({
  key: "areaAtom",
  default: null,
});
const schoolAtom = atom<string | null>({
  key: "schoolAtom",
  default: null,
});
const gradeTypeAtom = atom<string | null>({
  key: "gradeTypeAtom",
  default: null,
});
const finalApplyTypeAtom = atom<string | null>({
  key: "finalApplyTypeAtom",
  default: null,
});
const finalApplyDetailTypeAtom = atom<string | null>({
  key: "finalApplyDetailTypeAtom",
  default: null,
});

export {
  submitAtom,
  passAtom,
  checkedPrintAtom,
  printAtom,
  schoolAtom,
  statusModalAtom,
  canAccessAtom,
  isPassedAtom,
  examCodeAtom,
  nameAtom,
  sexAtom,
  birthAtom,
  areaAtom,
  gradeTypeAtom,
  finalApplyDetailTypeAtom,
  finalApplyTypeAtom,
};
