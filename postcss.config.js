// If you want to use other PostCSS plugins, see the following:

const purgecss  = [ [
  // configure PurgeCSS
  "@fullhuman/postcss-purgecss",
  {
    content: [
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}'],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    safelist: {
      standard: ["html", "body",/^d-/, /^slick-/, /^fa-/, /^fa/,/^contact-info/, /^row-no-gutter/],
      deep: [/^fa-/, /^fa/, /^contact-info/, /^row-no-gutter/],
      greedy: [/^fa-/, /^fa/, /^contact-info/, /^row-no-gutter/]
    }
  }],
]

const cssdefault =  [
    
  "postcss-flexbugs-fixes",
  [
    "postcss-preset-env",
    {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    },
  ]
  
]

module.exports = {
  "plugins": [...cssdefault, ...purgecss]
};