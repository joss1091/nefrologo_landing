import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import HeroPost from "../../components/hero-post";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import { getAllPostsPaginate } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import PostPreview from "../../components/post-preview";
import Header from "../../components/header";
import GridPosts from "../../components/grid-posts";

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Container>
        <Header />
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
