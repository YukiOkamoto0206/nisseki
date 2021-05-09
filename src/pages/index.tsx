import React, { useState } from "react"
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import Head from "next/head"
import Header from "../components/header"
import Image from "next/image"
import { Footer } from "../components/footer"
import { useRouter } from "next/router"
import Modal from "react-modal"
const Index: React.FC = () => {
  const router = useRouter()
  const toInstagram = () => {
    router.push("https://instagram.com/is__richard?igshid=1rb5120gz5j8s")
  }
  Modal.setAppElement('#__next')

    const [modalIsOpen,setIsOpen] = useState(false)

    // モーダルを開く処理
    const openModal = () => {
      setIsOpen(true)
    }

    // モーダルを閉じる処理
    const closeModal = () => {
      setIsOpen(false)
    }

  return (
    <>
      <Head>
        <title>Nisseki Taxi</title>
      </Head>
    <main className={"bg-black"}>
      <Header />
      <section className="w-full text-white ">
        <Image src="/top-taxi.jpg" width={1920} height={1080}/>
      </section>

      <Modal
        // isOpenがtrueならモダールが起動する
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={"fixed top-1/4 left-1/4 right-3/4 h-1/2 w-1/2 bottom-3/4 bg-black text-white"}
      >
        <div className={"float-right p-1"}>
          <Image src={"/close_white_24dp.svg"} width={20} height={20} onClick={closeModal}/>
        </div>
        <div className={"mt-3 ml-3 text-xl"}>車種選択をする</div>
        <div className={"my-1 mx-2"}>
          <form method="post" action="example.cgi">
            <div className={"float-left"}>
            <input type="radio" name="q1"></input> MAZDA 3
            </div>
            <Image src={"/mazda3.jpeg"} width={1140} height={641} />
            <input type="radio" name="q1"></input> MAZDA CX-8
            <Image src={"/cx-8.jpeg"} width={1440} height={800} />
          </form>
        </div>
        <div
          className="mx-auto mt-1 bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-1 px-2 border border-yellow-300 hover:border-transparent w-1/2 text-center"
          onClick={toInstagram}
        >
          ご予約
        </div>
      </Modal>

      <div
        className="mx-auto mt-3 bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent w-1/3 text-center"
        onClick={openModal}
      >
        車種選択
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
                  <div className="border-2-2 absolute h-full border"></div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-yellow-300">August, 2020</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">日赤タクシー設立</h4>
                      <Image src={"/nisseki-start.jpg"} width={280} height={196}/>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        現代表取締役社長、飯泉翔太氏によって設立
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-yellow-300">October, 2020</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">日赤タクシー始動</h4>
                      <Image src={"/first.jpg"} width={280} height={196}/>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        開始当初は予約件数もほとんどなく、どん底からスタートであった。
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-yellow-300">November, 2020</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">事業拡大</h4>
                      <Image src={"/second.jpg"} width={280} height={196}/>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        新たに、新車両mazda3、ロードスターRF、CX-8を導入することで、「快適に移動をしたい」という顧客の要望を実現した。
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-yellow-300">December, 2020</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">ヘッドハンティング</h4>
                      <Image src={"/enter.jpg"} width={280} height={196}/>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        CEOの強力な人脈を駆使し、アメリカで修行した岡元氏をエンジニアとしてCTOに、別府市十文字原の奇才浅野CDを弊社に招き入れた。
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-yellow-300">January, 2021</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">(瀬戸内)海外に進出</h4>
                      <Image src={"/third.jpg"} width={280} height={196}/>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        2021年1月には看護学生の女の子2人から香川県までの送迎の依頼が入り、大型プロジェクトへと進展してきた。
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-yellow-300">March, 2021</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Nissekiのブランドの確立</h4>
                      <Image src={"/fourth.jpg"} width={280} height={196}/>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        無償で安心・安全に満足を届けることをモットーとしており、大学内での評判も急増し、大企業へと成長している。                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center w-full right-timeline">
                    <div className="order-1 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-yellow-300">April, 2021</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">野望達成か</h4>
                      <Image src={"/fifth.jpg"} width={280} height={196}/>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        また、2021年4月には日赤女子ツートップ(個人的)を送迎するといったS級任務を成し遂げることに成功した。                      </p>
                    </div>
                  </div>
                </div>
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
          onClick={openModal}
        >
          車種選択
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
