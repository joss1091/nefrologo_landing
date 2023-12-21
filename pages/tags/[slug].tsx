import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import { getAllPostsByTag , getAllTagsWithSlug} from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import PostPreview from "../../components/post-preview";
import Header from "../../components/header";
import GridPosts from "../../components/grid-posts";

export default function Index({ allPosts: allPosts, preview }) {
  var edges = allPosts.edges || []
  
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

export const getStaticProps: GetStaticProps = async ({ params,preview = false }) => {
  const allPosts = await getAllPostsByTag(preview, params?.slug);
  console.log(allPosts, "kkkk")
  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllTagsWithSlug();
  console.log(allPosts, "llllllll")
  return {
    paths: allPosts.nodes.map(({ slug }) => `/tags/${slug}`) || [],
    fallback: true,
  };
};
