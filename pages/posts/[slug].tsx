import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import Tags from "../../components/tags";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import CoverImage from "../../components/cover-image";
import PostWidget from "../../components/post-widget";
import Avatar from "../../components/avatar";
import TagList from "../../components/tag-list";
import Link from "next/link";

export default function Post({ post, posts,tags, categories, preview }) {
 
  const router = useRouter();
  const morePosts = posts?.edges;
  if (!post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <section className="page-title pt-30 pb-30 text-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="blog.html">Blog</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      6 Tips to Protect Your Mental Health When You’re Sick
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="blog blog-single pt-0 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-8">
                <div className="post-item mb-0">
                  <div className="post__img">
                    <a href="#">
                      <CoverImage
                        title={post.title}
                        coverImage={post.featuredImage}
                        width={770}
                        height={528}
                      />
                    </a>
                  </div>
                  <div className="post__body pb-0">
                    <PostHeader
                      title={post.title}
                      coverImage={post.featuredImage}
                      date={post.date}
                      author={post.author}
                      categories={post.categories}
                    />
                    <PostBody content={post.content} />
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-between border-top border-bottom pt-30 pb-30 mb-40">
                  <div className="blog-share d-flex flex-wrap align-items-center">
                    <strong className="mr-20 color-heading">Share</strong>
                    <ul className="list-unstyled social-icons d-flex mb-0">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-google"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="widget-tags">
                    <ul className="list-unstyled d-flex flex-wrap mb-0">
                      {post.categories.edges.map(({node}) => (
                        <li>
                        <Link href={`/tags/${node.slug}`}>{node.name}</Link>
                      </li>
                      ))}
                      
                     
                    </ul>
                  </div>
                </div>
                <div className="widget-nav d-flex justify-content-between mb-40">
                  <a href="#" className="widget-nav__prev d-flex flex-wrap">
                    <div className="widget-nav__img">
                      <img
                        src="assets/images/blog/grid/2.jpg"
                        alt="blog thumb"
                      />
                    </div>
                    <div className="widget-nav__content">
                      <span>Previous Post</span>
                      <h5 className="widget-nav__ttile mb-0">
                        Unsure About Wearing a Face Mask?
                      </h5>
                    </div>
                  </a>
                  <a href="#" className="widget-nav__next d-flex flex-wrap">
                    <div className="widget-nav__img">
                      <img
                        src="assets/images/blog/grid/3.jpg"
                        alt="blog thumb"
                      />
                    </div>
                    <div className="widget-nav__content">
                      <span>Next Post</span>
                      <h5 className="widget-nav__ttile mb-0">
                        Tips for Eating Healthy When You’re Home
                      </h5>
                    </div>
                  </a>
                </div>
                <div className="blog-author d-flex flex-wrap mb-70">
                  <div className="blog-author__avatar">
                    
                    <Avatar author={post.author} />
                  </div>
                  <div className="blog-author__content">
                    <h6 className="blog-author__name">{post.author.node.firstName} {post.author.node.lastName} </h6>
                    <p className="blog-author__bio">
                      {post.author.node.description}
                    </p>
                    <ul className="social-icons list-unstyled mb-0">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-vimeo-v"></i>
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin"></i>
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4">
                <aside className="sidebar">
                  
                  {morePosts.length > 0 && <PostWidget posts={morePosts} />}

                  <div className="widget widget-categories">
                    <h5 className="widget__title">Categories</h5>
                    <div className="widget-content">
                      <ul className="list-unstyled mb-0">
                      
                      {categories.nodes.map(({ name, slug , count}) => (
                        <li>
                          <Link  href={`/categories/${slug}`} aria-label={name}>
                            <span className="cat-count">{count}</span>
                            <span>{name}</span>
                          </Link>
                        </li>
                      ))}
                       
                        
                      </ul>
                    </div>
                  </div>
                  <div className="widget widget-tags">
                    <h5 className="widget__title">Tags</h5>
                    <div className="widget-content">
                      <TagList tags={tags} />
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);
  

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
      categories: data.categories,
      tags: data.tags
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
};
