import Link from "next/link";
import PostPreview from "./post-preview";

export default function GridPosts({ posts, currentPage, to , haveMorePosts,havepreviousPosts}) {
  return (
    <section className="blog-grid">
      <div className="container">
        <div className="row">
          {posts.map(({ node }) => (
            <PostPreview
              key={node.slug}
              title={node.title}
              coverImage={node.featuredImage}
              date={node.date}
              author={node.author}
              slug={node.slug}
              excerpt={node.excerpt}
              categories={node.categories}
            />
          ))}
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <nav className="pagination-area">
              <ul className="pagination justify-content-center">
                <li>
                  {havepreviousPosts && (
                    <Link
                      className="current"
                      href={`${to}?page=${currentPage - 1}`}
                    >
                      atras
                    </Link>
                  )}
                </li>
                <li>
                  {haveMorePosts  && (
                    <Link
                      className="current"
                      href={`${to}?page=${currentPage + 1}`}
                    >
                      sig
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
