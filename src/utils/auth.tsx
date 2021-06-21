import { VFC, useEffect, useState, ReactElement } from "react"
import auth from "../utils/fbConfig"
import { useRouter } from "next/router"
import { useRecoilState, useSetRecoilState } from "recoil"
import { fbAccessTokenAtom } from "../atom/fbAccessTokenAtom"
import { isLoggedInState } from "../atom/isLoginAtom"

// 認証情報を考慮した画面遷移を行うためのHOC
export const AuthRouterWrapper: VFC<{ children: ReactElement }> = ({ children }): ReactElement => {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState)
  const setAccessToken = useSetRecoilState(fbAccessTokenAtom)
  const [isAuthChecked, setIsAuthChecked] = useState(false)

  useEffect(() => {
    const setAuthObserver = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setIsLoggedIn(true)
          user.getIdToken(true).then((idToken) => {
            setAccessToken(idToken)
          })
        } else {
          setIsLoggedIn(false)
          setAccessToken("")
        }
      })
    }
    setAuthObserver()
  }, [])

  useEffect(() => {
    const routing = async () => {
      if (isLoggedIn !== null) {
        if (isLoggedIn) {
          if (router.pathname === "/login") {
            await router.push("/add")
          }
        } else if (router.pathname !== "/login") {
          await router.push("/login")
        }
        setIsAuthChecked(true)
      }
    }
    routing()
  }, [router.pathname, isLoggedIn])

  return <>{isAuthChecked && children}</>
}

export const logIn = async (eMail: string, password: string) => {
  let isSuccess = false
  await auth
    .signInWithEmailAndPassword(eMail, password)
    .then(() => {
      isSuccess = true
    })
    .catch(() => {
      isSuccess = false
    })
  return isSuccess
}

// @ts-ignore
export const logOut = async () => {
  let isSuccess = false
  await auth
    .signOut()
    .then(() => {
      isSuccess = true
    })
    .catch(() => {
      isSuccess = false
    })
  return isSuccess
}
