import Container from "../../components/container";
import Layout from "../../components/layout";
import { getAllCategoriesWithSlug, getAllPostsByCategory } from "../../lib/api";
import Meta from "../../components/meta";
import LoadMorePosts from "../../components/loadmore";
import { GetStaticPaths, GetStaticProps } from "next";
import SectionHeader from "../../components/section_header";

export default function Index({
  allPosts: allPosts,
  preview,
  categoryName
}) {
  
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
              label: categoryName,
              active: true,
            },
          ]}
          title={categoryName}
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
  
  const data = await getAllPostsByCategory(previewData,{
    after: null,
    categoryName: params?.slug,
  });
  console.log(data)
  console.log(params)
  return {
    props: {
      preview,
      allPosts: data,
      categoryName: params?.slug
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategoriesWithSlug();

  return {
    paths: categories.edges.map(({ slug }) => `/categorias/${slug}`) || [],
    fallback: true,
  };
};

