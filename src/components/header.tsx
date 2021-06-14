import React, { useRef, useState } from "react"
import Image from "next/image"
import styled from "styled-components"
import { useRouter } from "next/router"

const HamburgerDiv = styled.div`
  transform: scale(0.7, 0.7);
  padding: 0.75rem 0 0 0 !important;
`

const Header: React.VFC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openHamburger = () => {
    setIsOpen(!isOpen)
  }
  const menuRef: any = useRef()
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
      <div className="relative flex items-center justify-between flex-wrap bg-teal py-2 pl-2 pr-6 bg-black">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <Image src={"/logo.jpg"} width={280} height={55} onClick={toTop} />
        </div>
        <div className="block lg:hidden z-30">
          {isOpen ? (
            <button onClick={openHamburger} className="pt-1">
              <Image src={"/close_white_24dp.svg"} width={35} height={35} />
            </button>
          ) : (
            <>
              <button onClick={openHamburger} className="pt-1">
                <Image src={"/list_white_24dp.svg"} width={35} height={35} />
              </button>
            </>
          )}
        </div>
        {/*</div>*/}
        {isOpen ? (
          <div
            className={
              "fixed -right-0 top-0 w-98 h-screen pt-20 bg-gray-800 z-10 overflow-y-auto transition duration-700"
            }
          >
            <ul onBlur={() => setIsOpen(false)} ref={menuRef} className={"text-white p-4 m-2"}>
              <li onClick={toTop} className={"mt-2"}>
                トップページ
              </li>
              <li onClick={toContact} className={"my-2"}>
                Staff紹介
              </li>
              <li onClick={toCompany} className={"my-2"}>
                会社情報
              </li>
              <li onClick={toSukiya} className={"my-2"}>
                すき家情報
              </li>
              <li onClick={toTerms} className={"mt-2"}>
                利用規約
              </li>
              <li onClick={toPresident} className={"mt-2"}>
                社長から皆さまへ
              </li>
              <li onClick={toCovid} className={"mt-2"}>
                営業再開のお知らせ
              </li>
              <li onClick={toAddPage} className={"my-2"}>
                管理者画面
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default Header
