import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categories,
}) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="post-item">
        <div className="post__img">
          {coverImage && (
            <CoverImage
              title={title}
              coverImage={coverImage}
              slug={slug}
              height={237}
              width={325}
            />
          )}
        </div>
        <div className="post__body">
          <div className="post__meta-cat">
            {categories.edges.map(({ node }) => (
              <Link
                key={node.slug}
                href={`/blog/categorias/${node.slug}`}
                className="hover:underline"
                dangerouslySetInnerHTML={{ __html: node.name }}
              ></Link>
            ))}
          </div>
          <div className="post__meta d-flex">
            <span className="post__meta-date">
              <Date dateString={date} />
            </span>

            <span className="post__meta-author">{author.node.name}</span>
          </div>
          <h4 className="post__title">
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h4>

          <div
            className="post__desc"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          ></div>
          <Link
            href={`/blog/${slug}`}
            className="btn btn__secondary btn__link btn__rounded"
          >
            <span>Leer más</span>
            <i className="icon-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
