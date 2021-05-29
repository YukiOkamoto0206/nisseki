import React from "react"
import Image from "next/image"
import Layout from "../../components/layout"

const Index: React.FC = () => {
  return (
    <>
<Layout>      <div className={"bg-black text-white pb-6"}>
        <div className={"w-3/4 mx-auto"}>
          <div className={"text-bold text-2xl text-center p-2"}>社長から皆さまへ</div>
          <Image src={"/president.jpg"} width={294} height={220} />
          <div className={"mt-2"}>
            日赤タクシーをいつもご愛顧くださる皆様へ、
            日赤タクシーは2020年10月に日本赤十字広島看護大学の学生1人によって誕生しました。私飯泉は看護大学に通いながら、お客様を送迎させていただくことによって満足してもらいたいという強い思いから、日赤タクシーの創立へと至りました。
          </div>
          <div className={"my-2"}>
            日本経済が成熟化する現在、人々の移動のニーズは日々刻々と変化しております。日赤タクシーは、タクシー業界のリーディングカンパニーとして、我が県広島を支える新しい都市交通のあり方を提言して参ります。
            変わりゆく社会の中で、変わらない誠意を、「日本赤十字」のブランドを胸に、24時間365日、皆様に「日赤タクシー」の信頼のサービスをお届けしております。
            日赤タクシーは、皆様と一緒に、これからも走りつづけます。
            皆様の暖かいご支援を宜しくお願いいたします。
          </div>

          <div className={"text-center"}>代表取締役社長 飯泉翔太</div>
        </div>
      </div>
    </Layout>
      </>
  )
}

export default Index
