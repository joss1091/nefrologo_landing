import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostDate({ posts }) {
  return (
    <div className="widget widget-posts">
      <h5 className="widget__title">Entradas Recientes</h5>
      {posts.map(({ node }) => (
        <div className="widget__content" key={node.slug}>
          <div className="widget-post-item d-flex align-items-center">
            <div className="widget-post__img">
              <div >
                <CoverImage title={node.title} coverImage={node.featuredImage} slug={node.slug} width={80} height={58} />
               
              </div>
            </div>
            <div className="widget-post__content">
              <span className="widget-post__date"><Date dateString={node.date} /></span>
              <h4 className="widget-post__title">
              <Link href={`/blog/${node.slug}`} aria-label={node.title}>{node.title}</Link>
                
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
