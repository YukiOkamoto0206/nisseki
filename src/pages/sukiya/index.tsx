import React from "react"
import Layout from "../../components/layout"
import PageTitle from "../../components/pageTitle"
import Button from "../../components/button"
import { useRouter } from "next/router"
import { db } from "../../lib/db"
import { GetStaticProps } from "next"
import { SUKIYA } from "../../types/types"

interface SUKIYAINTERFACE {
  infos: SUKIYA[]
}

const Index: React.VFC<SUKIYAINTERFACE> = ({ infos }) => {
  const router = useRouter()
  const toAddPage = () => {
    router.push("/add")
  }
  //TODO: infosが時刻順に並んでいないので処理を追加する必要あり
  return (
    <Layout>
      <div className={"my-3"}>
        <div className={"w-3/4 mx-auto"}>
          <PageTitle title={"すき家"} />
          <div className={""}>
            <div className={"text-white ml-1 my-3"}>
              <div className={"text-xl"}>2021年度</div>
              <ul>
                {infos.map((info) => {
                  return (
                    <li className={"flex mt-1"}>
                      <div className={"ml-2"}>
                        {String(info.date).replace("T", " ").replace(":00.000Z", "")}
                      </div>
                      <div className={"ml-2"}>{info.place}</div>
                      <div className={"ml-2"}>{info.isKing ? "👑" : ""}</div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <Button text="追加する" onClick={toAddPage} />
      </div>
    </Layout>
  )
}
export default Index

export const getStaticProps: GetStaticProps = async () => {
  const infos: { id: string; date: Date; place: string; isKing: boolean }[] = []
  const ref = await db.collection("sukiyaList").get()
  ref.docs.map((doc) => {
    const data = {
      id: doc.id,
      date: doc.data().date.toDate(),
      place: doc.data().place,
      isKing: doc.data().isKing
    }
    const json = JSON.parse(JSON.stringify(data))
    infos.push(json)
  })
  return {
    props: {
      infos
    }
  }
}
