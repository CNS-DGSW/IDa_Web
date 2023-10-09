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
  key: "",
  default: null,
});
const examCodeAtom = atom<number | null>({
  key: "",
  default: null,
});
const nameAtom = atom<string | null>({
  key: "",
  default: null,
});
const sexAtom = atom<string | null>({
  key: "",
  default: null,
});
const birthAtom = atom<string | null>({
  key: "",
  default: null,
});
const areaAtom = atom<string | null>({
  key: "",
  default: null,
});
const schoolAtom = atom<string | null>({
  key: "",
  default: null,
});
const gradeTypeAtom = atom<string | null>({
  key: "",
  default: null,
});
const finalApplyTypeAtom = atom<string | null>({
  key: "",
  default: null,
});
const finalApplyDetailTypeAtom = atom<string | null>({
  key: "",
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
