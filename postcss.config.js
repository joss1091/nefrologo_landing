// If you want to use other PostCSS plugins, see the following:

const purgecss  = [ [
  // configure PurgeCSS
  "@fullhuman/postcss-purgecss",
  {
    content: [
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}'],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    safelist: ["html", "body","fa",/^d-/, /^slick-/, /^fa-/]
    ,
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