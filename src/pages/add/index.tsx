import React, { useState } from "react"
import { AuthRouterWrapper, logOut } from "../../utils/auth"
import Layout from "../../components/layout"
import Button from "../../components/button"
import PageTitle from "../../components/pageTitle"
import { Input } from "../../components/input"
import { db } from "../../lib/db"

const Index: React.VFC = () => {
  const [info, setInfo] = useState("")
  const ts = "2021-1-4 13:00:00"
  const date = Date.parse(ts.replace(/-/g, "/")) / 1000
  const docData = {
    date: "2021年1月4日 14:00:00 UTC+9",
    isKing: false,
    place: "今治店"
  }
  const addInfo = async () => {
    // await db
    //   .collection("sukiyaList")
    //   .add(docData)
    //   .then(function () {
    //     console.log("success")
    //   })
    //   .catch(function (error) {
    //     console.log("error", error)
    //   })
  }

  return (
    <Layout>
      <AuthRouterWrapper>
        <div className={"my-3"}>
          <div className={"w-3/4 mx-auto"}>
            <PageTitle title={"追加画面"} />
            <div className={"my-2"}></div>
            <Input
              holder={"12月31日　夜　宮内店　　　👑"}
              setter={setInfo}
              value={info}
              size={"w-64 h-6 rounded p-2"}
            />
            <Button onClick={addInfo} text="追加" />
          </div>
          <Button text={"ログアウト"} onClick={logOut} />
        </div>
      </AuthRouterWrapper>
    </Layout>
  )
}
export default Index
