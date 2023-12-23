import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { getAllPostsPaginate } from "../../lib/api";
import Header from "../../components/header";
import GridPosts from "../../components/grid-posts";

export default function Index({ allPosts: allPosts, preview }) {
  const edges = allPosts?.edges || [];

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Next.js Blog Example with `}</title>
      </Head>
      <Container>
        <GridPosts posts={edges} />
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsPaginate(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
