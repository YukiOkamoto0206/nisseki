type Props = {
  title: string
  content: string
}

const Info: React.VFC<Props> = ({ title, content }) => {
  return (
    <>
      <div className={"flex text-white my-2"}>
        <div className={"bg-gray-600 rounded-full px-2 mr-1"}>{title}</div>
        <div className={""}> : {content}</div>
      </div>
    </>
  )
}
export default Info
