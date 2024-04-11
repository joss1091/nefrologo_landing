
import { getAllCategoriesWithSlug, getAllPostsWithSlug, getAllTagsWithSlug } from "../lib/api";
import { parseISO, format } from 'date-fns'
import { es } from 'date-fns/locale'
import data from "../lib/data"
const URL = "https://www.nefrologojosuemolina.com.mx"
function generateSiteMap(posts, categories, tags) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${URL}</loc>
       <lastmod>${`${new Date().toISOString()}`}</lastmod>
     </url>
     <url>
       <loc>${`${URL}/quienes-somos`}</loc>
       <lastmod>${`${new Date().toISOString()}`}</lastmod>
     </url>
     <url>
       <loc>${`${URL}/contacto`}</loc>
       <lastmod>${`${new Date().toISOString()}`}</lastmod>
     </url>
     <url>
       <loc>${`${URL}/preguntas-frecuentes`}</loc>
       <lastmod>${`${new Date().toISOString()}`}</lastmod>
     </url>
     <url>
       <loc>${`${URL}/blog`}</loc>
       <lastmod>${`${new Date().toISOString()}`}</lastmod>
     </url>
     ${categories.edges.map(({node}) => {
      return `
      <url>
       <loc>${`${URL}/blog/categorias/${node.slug}`}</loc>
       <lastmod>${`${new Date().toISOString()}`}</lastmod>
     </url>
     `
     })}
     ${tags.nodes.map(({slug}) => {
      return `
      <url>
       <loc>${`${URL}/blog/tags/${slug}`}</loc>
       <lastmod>${`${new Date().toISOString()}`}</lastmod>
     </url>
     `
     })}
     ${data.services.map(({slug}) => {
      return `
      <url>
       <loc>${`${URL}/servicios/${slug}`}</loc>
       <lastmod>${`${new Date().toISOString()}`}</lastmod>
     </url>
     `
     })}
     
     ${posts.edges.map(({ node }) => {
      const date = parseISO(node.modified)
         return `
       <url>
           <loc>${`${URL}/blog/${node.slug}`}</loc>
           <lastmod>${`${format(date, 'yyyy-MM-dd', {locale: es})}`}</lastmod>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site

  const posts = await getAllPostsWithSlug();
  const categories = await getAllCategoriesWithSlug()
  const tags = await getAllTagsWithSlug()

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts, categories, tags);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;