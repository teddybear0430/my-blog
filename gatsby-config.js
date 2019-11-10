require('dotenv').config();
const env = process.env;

module.exports = {
    siteMetadata: {
        title: 'チラ裏感覚で書くTech Blog'
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: env.CONTENTFUL_SPACE_ID,
                accessToken: env.CONTENTFUL_ACCESS_TOKEN
            }
        }
    ]
}
