import { GetStaticPaths, GetStaticProps } from "next"
import { Article } from ".."
import Layout from "../../components/layout"
import { client } from "../../lib/client"

const PostDetail: React.FC<Article> = (blog) => {
  console.log(blog)
  return (
    <Layout>
      <div className={"my-3"}>
        <div className={"w-3/4 mx-auto text-white"}>
          <div className="font-bold text-xl text-center border-b">{blog.title}</div>
          <div
            className="my-5 whitespace-pre-line"
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default PostDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const data: any = await client.get({ endpoint: "blog" })
  const paths: any = data.contents.map((content: any) => `/blog/${content.id}`)
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id as string
  const data: Article = await client.get({ endpoint: "blog", contentId: id })
  console.log(data)
  return {
    props: data,
    revalidate: 3
  }
}
