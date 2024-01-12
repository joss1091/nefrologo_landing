import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import {getAllPostsForHome} from "../lib/api";
import data from "../lib/data.js";


const Container  = dynamic(() => import("../components/container"));
const MoreStories =  dynamic(() => import("../components/more-stories"));
const Layout = dynamic(() => import("../components/layout"));
const MainSlider = dynamic(() => import("../components/main_slider"));
const ContactInfo = dynamic(() => import("../components/contact_info"));
const AboutLayout = dynamic(() => import("../components/about_layout"));
const ServicesLayout = dynamic(() => import("../components/services_layout"));
const WorkProcessLayout = dynamic(() => import("../components/work_process_layout"));
const Meta = dynamic(() => import("../components/meta"));

export default function Index({ allPosts: { edges }, preview }) {

  return (
    <Layout preview={preview}>
      <Meta title={"Especialista en Nefrologia"} />
      <Container>
       
        <MainSlider sliders={data.sliders} />
        <ContactInfo company={data.company} />
        <AboutLayout data={data} />
        <ServicesLayout services={data.services} />
        <WorkProcessLayout hospitals={data.hospitals} company={data.company} workProgress={data.workProgress} />
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
