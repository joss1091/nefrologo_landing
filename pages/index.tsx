import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { CMS_NAME } from "../lib/constants";
import Header from "../components/header"
import MainSlider from "../components/main_slider";
import ContactInfo from "../components/contact_info";
import AboutLayout from "../components/about_layout";
import ServicesLayout from "../components/services_layout";
import FeaturesLayout from "../components/features_layout";
import TeamLayout from "../components/team_layout";
import WorkProcessLayout from "../components/work_process_layout";
import { getAllPostsForHome } from "../lib/api";
import data from "../lib/data.js"
export default function Index({ allPosts: { edges }, preview }) {

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Container>
       
        <MainSlider sliders={data.sliders} />
        <ContactInfo company={data.company} />
        <AboutLayout />
        <ServicesLayout services={data.services} />
        <FeaturesLayout />
        <TeamLayout />
        <WorkProcessLayout />
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
