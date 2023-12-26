const API_URL = process.env.WORDPRESS_API_URL
const PAGE_SIZE = 12

async function fetchAPI(query = '', { variables }: Record<string, any> = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  // WPGraphQL Plugin must be enabled

  const res = await fetch(API_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    `
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
  const data = await fetchAPI(`
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



export async function getPosts({ currentPage}, preview) {
  let offset  = calculateOffset(currentPage)
  
  const data = await fetchAPI(
    `
    query AllPosts($offset: Int!, $pageSize: Int!) {
      posts( where: { offsetPagination: {offset: $offset, size: $pageSize} orderby: { field: DATE, order: DESC } }) {
        pageInfo {
          offsetPagination {
            hasMore
            hasPrevious
            total
          }
        }
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories{
              edges {
                node {
                  slug
                  name
                }
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
        pageSize: PAGE_SIZE,
        offset: offset
      },
    }
  )
    
  return data?.posts
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories{
              edges {
                node {
                  slug
                  name
                }
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
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


export async function getAllPostsByCategory(preview, {currentPage, categoryName}) {
  let offset = calculateOffset(currentPage)
  const data = await fetchAPI(
    `
    query AllPosts($categoryName: String, $offset: Int!, $pageSize: Int!) {
      posts( where: {offsetPagination: {offset: $offset, size: $pageSize}, categoryName: $categoryName, orderby: { field: DATE, order: DESC } }) {
        pageInfo {
          offsetPagination {
            hasMore
            hasPrevious
            total
          }
        }
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories{
              edges {
                node {
                  slug
                  name
                }
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
        categoryName: categoryName,
        offset: offset,
        pageSize: PAGE_SIZE
      },
    }
  )
    
  return data?.posts
}

export async function getAllPostsByTag(preview, {tag, currentPage}) {
  let offset = calculateOffset(currentPage)
  const data = await fetchAPI(
    `
    query AllPosts($tag: String, $offset: Int!, $pageSize: Int!) {
      posts( where: {offsetPagination: {offset: $offset, size: $pageSize} , tag: $tag, orderby: { field: DATE, order: DESC } }) {
        pageInfo {
          offsetPagination {
            hasMore
            hasPrevious
            total
          }
        }
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories{
              edges {
                node {
                  slug
                  name
                }
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
        tag: tag,
        pageSize: PAGE_SIZE,
        offset
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
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      description
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
            slug
          }
        }
      }
      tags {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
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
            ...PostFields
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
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug)
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop()
  return data
}
let calculateOffset = (currentPage) => {
  return (currentPage - 1 ) * (PAGE_SIZE + 1)
}
