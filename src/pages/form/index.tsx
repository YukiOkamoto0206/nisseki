import React, { useState } from "react"
import { Input } from "../../components/input"
import { textFormState } from "../../atom/textAtom"
import { SetterOrUpdater, useSetRecoilState, useRecoilValue, useRecoilState } from "recoil"
import { useRouter } from "next/router"
import { pageStatusState } from "../../atom/pageStatusAtom"
import { PageStatus } from "../../types/pageType"

const Index: React.VFC = () => {
  const router = useRouter()
  // const pageStatusValue: PageStatus = useRecoilValue(pageStatusState)
  // const setPageStatusValue: SetterOrUpdater<PageStatus> = useSetRecoilState(pageStatusState)
  const [pageStatusValue, setPageStatusValue] = useRecoilState(pageStatusState)
  const toUseState = () => {
    setPageStatusValue(PageStatus.useStatePage)
  }
  const toRecoil = () => {
    setPageStatusValue(PageStatus.RecoilPage)
  }
  const Recoil = () => {
    const textValue: string = useRecoilValue(textFormState)
    const setTextValue: SetterOrUpdater<string> = useSetRecoilState(textFormState)
    // const [textValue, setTextValue] = useRecoilState(textFormState)
    return (
      <>
        <Input holder={"Recoil holder"} setter={setTextValue} value={textValue} />
        <button onClick={toUseState}>次へ</button>
      </>
    )
  }
  const UseState = () => {
    const [textValue, setTextValue] = useState("")
    return (
      <>
        <Input holder={"useState holder"} setter={setTextValue} value={textValue} />
        <button onClick={toRecoil}>次へ</button>
      </>
    )
  }

  return <>{pageStatusValue === PageStatus.RecoilPage ? <Recoil /> : <UseState />}</>
}

export default Index
