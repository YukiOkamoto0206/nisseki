import React, { useState } from "react"
import { logIn, logOut } from "../../utils/auth"
import { useRecoilState, useRecoilValue } from "recoil"
import { isLoggedInState } from "../../atom/isLoginAtom"
import Button from "../../components/button"
import { Input } from "../../components/input"
import Layout from "../../components/layout"
import PageTitle from "../../components/pageTitle"
import { useRouter } from "next/router"

const Login: React.VFC = () => {
  const router = useRouter()
  const [eMail, setEMail] = useState("")
  const [password, setPassword] = useState("")
  const [eMailValidMessage, setEMailValidMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState)

  // メールアドレスの書式チェック
  const validateEmail = (value: string) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!value) {
      setEMailValidMessage("※メールアドレスは必須項目です")
    } else if (!regex.test(value)) {
      setEMailValidMessage("※正しい形式でメールアドレスを入力してください")
    } else {
      setEMailValidMessage("")
    }
    setEMail(value)
  }

  // ログインボタン押下時
  const handleSubmit = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()
    console.log("login")
    const isSuccess = await logIn(eMail, password)
    console.log(isSuccess)
    if (!isSuccess) {
      setErrorMessage("※メールアドレスまたはパスワードが違います")
    } else {
      router.push("/add")
      setIsLoggedIn(true)
    }
  }

  const toLogOut = () => {
    logOut().then(() => {
      setIsLoggedIn(false)
    })
  }

  return (
    <Layout>
      <PageTitle title={"管理者ログインページ"} />
      <form className={"text-center mt-10"}>
        <div className={"text-white"}>メールアドレス</div>
        <Input
          setter={validateEmail}
          holder="nisseki@gmail.com"
          className="p-2"
          size={"w-64 h-6 rounded p-2"}
        />
        <div className={"text-red-500"}>{eMailValidMessage}</div>
        <div className={"text-white"}>パスワード</div>
        <Input
          setter={setPassword}
          holder="********"
          type="password"
          className="p-2"
          size={"w-64 h-6 rounded p-2"}
        />

        <div className="text-red-500 mb-5">{errorMessage}</div>
        {isLoggedIn ? (
          <Button text="ログアウト" onClick={toLogOut} />
        ) : (
          <Button text="ログイン" onClick={handleSubmit} />
        )}

        <div className={"text-white my-5"}>
          現在の状態：{isLoggedIn !== undefined && (isLoggedIn ? "ログイン済み" : "ログアウト済み")}
        </div>
      </form>
    </Layout>
  )
}

export default Login
