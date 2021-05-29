import React, { useState } from "react"
import Head from "next/head"
import Header from "../components/header"
import Image from "next/image"
import { Footer } from "../components/footer"
import { useRouter } from "next/router"
import Modal from "react-modal"
import Achieve from "../components/achieve"
import Title from "../components/title"
import Button from "../components/button"
const Index: React.FC = () => {
  const router = useRouter()
  const toInstagram = () => {
    router.push("https://instagram.com/is__richard?igshid=1rb5120gz5j8s")
  }

  const [modalIsOpen, setIsOpen] = useState(false)

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
          <Image src="/top-taxi.jpg" width={1920} height={1080} />
        </section>

        <Modal
          // isOpenがtrueならモダールが起動する
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={
            "fixed top-1/4 left-1/4 right-3/4 h-1/2 w-1/2 bottom-3/4 bg-black text-white overflow-y-scroll rounded-xl border-black"
          }
        >
          <div className={"float-right p-1"}>
            <Image src={"/close_white_24dp.svg"} width={20} height={20} onClick={closeModal} />
          </div>
          <div className={"mt-3 ml-3 text-xl"}>車種選択をする</div>
          <div className={"my-1 mx-2"}>
            <form method="post" action="example.cgi">
              <div className={"float-left"}>
                <input type="radio" name="q1"></input> MAZDA 3
              </div>
              <Image src={"/mazda3.jpeg"} width={1140} height={641} />
              <input type="radio" name="q2"></input> MAZDA CX-8
              <Image src={"/cx-8.jpeg"} width={1440} height={800} />
              <input type="radio" name="q3"></input> ROADSTAR
              <Image src={"/roadstar.jpg"} width={708} height={472} />
              <input type="radio" name="q3"></input> DEMIO
              <Image src={"/demio.jpg"} width={870} height={640} />
              <input type="radio" name="q3"></input> IZUMI(入荷しました)
              <Image src={"/broken-car.jpg"} width={1284} height={952} />
            </form>
          </div>
          <Button text={"ご予約"} onClick={toInstagram} inModal={true}/>
        </Modal>

        <Button text={"車種選択"} onClick={openModal}/>
        <section>
          <div className="text-white pb-2">
            <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
              <Title engTitle={"WORKING PROCESS"} jpTitle={"実績"}/>
              <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                <div className="container mx-auto w-full h-full">
                  <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="border-2-2 absolute h-full border" />
                    <Achieve
                      date={"August, 2020"}
                      title={"日赤タクシー設立"}
                      src={"/nisseki-start.jpg"}
                      width={280}
                      height={196}
                      content={"現代表取締役社長、飯泉翔太氏によって設立"}
                    />

                    <Achieve
                      date={"October, 2020"}
                      title={"日赤タクシー始動"}
                      src={"/first.jpg"}
                      width={280}
                      height={196}
                      content={"開始当初は予約件数もほとんどなく、どん底からスタートであった。"}
                    />

                    <Achieve
                      date={"November, 2020"}
                      title={"事業拡大"}
                      src={"/second.jpg"}
                      width={280}
                      height={196}
                      content={
                        "新たに、新車両mazda3、ロードスターRF、CX-8を導入することで、「快適に移動をしたい」という顧客の要望を実現した。"
                      }
                    />

                    <Achieve
                      date={"December, 2020"}
                      title={"ヘッドハンティング"}
                      src={"/enter.jpg"}
                      width={280}
                      height={196}
                      content={
                        "CEOの強力な人脈を駆使し、アメリカで修行した岡元氏をエンジニアとしてCTOに、別府市十文字原の奇才浅野CDを弊社に招き入れた。"
                      }
                    />

                    <Achieve
                      date={"January, 2021"}
                      title={"(瀬戸内)海外に進出"}
                      src={"/third.jpg"}
                      width={280}
                      height={196}
                      content={
                        "2021年1月には看護学生の女の子2人から香川県までの送迎の依頼が入り、大型プロジェクトへと進展してきた。"
                      }
                    />

                    <Achieve
                      date={"March, 2021"}
                      title={"Nissekiのブランドの確立"}
                      src={"/fourth.jpg"}
                      width={280}
                      height={196}
                      content={
                        "無償で安心・安全に満足を届けることをモットーとしており、大学内での評判も急増し、大企業へと成長している。"
                      }
                    />
                    <Achieve
                      date={"April, 2021"}
                      title={"野望達成か"}
                      src={"/fifth.jpg"}
                      width={280}
                      height={196}
                      content={
                        "また、2021年4月には日赤女子ツートップ(個人的)を送迎するといったS級任務を成し遂げることに成功した。"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={"mb-4"}>
          <div className={"text-center"}>
            <Image src={"/syota.jpg"} width={294} height={220} />
          </div>
          <div className={"text-white text-center"}>
            安全安心迅速に日赤タクシーが目的地までお供します
          </div>
          <Button text={"車種選択"} onClick={openModal}/>
        </section>
        <Footer />
      </main>
    </>
  )
}

export default Index
