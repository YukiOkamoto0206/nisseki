import { NextPage } from "next"
import Layout from "../../components/layout"
import { useReward } from 'react-rewards';
import { useEffect } from "react"
import Image from "next/image"

const Index: NextPage = () => {
  const {reward: confettiReward, isAnimating: isConfettiAnimating} = useReward('confettiReward', 'confetti');
  const {reward: balloonsReward, isAnimating: isBalloonsAnimating} = useReward('balloonsReward', 'balloons');

  useEffect(()=>{
    balloonsReward()
    balloonsReward()
    balloonsReward()
  },[])
  useEffect(()=>{
    confettiReward()
  })
  return (
    <Layout title={"Nisseki Taxi"}>
      <main className="w-screen text-white text-4xl font-bold mb-12">
        <div className="flex justify-center gap-x-4 my-12 gap-y-1">
          <div>
            <Image src="/kota.jpg" width={130} height={130} className="w-48 h-48 rounded-full overflow-hidden" />
            <p className="text-base flex justify-center">こうた</p>
          </div>
          <div>
            <Image src="/president.jpg" width={130} height={130} className="w-48 h-48 rounded-full overflow-hidden" />
            <p className="text-base flex justify-center">しょうた</p>
          </div>
        </div>
        <div className="flex justify-center">22歳お誕生日</div>
        <div className="flex justify-center">おめでとう🎂</div>
        <div className="flex justify-center text-sm my-3">これからもよろしく by CTO</div>
        <span className="flex justify-center" id="confettiReward" />
        <span className="fixed -bottom-10 left-48" id="balloonsReward" />
      </main>
    </Layout>
  )
}

export default Index
