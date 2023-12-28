// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors

const purgecss  = [ [
  // configure PurgeCSS
  "@fullhuman/postcss-purgecss",
  {
    content: [
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}'],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    safelist: {
      standard: ["html", "body", /slick-$/],
      deep: [
        /slick-$/,
      ],
      greedy: [/slick-$/]
    },
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

var plugins = process.env.NODE_ENV != 'production' ? [...cssdefault, ...purgecss] : [...cssdefault]
// plugins = [...cssdefault, ...purgecss]
module.exports = {
  "plugins": plugins
};