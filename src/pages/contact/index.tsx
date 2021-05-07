import React from "react"
import Header from "../../components/header"
import { Footer } from "../../components/footer"
import Image from "next/image"
import { useRouter } from "next/router"

const Index: React.FC = () => {
  const router = useRouter()
  const toAsano = () => {
    router.push("https://instagram.com/div_asano20?igshid=1v53rev6zr57l")
  }
  const toYuki = () => {
    router.push("https://instagram.com/yuki_0206_cs?igshid=8st84s8xc104")
  }
  return (
    <>
      <div className={"bg-black"}>
      <Header/>
        <div className={"text-bold text-2xl text-center p-2 text-white border-b-2"}>Staff</div>
      <div
        className="max-w-xs rounded overflow-hidden my-2 mx-auto border-2"
        onClick={toAsano}
      >
        <div className="px-6 py-4">
          <Image src={"/asano.jpg"} width={1478} height={1108} />
          <div className="text-white font-bold text-xl mb-2">Atsuya (Creative Director)</div>
          <p className="text-white text-base">
           I am mainly in charge of design and public relations at our company. We will do our best to support you day and night.
            career：Ritsumeikan Asia Pacific University
          </p>
        </div>
      </div>

        <div
          className="max-w-xs rounded overflow-hidden my-2 mx-auto border-2"
          onClick={toYuki}
        >
          <div className="px-6 py-4">
            <Image src={"/yukiki.jpg"} width={748} height={540} />
            <div className="text-white font-bold text-xl mb-2">Yuki (CTO)</div>
            <p className="text-white text-base">
              I am an engineer as Chief Technology Officer at Nisseki Taxi. The more, the merrier. You know what I mean?
              career: California State University
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Index