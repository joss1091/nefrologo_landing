import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { getAllPostsByTag } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import GridPosts from "../../components/grid-posts";

export default function Index({
  allPosts: allPosts,
  preview,
  haveMorePosts,
  havepreviousPosts,
  currentPage,
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
          haveMorePosts={haveMorePosts}
          havepreviousPosts={havepreviousPosts}
          currentPage={currentPage}
          to="/posts"
        />
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ req, res, query }) {
  const currentPage = Number(query.page) || 1;

  const allPosts = await getAllPostsByTag(false, {currentPage,tag: query.slug});
  const haveMorePosts = Boolean(allPosts?.pageInfo?.offsetPagination.hasMore);
  const havepreviousPosts = Boolean(
    allPosts?.pageInfo?.offsetPagination.hasPrevious
  );

  return {
    props: {
      currentPage,
      allPosts,
      preview: false,
      haveMorePosts,
      havepreviousPosts,
    },
  };
}