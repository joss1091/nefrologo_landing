import Link from "next/link";
import PostPreview from "./post-preview";

export default function GridPosts({ posts}) {
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
        
      </div>
    </section>
  );
}
