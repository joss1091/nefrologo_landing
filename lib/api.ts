import client from "./cliet"
import {  gql} from "@apollo/client";
import {PostFragment, AuthorFragment, CategoryFragment} from "./fragments"
const PAGE_SIZE = 6


async function fetchAPI(query , { variables }: Record<string, any> = {}) {

  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  // WPGraphQL Plugin must be enabled
  const { data,  error } = await client.query({query, variables})
  if (error) return error.message

  return data
  
}

export async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    gql `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  )

  return data.post
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(gql`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  return data?.posts
}

export async function getAllTagsWithSlug() {
  const data = await fetchAPI(gql `
    {
      tags {
        nodes {
          name
          slug
        }
      }
    }
  `)

  return data?.tags
}

export async function getAllCategoriesWithSlug() {
  const data = await fetchAPI(gql`
    {
      categories(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  return data?.categories
}


export async function getPosts({  after}, preview) {
  const data = await fetchAPI(
    gql `
    query AllPosts($first: Int, $after: String) {
      posts(first: $first, after: $after,  where: { orderby: { field: DATE, order: DESC } }) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            ...PostFragment
          }
        }
      }
    }
    ${PostFragment}
    ${AuthorFragment}
    ${CategoryFragment}
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
        first: PAGE_SIZE,
        after
      },
    }
  )
    
  return data?.posts
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    gql `
    query AllPosts {
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFragment
          }
        }
      }
    }
    ${PostFragment}
    ${AuthorFragment}
    ${CategoryFragment}
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )
    
  return data?.posts
}


export async function getAllPostsByCategory(preview, {categoryName, after}) {
  
  const data = await fetchAPI(
    gql `
    query AllPosts($categoryName: String, $first: Int, $after: String) {
      posts( first: $first, after: $after, where: { categoryName: $categoryName, orderby: { field: DATE, order: DESC } }) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            ...PostFragment
          }
        }
      }
    }
    ${PostFragment}
    ${AuthorFragment}
    ${CategoryFragment}
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
        categoryName: categoryName,
        first: PAGE_SIZE,
        after
      },
    }
  )
    
  return data?.posts
}

export async function getAllPostsByTag(preview, {tag,after}) {
  
  const data = await fetchAPI(
    gql `
    query AllPosts($tag: String, $first: Int, $after: String) {
      posts( first: $first, after: $after , where: { tag: $tag, orderby: { field: DATE, order: DESC } }) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            ...PostFragment
          }
        }
      }
    }
    ${PostFragment}
    ${AuthorFragment}
    ${CategoryFragment}
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
        tag: tag,
        first: PAGE_SIZE,
        after
      },
    }
  )
    
  return data?.posts
}


export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug))
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug
  const isDraft = isSamePost && postPreview?.status === 'draft'
  const isRevision = isSamePost && postPreview?.status === 'publish'
  const data = await fetchAPI(
    gql `
   
    
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFragment
        content
        previousPost {
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
        nextPost {
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFragment
          }
        }
      }
      tags {
        edges {
          node {
            name
            count
            slug
          }
        }
      }
      categories {
        nodes {
          name
          count
          slug
        }
      }
    }
    ${PostFragment}
    ${AuthorFragment}
    ${CategoryFragment}
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? 'DATABASE_ID' : 'SLUG',
      },
    }
  )

 
  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node

    if (revision) Object.assign(data.post, revision)
    delete data.post.revisions
  }

  // Filter out the main post
  // var edges = data.posts.edges.filter(({ node }) => node.slug !== slug)
  // {...data, }
  // If there are still 3 posts, remove the last one
  // if (data.posts.edges.length > 2) data.posts.edges.pop()
  return data
}


 export const GET_POSTS = gql`
  query GET_NEWS(  $first: Int, $after: String ) {
    
      posts: posts(first: $first, after: $after,  where: { orderby: { field: DATE, order: DESC } }) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            ...PostFragment
          }
        }
      }

    }
    ${PostFragment}
    ${AuthorFragment}
    ${CategoryFragment}
`;




