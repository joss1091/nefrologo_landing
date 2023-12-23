import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { CMS_NAME } from "../lib/constants";

import TeamLayout from "../components/team_layout";
import { getAllPostsForHome } from "../lib/api";

export default function AboutUs({ allPosts: { edges }, preview }) {

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Container>
       
        <TeamLayout />
        {edges && < MoreStories posts={edges} title={"Blog"} subtitle={"Articulos recientes"} />}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
