import React from "react"
import Image from "next/image"
import { useRouter } from 'next/router'

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

  return (
    <>
      <div className={"w-full bg-gray-400 h-64"}>
        <div className={"text-center pt-2"}>
          <Image src="/local_taxi_white_24dp.svg" width={80} height={80}/>
        </div>
        <div className={"mx-auto w-3/4 -mt-2"}>
          <div className={"text-xl border-b-4 border-gray-900"}>日赤タクシーについて</div>
          <div className={"mt-1"} onClick={toTop}>トップページ</div>
          <div className={"mt-1"} onClick={toContact}>お問い合わせ</div>
          <div className={"mt-1"} onClick={toTerms}>利用規約</div>
        </div>
        <div className={"text-center mt-4"}>
          Copyright © 2021 NISSEKI inc.
        </div>
      </div>
    </>
  )
}