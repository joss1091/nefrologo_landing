export const PostFragment = `
    fragment PostFragment on Post {
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
              ...CategoryFragment
            }
          }
        }
        author {
          node {
            ...AuthorFragment
          }
        }
    }
`;

export const AuthorFragment = `
    fragment AuthorFragment on User {
        name
        firstName
        lastName
        avatar {
            url
        }
    }
`;

export const CategoryFragment = `
    fragment CategoryFragment on Category{
        slug
        name
    }
`;


