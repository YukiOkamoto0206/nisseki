import axios from "axios"
import useSWR from "swr"
import { GetStaticProps } from "next"
import React from "react"
import Layout from "../../components/layout"
import { getAllRestaurantData } from "../../lib/fetch"

const fetcher = async () => {
  const res = await fetch(`http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.NEXT_PUBLIC_HOTPEPPER_API}&lat=34.67&lng=135.52&range=5&order=4`)
  return res
}

const Index: React.FC = () => {
  // const { data: restaurant, error } = useSWR('restaurantFetch', get)
  const respond = fetcher()
  return (
    <Layout title={"飲食情報"}>
      {respond}
    </Layout>
  )
}
export default Index
//
// export const getStaticProps: GetStaticProps = async () => {
//   const info = await getAllRestaurantData()
//   return {
//     props: { info },
//   }
// }
