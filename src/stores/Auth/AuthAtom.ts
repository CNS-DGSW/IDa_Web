import { atom } from "recoil";

// 로그인인지 확인하는 변수
const loginAtom = atom<boolean>({
  key: "login",
  default: false,
});

// 어드민인지 확인하는 변수
const isAdminAtom = atom<boolean>({
  key: "isAdmin",
  default: false,
});

// 헤더에서 프로필 모달 관리하는 변수
const profileBox = atom<boolean>({
  key: "profileBox",
  default: false,
});

// 이름
const nameAtom = atom<string>({
  key: "name",
  default: "",
});

// 이메일
const emailAtom = atom<string>({
  key: "email",
  default: "",
});

const applyBox = atom<boolean>({
  key: "applyBox",
  default: false,
});

export { loginAtom, isAdminAtom, profileBox, nameAtom, emailAtom, applyBox };
