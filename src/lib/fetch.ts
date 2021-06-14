import fetch from "node-fetch"

export const getAllRestaurantData = async () => {
  const res = await fetch(
    new URL(`http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.NEXT_PUBLIC_HOTPEPPER_API}&lat=34.67&lng=135.52&range=5&order=4`)
  )
  // const info = await res
  // return info
  return res
}