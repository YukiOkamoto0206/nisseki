import React from "react"
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import Head from "next/head"
import Header from "../components/header"
import Image from "next/image"
import { Footer } from "../components/footer"
import { useRouter } from "next/router"
const Index: React.FC = () => {
  const router = useRouter()
  const toInstagram = () => {
    router.push("https://instagram.com/shota7735?igshid=qalzwftnczpr")
  }

  return (
    <>
      <Head>
        <title>日赤タクシー</title>
      </Head>
    <main className={"bg-black"}>
      <Header />
      <section className="relative w-full text-white ">
        <Image src="/top-taxi.jpg" width={1920} height={1080}/>
      </section>
      <div
        className="mx-auto mt-3 bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent w-1/3 text-center"
        onClick={toInstagram}
      >
        ご予約
      </div>
      <section>
        <div className="text-white pb-2">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="text-yellow-300 uppercase tracking-loose">Working Process</p>
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed">実績</p>
            </div>


            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div className="border-2-2 border-yellow-555 absolute h-full border"></div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1  px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">October, 2020</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">日赤タクシー創業</h4>
                      <Image src={"/nisseki-start.jpg"} width={280} height={196}/>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        創業者である飯泉翔太氏によって日赤タクシー（日本赤十字タクシー株式会社）が設立される
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-yellow-300">6-9 May, 2021</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Participation</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Participate online. The links for your registered events will be sent to you via email and
                        whatsapp
                        groups. Use those links and show your talent.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300"> 10 May, 2021</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Result Declaration</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the resukts will
                        be
                        announced on the whatsapp groups and will be mailed to you.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-yellow-300">12 May, 2021</p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Prize Distribution</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The winners will be contacted by our team for their addresses and the winning goodies will be
                        sent at
                        their addresses.
                      </p>
                    </div>
                  </div>
                </div>
                <img className="mx-auto -mt-36 md:-mt-36"
                     src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={"mb-4"}>
        <div className={"text-center"}>
        <Image src={"/syota.jpg"} width={294} height={220}/>
        </div>
        <div className={"text-white text-center"}>安全安心迅速に日赤タクシーが目的地までお供します</div>
        <div
          className="mx-auto mt-3 bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent w-1/3 text-center"
          onClick={toInstagram}
        >
          ご予約
        </div>
      </section>

      <section>

      </section>

      <Footer />
    </main>
    </>
  )
}

export default Index
