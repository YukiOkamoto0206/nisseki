import { atom } from "recoil"
import { PageStatus } from "../types/pageType"

export const pageStatusState = atom<PageStatus>({
  key: "pageState",
  default: PageStatus.RecoilPage
})
