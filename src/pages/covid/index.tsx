import React from "react"
import Image from "next/image"
import Layout from "../../components/layout"
const Index: React.FC = () => {
  return (
    <>
      <Layout title={"営業再開のお知らせ"}>
        <div className={"bg-black text-white pb-6"}>
          <div className={"w-3/4 mx-auto"}>
            <div className={"text-bold text-2xl text-center p-2"}>営業再開のお知らせ</div>
            <Image src={"/covid.jpg"} width={1883} height={870} />
            <div className={"mt-2 line-through"}>
              弊社のユーザである某サッカー選手2人組がコロナウイルス感染後に乗車したとのことで日赤タクシー車の一つであるベンツを消毒中でございます。
            </div>
            <div className={"mt-2 line-through"}>
              皆様にご迷惑をおかけいたしますが、今しばらく再開までお待ちください。
            </div>
            <div className={"mt-2 line-through"}>
              某サッカー選手の回復そしてご健勝を日赤タクシー一同心よりお祈り申し上げます。
            </div>
            <div className={"mt-2"}>
              ベンツの消毒が完了いたしましたので皆さまには大変ご迷惑をおかけしましたが、営業の再開させていただくこととなりました。
            </div>
            <div className={"mt-2"}>これからもどうぞNisseki Taxiをご贔屓願います。</div>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default Index
