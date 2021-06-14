import { atom } from "recoil"

export const fbAccessTokenAtom = atom<string>({
  key: "fbAccessTokenAtom",
  default: ""
})
