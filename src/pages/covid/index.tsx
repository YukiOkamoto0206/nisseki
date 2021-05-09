import React from 'react'
import Image from 'next/image'
import Header from "../../components/header"
import { Footer } from "../../components/footer"
const Index: React.FC = () => {
  return(
    <>
      <Header/>
      <div className={"bg-black text-white pb-6"}>
        <div className={"w-3/4 mx-auto"}>
          <div className={"text-bold text-2xl text-center p-2"}>一時休業のお知らせ</div>
          <Image src={"/covid.jpg"} width={1883} height={870} />
          <div className={"mt-2"}>弊社のユーザである某サッカー選手2人組がコロナウイルス感染後に乗車したとのことで日赤タクシー車の一つであるベンツを消毒中でございます。</div>
          <div className={"mt-2"}>皆様にご迷惑をおかけいたしますが、今しばらく再開までお待ちください。</div>
          <div className={"mt-2"}>某サッカー選手の回復そしてご健勝を日赤タクシー一同心よりお祈り申し上げます。</div>
        </div>

      </div>
      <Footer/>
    </>
  )
}
export default Index
