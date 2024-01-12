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

import dynamic from "next/dynamic";
import { GET_POSTS } from "../../../lib/api";
import {
  getAllCategoriesWithSlug,
  getAllPostsByCategory,
} from "../../../lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
export default function Index({ allPosts: allPosts, preview, categoryName }) {
  return (
    <Layout preview={preview}>
      <Meta title={`${categoryName} | Blog`} />
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
              label: categoryName,
              active: true,
            },
          ]}
          title={categoryName}
        />
        <LoadMorePosts posts={allPosts} classes={""} graphQLQuery={GET_POSTS} />
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getAllPostsByCategory(previewData, {
    after: null,
    categoryName: params?.slug,
  });

  return {
    props: {
      preview,
      allPosts: data,
      categoryName: params?.slug,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategoriesWithSlug();

  return {
    paths: categories.edges.map(({ slug }) => `/blog/categorias/${slug}`) || [],
    fallback: true,
  };
};
