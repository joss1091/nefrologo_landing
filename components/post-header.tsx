
import Link from "next/link";
import Date from "./date";


export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <>
      <div className="post__meta-cat">
      {categories.edges.map(({ node }) => (
        <Link href={`/categorias/${node.slug}`} key={node.name}>{node.name}</Link>
      ))}
      </div>
      <div className="post__meta d-flex align-items-center mb-20">
        <span className="post__meta-date"><Date dateString={date} /></span>
        <span className="post__meta-author" >
          {author.node.name}
        </span>
      </div>
      <h1 className="post__title mb-30">
        {title}
      </h1>
    </>
  );
}
