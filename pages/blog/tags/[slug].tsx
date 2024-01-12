const Container = dynamic(() => import("../../../components/container"), {
  ssr: false,
});
const Layout = dynamic(() => import("../../../components/layout"), {
  ssr: false,
});
const Meta = dynamic(() => import("../../../components/meta"), {
  ssr: false,
});
const LoadMorePosts = dynamic(() => import("../../../components/loadmore"), {
  ssr: false,
});
const SectionHeader = dynamic(
  () => import("../../../components/section_header"),
  {
    ssr: false,
  }
);
import { GET_POSTS } from "../../../lib/api";
import dynamic from "next/dynamic";
import { getAllPostsByTag, getAllTagsWithSlug } from "../../../lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
export default function Index({ allPosts: allPosts, preview, tag }) {
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
        <LoadMorePosts posts={allPosts} classes={""} graphQLQuery={GET_POSTS}/>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getAllPostsByTag(previewData, {
    after: null,
    tag: params?.slug,
  });
  return {
    props: {
      preview,
      allPosts: data,
      tag: params?.slug,
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
