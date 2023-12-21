import PostPreview from "./post-preview";

export default function MoreStories({ posts, title, subtitle }) {
  return (
    <section className="blog-grid pb-50">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text-center mb-40">
              <h2 className="heading__subtitle">{title}</h2>
              <h3 className="heading__title">{subtitle}</h3>
            </div>
          </div>
        </div>
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
      </div>
    </section>
  );
}
