import React from "react"

type Props = {
  title: string
}

const PageTitle: React.VFC<Props> = ({ title }) => {
  return <div className={"text-bold text-2xl text-center p-2 text-white border-b-2"}>{title}</div>
}

export default PageTitle
