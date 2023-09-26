import { atom } from "recoil";

// 로그인인지 확인하는 변수
const login = atom<boolean>({
  key: "login",
  default: false,
});

// 어드민인지 확인하는 변수
const isAdmin = atom<boolean>({
  key: "isAdmin",
  default: false,
});

// 헤더에서 프로필 모달 관리하는 변수
const profileBox = atom<boolean>({
  key: "profileBox",
  default: false,
});

// 이름
const name = atom<string>({
  key: "name",
  default: "",
});

// 이메일
const email = atom<string>({
  key: "email",
  default: "",
});

const applyBox = atom<boolean>({
  key: "applyBox",
  default: false,
});

export { login, isAdmin, profileBox, name, email, applyBox };
