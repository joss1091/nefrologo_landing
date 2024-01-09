import Container from "../../components/container";
import Layout from "../../components/layout";
import { getPosts } from "../../lib/api";
import GridPosts from "../../components/grid-posts";
import Meta from "../../components/meta";
import LoadMorePosts from "../../components/loadmore";

export default function Index({
  allPosts: allPosts,
  preview,
}) {

  return (
    <Layout preview={preview}>
      <Meta title="Blog" />
      <Container>
        <LoadMorePosts
          posts={allPosts}
          
        />
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ req, res, query }) {


  const allPosts = await getPosts({  after: null },false);


  return {
    props: {
      allPosts,
      preview: false
      
    },
  };
}



