import { atom } from "recoil"

export const isLoggedInState = atom<boolean | null>({
  key: "isLoggedInState",
  default: null
})
