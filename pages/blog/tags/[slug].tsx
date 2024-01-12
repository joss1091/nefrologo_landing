const Container = dynamic(() => import("../../../components/container"));
const Layout = dynamic(() => import("../../../components/layout"));
const Meta = dynamic(() => import("../../../components/meta"));
const LoadMorePosts = dynamic(() => import("../../../components/loadmore"));
const SectionHeader = dynamic(() => import("../../../components/section_header"));

import dynamic from "next/dynamic";
import { getAllPostsByTag, getAllTagsWithSlug } from "../../../lib/api";
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
      <SectionHeader
          breadcrumItems={[
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
              label: tag,
              active: true,
            },
          ]}
          title={tag}
        />
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
  const data = await getAllPostsByTag(previewData,{
    after: null,
    tag: params?.slug,
  });
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
    paths: allPosts.nodes.map(({ slug }) => `/blog/tags/${slug}`) || [],
    fallback: true,
  };
};



