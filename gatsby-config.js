const IS_DEV = process.env.NODE_ENV === 'development';
const navigation = require('./src/content/partnavigation/partnavigation');
const {
  COURSE_NAME,
  REPOSITORY_URL,
  SITE_URL,
  isContentVisible,
} = require('./src/courseConfig');

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/').pop();
const automaticPagesPrefix =
  process.env.GITHUB_ACTIONS === 'true' &&
  repositoryName &&
  !repositoryName.endsWith('.github.io')
    ? `/${repositoryName}`
    : '/';
const pathPrefix = process.env.PATH_PREFIX || automaticPagesPrefix;

const ignoredContent = [
  `${__dirname}/src/content/pages/*`,
  `${__dirname}/src/content/**/it/**`,
];

const isSearchableContent = ({ part, letter, lang }) => {
  if (letter && !navigation[lang]?.[part]?.[letter]) return false;
  return !letter || isContentVisible(part, letter);
};

const createSearchConfig = (indexName, language) => {
  return {
    resolve: 'gatsby-plugin-local-search',
    options: {
      name: indexName,
      engine: 'flexsearch',
      engineOptions: 'speed',
      query: `
        {
          allMarkdownRemark(filter: {frontmatter: {lang: {eq: "${language}"}}}) {
            nodes {
              frontmatter {
                lang
                letter
                part
              }
              id
              rawMarkdownBody
            }
          }
        }
    `,
      ref: 'id',
      index: ['body'],
      store: ['id', 'part', 'letter', 'lang'],
      normalizer: ({ data }) => {
        return data.allMarkdownRemark.nodes
          .filter((node) => isSearchableContent(node.frontmatter))
          .map((node) => ({
            id: node.id,
            part: node.frontmatter.part,
            letter: node.frontmatter.letter,
            lang: node.frontmatter.lang,
            body: node.rawMarkdownBody,
          }));
      },
    },
  };
};

const plugins = [
  createSearchConfig('finnish', 'fi'),
  createSearchConfig('english', 'en'),
  createSearchConfig('spanish', 'es'),
  createSearchConfig('chinese', 'zh'),
  createSearchConfig('portuguese', 'ptbr'),
  ...(IS_DEV ? [] : ['gatsby-plugin-react-helmet']),
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: COURSE_NAME,
      short_name: COURSE_NAME,
      start_url: '/',
      background_color: '#e1e1e1',
      theme_color: '#e1e1e1',
      display: 'minimal-ui',
      icon: 'src/images/favicon.png',
    },
  },
  {
    resolve: 'gatsby-plugin-sass',
    options: {
      sassOptions: {
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/content`,
      name: 'markdown-pages',
      ignore: ignoredContent,
    },
  },
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1200,
            linkImagesToOriginal: false,
            showCaptions: false,
          },
        },
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: 'language-',
            inlineCodeMarker: null,
            aliases: {
              conf: 'bash',
            },
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
      ],
    },
  },
];

module.exports = {
  pathPrefix,
  trailingSlash: 'never',
  siteMetadata: {
    title: COURSE_NAME,
    siteUrl: SITE_URL,
    repositoryUrl: REPOSITORY_URL,
    description: 'A structured path through modern full stack JavaScript development.',
    author: 'Full Stack JavaScript contributors',
  },
  plugins,
};
