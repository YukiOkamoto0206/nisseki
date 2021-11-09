import React from "react"

type Props = {
  engTitle: string
  jpTitle: string
}
const Title: React.VFC<Props> = ({ engTitle, jpTitle }) => {
  return (
    <>
      <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
        <p className="text-yellow-300 uppercase tracking-loose">{engTitle}</p>
        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed text-white">
          {jpTitle}
        </p>
      </div>
    </>
  )
}
export default Title
