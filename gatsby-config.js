require('dotenv').config();
const env = process.env;

module.exports = {
     siteMetadata: {
         title: 'チラ裏感覚で書く技術ブログ'
     },
     plugins: [
         `gatsby-plugin-sass`,
         `gatsby-transformer-remark`,
         {
             resolve: `gatsby-source-contentful`,
             options: {
                 spaceId: env.CONTENTFUL_SPACE_ID,
                 accessToken: env.CONTENTFUL_ACCESS_TOKEN
             }
         }
     ]
}
