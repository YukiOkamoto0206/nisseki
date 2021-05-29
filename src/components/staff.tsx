import React from "react"
import Image from "next/image"

type Props = {
  name: string
  src: string
  width: number
  height: number
  introduce: string
}

const Staff: React.VFC<Props> = ({ name, src, width, height, introduce }) => {
  return (
    <>
      <div className="max-w-xs rounded overflow-hidden my-5 mx-auto border-2">
        <div className="px-6 py-4">
          <Image src={src} width={width} height={height} />
          <div className="text-white font-bold text-xl mb-2">{name}</div>
          <p className="text-white text-base">{introduce}</p>
        </div>
      </div>
    </>
  )
}

export default Staff
