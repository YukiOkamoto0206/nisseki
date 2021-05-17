import { atom } from "recoil"

export const textFormState = atom<string>({
  key: "textForm",
  default: ""
})
