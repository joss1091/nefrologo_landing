import PostPreview from "./post-preview";

export default function GridPosts({ posts }) {
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
                  <a className="current" href="#">
                    1
                  </a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
