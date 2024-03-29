import ErrorPage from "next/error";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";

import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";

import CoverImage from "../../components/cover-image";
import PostWidget from "../../components/post-widget";
import Avatar from "../../components/avatar";
import TagList from "../../components/tag-list";
import Link from "next/link";
import BreadCrumb from "../../components/breadcrum";
import PrevioutNextPostPreview from "../../components/previous_next_post_preview";
import Meta from "../../components/meta";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default function Post({
  post,
  posts,
  tags,
  categories,
  previousPost,
  nextPost,
  preview,
}) {
  const morePosts = posts?.edges;
  if (!post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
    
    <Layout preview={preview}>
    <NextSeo
      openGraph={
        { 
          title: post.title,
          description: post.excerpt,
          url: `/blog/${post.slug}`,
          type: "article",
          article: {
            publishedTime: post.date,
            modifiedTime: post.modified
            
          }
          
        }
      } />
      
    <Meta title={post.title} />
      <Container>
        <section className="page-title pt-30 pb-30 text-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <BreadCrumb
                  items={[
                    {
                      label: "Home",
                      to: "/",
                      active: false,
                    },
                    {
                      label: "Blog",
                      to: "/blog",
                      active: false,
                    },
                    {
                      label: post.title,
                      active: true,
                    },
                  ]}
                />
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
                    <strong className="mr-20 color-heading">Compartir</strong>
                    <ul className="list-unstyled social-icons d-flex mb-0">
                      <li>
                        <FacebookShareButton
                          quote="Visita mi blog"
                          url="https://www.nefrologojosuemolina.com.mx/"
                        >
                          <FacebookIcon size={32} round />
                        </FacebookShareButton>
                      </li>
                      <li>
                        <TwitterShareButton url={`https://www.nefrologojosuemolina.com.mx/blog/${post.slug}`}>
                          <TwitterIcon size={32} round />
                        </TwitterShareButton>
                      </li>
                      <li>
                        <LinkedinShareButton url={`https://www.nefrologojosuemolina.com.mx/blog/${post.slug}`}>
                          <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                      </li>
                      <li>
                        <WhatsappShareButton url={`https://www.nefrologojosuemolina.com.mx/blog/${post.slug}`}>
                          <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                      </li>
                    </ul>
                  </div>
                  <div className="widget-tags">
                    <ul className="list-unstyled d-flex flex-wrap mb-0">
                      {post.categories.edges.map(({ node }) => (
                        <li key={node.slug}>
                          <Link href={`/tags/${node.slug}`}>{node.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="widget-nav d-flex justify-content-between mb-40">
                  <PrevioutNextPostPreview
                    post={previousPost}
                    arrow={"prev"}
                    label={"Anterior Post"}
                  />
                  <PrevioutNextPostPreview
                    post={nextPost}
                    arrow={"next"}
                    label={"Siguiente Post"}
                  />
                </div>
                <div className="blog-author d-flex flex-wrap mb-70">
                  <div className="blog-author__avatar">
                    <Avatar author={post.author} />
                  </div>
                  <div className="blog-author__content">
                    <h6 className="blog-author__name">
                      {post.author.node.firstName} {post.author.node.lastName}{" "}
                    </h6>
                    <p className="blog-author__bio">
                      {post.author.node.description}
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4">
                <aside className="sidebar">
                  {morePosts.length > 0 && <PostWidget posts={morePosts} />}

                  <div className="widget widget-categories">
                    <h5 className="widget__title">Categorias</h5>
                    <div className="widget-content">
                      <ul className="list-unstyled mb-0">
                        {categories.nodes.map(({ name, slug, count }) => (
                          <li key={slug}>
                            <Link
                              href={`/blog/categorias/${slug}`}
                              aria-label={name}
                            >
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
    </>
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
      previousPost: data.post.previousPost,
      nextPost: data.post.nextPost,
      categories: data.categories,
      tags: data.tags,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
    fallback: true,
  };
};
