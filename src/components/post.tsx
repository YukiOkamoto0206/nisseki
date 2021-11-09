import { Link } from "@material-ui/core"
import { Article } from "../pages"

const Post: React.FC<Article> = ({ id, title }) => {
  return (
    <li key={id} className="mt-3">
      <Link href={`/blog/${id}`} className="text-white border-b">
        {title}
      </Link>
    </li>
  )
}

export default Post
