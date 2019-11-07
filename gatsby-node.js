const path = require('path');

exports.createPages= ({ graphql, actions }) => {
    const { createPage } = actions;
    const postTemplate = path.resolve('./src/pages/post.js');
    const tagTemplate = path.resolve('./src/pages/tags.js');

    return new Promise((resolve, reject) => {
        graphql(`
        {
        allContentfulBlog {
            edges {
                node {
                    slug
                    tags
                }
            }
        }
        }
        `).then(result => {
        // エラーが起きた時
        if (result.errors) {
            reject(result.errors);
        }

        // 記事ページの生成
        const post = result.data.allContentfulBlog.edges;
        post.forEach(edge => {
            createPage({
                path: `/posts/${edge.node.slug}`,
                component: postTemplate,
                context: {
                    slug: edge.node.slug,
                }
            })
        })

        // タグページの生成
        let tagList = [];
        post.forEach(edge => {
            const tags = edge.node.tags;
            // タグの配列を生成
            tags.forEach(tag => {
                tagList.push(tag);
            })
            
        })
        tagList.forEach(tag => {
            createPage({
                path: `/tag/${tag}`,
                component: tagTemplate,
                context: {
                    slug: tag
                }
            })
        })
        console.log(JSON.stringify(result,null,4));
        resolve()
        })
    })
}
