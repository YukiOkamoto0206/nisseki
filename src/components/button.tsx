import React from "react"

type Props = {
  text: string
  onClick: any
  inModal?: boolean
}
const Button: React.VFC<Props> = ({ text, onClick, inModal= false }) => {
  return (
    <>
      <div
        className={inModal ? "mx-auto mt-1 mb-3 bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-1 px-2 border border-yellow-300 hover:border-transparent w-1/2 text-center" : "mx-auto mt-3 bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent w-1/3 text-center"}
        onClick={onClick}
      >
        {text}
      </div>
    </>
  )
}
export default Button