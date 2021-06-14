import React from "react"
import Layout from "../../components/layout"
import PageTitle from "../../components/pageTitle"
import Button from "../../components/button"
import { useRouter } from "next/router"

const Index: React.VFC = () => {
  const router = useRouter()
  const toAddPage = () => {
    router.push("/add")
  }
  return (
    <Layout>
      <div className={"my-3"}>
        <div className={"w-3/4 mx-auto"}>
          <PageTitle title={"すき家"} />
          <div className={""}>
            <div className={"text-white ml-1 my-3"}>
              <div className={"text-xl"}>2021年度</div>
              <div>12月31日　夜　宮内店👑</div>
              <div>1月1日　夜　段原店</div>
              <div>1月4日　朝　段原店</div>
              <div>1月4日　昼　今治店</div>
              <div>1月4日　深夜　11号松山久米窪田店</div>
              <div>1月4日　深夜　道後樋又店👑</div>
              <div>1月5日　深夜　楽々園店🍛👑</div>
              <div>1月10日　夜　31号呉海岸通り店</div>
              <div>1月14日　夜　宮内店</div>
              <div>1月15日　早早朝　宮内店</div>
              <div>1月15日　深夜　八木店</div>
              <div>1月16日　深夜　54号広島可別店</div>
              <div>1月25日　夜　宮内店</div>
              <div>3月10日　深夜　宮内店</div>
              <div>3月15日　朝　54号広島可部店</div>
              <div>3月15日　深夜　宮内店</div>
              <div>3月22日　深夜　深川店</div>
              <div>3月25日　深夜　深川店</div>
              <div>3月28日　夜　　500号別府石垣店👑</div>
              <div>3月29日　朝　　500号別府石垣店👑</div>
              <div>3月30日　朝　　500号別府石垣店👑</div>
              <div>4月2日　深夜　　段原店👑</div>
              <div>4月3日　深夜　　深川店</div>
              <div>4月6日　深夜　　宮内店</div>
              <div>4月7日　夜　　　深川店👑</div>
              <div>4月10日　深夜　　立町店　　たかひろ嘔吐</div>
              <div>4月14日　深夜　　段原店👑</div>
              <div>5月1日　深夜　　広島丹那店👑</div>
              <div>5月7日　深夜　　宮内店</div>
              <div>5月13日　夜　　　深川店</div>
              <div>5月28日　深夜　54号広島可部店</div>
              <div>6月5日　夕方　宮内店</div>
              <div>6月10日　夜　　深川店</div>
            </div>
          </div>
        </div>
        <Button text={"追加する"} onClick={toAddPage} />
      </div>
    </Layout>
  )
}
export default Index
