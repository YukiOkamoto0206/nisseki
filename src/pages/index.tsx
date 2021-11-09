import React, { useState } from "react"
import Image from "next/image"
import Modal from "react-modal"
import Achieve from "../components/achieve"
import Title from "../components/title"
import Button from "../components/button"
import CarSelect from "../components/carModal"
import Layout from "../components/layout"
import { client } from "../lib/client"
import { GetStaticProps } from "next"
import { type } from "os"

type Article = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  body: string
}
type Articles = {
  blogs: [
    {
      id: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      revisedAt: string
      title: string
      body: string
    }
  ]
}

const Index: React.FC<Articles> = ({ blogs }) => {
  const [isOpen, setIsOpen] = useState(false)

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
      <Layout title={"Nisseki Taxi"}>
        <section className="w-full text-white ">
          <Image src="/top-taxi.jpg" width={1920} height={1080} />
        </section>

        <Modal
          // isOpenがtrueならモダールが起動する
          isOpen={isOpen}
          onRequestClose={closeModal}
          className={
            "fixed top-1/4 left-1/4 right-3/4 h-1/2 w-1/2 bottom-3/4 bg-black text-white overflow-y-scroll rounded-xl border-black"
          }
        >
          <div className={"float-right p-1 pt-3"}>
            <Image src={"/close_white_24dp.svg"} width={25} height={25} onClick={closeModal} />
          </div>
          <CarSelect />
        </Modal>

        <Button text={"車種選択"} onClick={openModal} />

        <section className="mt-10">
          <Title engTitle={""} jpTitle={"お知らせ"} />
          <div className="overflow-y-scroll h-44 mx-7 p-2">
            <ul>
              {blogs.map((blog: Article) => {
                return (
                  <li key={blog.id} className="mt-3">
                    <a className="text-white border-b">{blog.title}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        <section>
          <div className="text-white pb-2">
            <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
              <Title engTitle={"WORKING PROCESS"} jpTitle={"実績"} />
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
          <Button text={"車種選択"} onClick={openModal} />
        </section>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const data: any = await client.get({ endpoint: "blog" })
  console.log(data.contents)
  return {
    props: {
      blogs: data.contents
    },
    revalidate: 1
  }
}
