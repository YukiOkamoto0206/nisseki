import React from "react"
import Image from "next/image"

type Props = {
  date: string
  title: string
  src: string
  width: number
  height: number
  content: string
}

const Achieve: React.VFC<Props> = ({ date, title, src, width, height, content }) => {
  return (
    <>
      <div className="mb-8 flex justify-between items-center w-full right-timeline">
        <div className="order-1 px-1 py-4 text-left">
          <p className="mb-3 text-base text-yellow-300">{date}</p>
          <h4 className="mb-3 font-bold text-lg md:text-2xl">{title}</h4>
          <Image src={src} width={width} height={height} />
          <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
            {content}
          </p>
        </div>
      </div>
    </>
  )
}
export default Achieve
