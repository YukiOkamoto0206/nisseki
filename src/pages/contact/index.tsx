import React from "react"
import Header from "../../components/header"
import { Footer } from "../../components/footer"
import Image from "next/image"

const Index: React.FC = () => {
  return (
    <>
      <Header/>
      {/*<div className={"text-center mx-auto"}>*/}
      {/*  <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">*/}
      {/*    <Image src={"/yuki.jpg"} width={100} height={100}/>*/}
      {/*      <div className="px-6 py-4">*/}
      {/*        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>*/}
      {/*        <p className="text-grey-darker text-base">*/}
      {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis*/}
      {/*        eaque, exercitationem praesentium nihil.*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*  </div>*/}
      <div className={"bg-black"}>
      <div className="max-w-xs rounded overflow-hidden my-2">
        <div className="px-6 py-4">
          <Image src={"/asano.jpg"} width={1478} height={1108}/>
          <div className="font-bold text-xl mb-2">Atsuya</div>
          <p className="text-white text-base">
            It's been 4 months since I was brought on board as our CD . I am mainly in charge of design and public relations at our company. Prior to being based in Hiroshima, I was active in Kyusyu and am also widelyknown as the concurrent representative of project A. We will do our best to support you day and night.
            career：Ritsumeikan Asia Pacific University 5th semester
          </p>
        </div>
      </div>

      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-grey-darker text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
            eaque, exercitationem praesentium nihil.
          </p>
        </div>
      </div>
      </div>


      <Footer />
    </>
  )
}

export default Index