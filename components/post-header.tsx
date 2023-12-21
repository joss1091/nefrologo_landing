import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Categories from "./categories";

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
        <a href="#" key={node.name}>{node.name}</a>
      ))}
      </div>
      <div className="post__meta d-flex align-items-center mb-20">
        <span className="post__meta-date"><Date dateString={date} /></span>
        <a className="post__meta-author" href="#">
          {author.node.name}
        </a>
        <a className="post__meta-comments" href="#">
          2 coments
        </a>
      </div>
      <h1 className="post__title mb-30">
        {title}
      </h1>
    </>
  );
}
