import Container from "../../components/container";
import Layout from "../../components/layout";
import { getPosts } from "../../lib/api";
import Meta from "../../components/meta";
import LoadMorePosts from "../../components/loadmore";
import { GetStaticProps } from "next";
import Image from "next/image";
import BreadCrumb from "../../components/breadcrum";
import SectionHeader from "../../components/section_header";

export default function Index({ allPosts: allPosts, preview, title }) {
  return (
    <Layout preview={preview}>
      <Meta title="Blog" />
      <Container>
        <SectionHeader
          breadcrumItems={[
            {
              label: "Home",
              to: "/",
              active: false,
            },
            {
              label: title,
              active: true,
            },
          ]}
          title={title}
        />
        <LoadMorePosts posts={allPosts} />
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getPosts({ after: null }, false);

  return {
    props: {
      allPosts,
      preview: preview,
      title: "Blog",
    },
    revalidate: 10,
  };
};
