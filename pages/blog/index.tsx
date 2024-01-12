const Container = dynamic(() => import("../../components/container"));
const Layout = dynamic(() => import("../../components/layout"));
const Meta = dynamic(() => import("../../components/meta"));
const LoadMorePosts = dynamic(() => import("../../components/loadmore"));
const SectionHeader = dynamic(() => import("../../components/section_header"));
import { GetStaticProps } from "next";
import { getPosts } from "../../lib/api";
import dynamic from "next/dynamic";


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
