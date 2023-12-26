import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { getAllPostsByCategory } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import GridPosts from "../../components/grid-posts";

export default function Index({
  allPosts: allPosts,
  preview,
  currentPage,
  haveMorePosts,
  havepreviousPosts,
  categoryName,
}) {
  var edges = allPosts?.edges || [];
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Container>
        <GridPosts
          posts={edges}
          currentPage={currentPage}
          haveMorePosts={haveMorePosts}
          havepreviousPosts={havepreviousPosts}
          to={`/categorias/${categoryName}`}
        />
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ req, res, query }) {
  const currentPage = Number(query.page) || 1;
  const allPosts = await getAllPostsByCategory(false, {
    currentPage,
    categoryName: query?.slug,
  });
  const haveMorePosts = Boolean(allPosts?.pageInfo?.offsetPagination.hasMore);
  const havepreviousPosts = Boolean(
    allPosts?.pageInfo?.offsetPagination.hasPrevious
  );

  return {
    props: {
      allPosts,
      preview: false,
      currentPage,
      haveMorePosts,
      havepreviousPosts,
      categoryName: query?.slug,
    },
  };
}

