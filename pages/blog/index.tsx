const Container = dynamic(() => import("../../components/container"), {
  ssr: false,
});
const Layout = dynamic(() => import("../../components/layout"), {
  ssr: false,
});
const Meta = dynamic(() => import("../../components/meta"), {
  ssr: false,
});
const LoadMorePosts = dynamic(() => import("../../components/loadmore"), {
  ssr: false,
});
const SectionHeader = dynamic(() => import("../../components/section_header"), {
  ssr: false,
});
import { GetStaticProps } from "next";
import { getPosts } from "../../lib/api";
import dynamic from "next/dynamic";
import { GET_POSTS } from "../../lib/api";

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
        <LoadMorePosts posts={allPosts} classes={""} graphQLQuery={GET_POSTS}/>
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
