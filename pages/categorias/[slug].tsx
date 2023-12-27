import Container from "../../components/container";
import Layout from "../../components/layout";
import { getAllPostsByCategory } from "../../lib/api";
import GridPosts from "../../components/grid-posts";
import Meta from "../../components/meta";

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
      <Meta title={`${categoryName} | Blog`} />
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

