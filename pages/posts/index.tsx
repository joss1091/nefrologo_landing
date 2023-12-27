import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { getPosts } from "../../lib/api";
import Header from "../../components/header";
import GridPosts from "../../components/grid-posts";
import Meta from "../../components/meta";


export default function Index({
  allPosts: allPosts,
  haveMorePosts,
  havepreviousPosts,
  preview,
  currentPage,
}) {

  const edges = allPosts?.edges || [];

  return (
    <Layout preview={preview}>
      <Meta title="Blog" />
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

  const allPosts = await getPosts({ currentPage }, false);
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

