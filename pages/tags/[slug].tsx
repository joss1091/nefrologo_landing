import Container from "../../components/container";
import Layout from "../../components/layout";
import { getAllPostsByTag, getAllTagsWithSlug } from "../../lib/api";
import Meta from "../../components/meta";
import LoadMorePosts from "../../components/loadmore";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Index({
  allPosts: allPosts,
  preview,
  tag,
}) {

  return (
    <Layout preview={preview}>
      <Meta title={`${tag} | Blog`} />
      <Container>
        <LoadMorePosts
          posts={allPosts}
        />
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  console.log(params)
  const data = await getAllPostsByTag(previewData,{
    after: null,
    tag: params?.slug,
  });
  console.log(data)
  return {
    props: {
      preview,
      allPosts: data,
      tag: params?.slug
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllTagsWithSlug();

  return {
    paths: allPosts.nodes.map(({ slug }) => `/tags/${slug}`) || [],
    fallback: true,
  };
};



