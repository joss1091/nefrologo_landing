import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";

import MainSlider from "../components/main_slider";
import ContactInfo from "../components/contact_info";
import AboutLayout from "../components/about_layout";
import ServicesLayout from "../components/services_layout";
import WorkProcessLayout from "../components/work_process_layout";
import { getAllPostsForHome } from "../lib/api";
import data from "../lib/data.js"
import Meta from "../components/meta";
export default function Index({ allPosts: { edges }, preview }) {

  return (
    <Layout preview={preview}>
      <Meta title={"Especialista en Nefrologia"} />
      <Container>
       
        <MainSlider sliders={data.sliders} />
        <ContactInfo company={data.company} />
        <AboutLayout data={data} />
        <ServicesLayout services={data.services} />
        {/* <FeaturesLayout services={data.services} /> */}
        <WorkProcessLayout hospitals={data.hospitals} company={data.company} />
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
