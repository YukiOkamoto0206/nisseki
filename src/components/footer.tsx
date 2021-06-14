import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"

export const Footer: React.FC = () => {
  const router = useRouter()
  const toTop = () => {
    router.push("/")
  }
  const toContact = () => {
    router.push("/contact")
  }
  const toTerms = () => {
    router.push("/terms")
  }
  const toPresident = () => {
    router.push("/president")
  }
  const toCovid = () => {
    router.push("/covid")
  }
  const toCompany = () => {
    router.push("/company")
  }
  const toSukiya = () => {
    router.push("/sukiya")
  }
  const toAddPage = () => {
    router.push("/add")
  }
  return (
    <>
      <div className={"w-full bg-gray-400"}>
        <div className={"text-center pt-2"}>
          <Image src="/local_taxi_white_24dp.svg" width={80} height={80} />
        </div>
        <div className={"mx-auto w-3/4 -mt-2"}>
          <div className={"text-xl border-b-4 border-gray-900"}>日赤タクシーについて</div>
          <div className={"mt-1"} onClick={toTop}>
            トップページ
          </div>
          <div className={"mt-1"} onClick={toContact}>
            Staff紹介
          </div>
          <div className={"mt-1"} onClick={toCompany}>
            会社情報
          </div>
          <div className={"mt-1"} onClick={toSukiya}>
            すき家情報
          </div>
          <div className={"mt-1"} onClick={toTerms}>
            利用規約
          </div>
          <div className={"mt-1"} onClick={toPresident}>
            社長から皆さまへ
          </div>
          <div className={"mt-1"} onClick={toCovid}>
            営業再開のお知らせ
          </div>
          <div className={"mt-1"} onClick={toAddPage}>
            管理者画面
          </div>
        </div>
        <div className={"text-center mt-4"}>Copyright © 2021 NISSEKI inc.</div>
      </div>
    </>
  )
}
