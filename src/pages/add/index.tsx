import React, { useState } from "react"
import { AuthRouterWrapper, logOut } from "../../utils/auth"
import Layout from "../../components/layout"
import Button from "../../components/button"
import PageTitle from "../../components/pageTitle"
import { Input } from "../../components/input"

const Index: React.VFC = () => {
  const [info, setInfo] = useState("")

  return (
    <Layout>
      <AuthRouterWrapper>
        <div className={"my-3"}>
          <div className={"w-3/4 mx-auto"}>
            <PageTitle title={"追加画面"} />
            <div className={"my-2"}></div>
            <Input
              holder={"12月31日　夜　宮内店　　　　👑"}
              setter={setInfo}
              value={info}
              size={"w-64 h-6 rounded p-2"}
            />
            <button className={"text-white"}>{info}追加</button>
          </div>
          <Button text={"ログアウト"} onClick={logOut} />
        </div>
      </AuthRouterWrapper>
    </Layout>
  )
}
export default Index
