import React from 'react';
import { graphql,Link } from 'gatsby';
import Button from '@material-ui/core/Button';

import Layout from '../components/Layout.js';
import '../styles/main.scss';

const IndexPage = ({ data }) => {
    return (
        <Layout>
        {
            data.allContentfulBlog.edges.map((edge, i) => {
                const post = edge.node;

                return (
                    <div key={i} className="post-list">
                        <h2 className="title">
                            <Link to={ `/posts/${post.slug}` }>{ post.title }</Link>
                        </h2>
                        <span className="date">
                            { post.createdAt }
                        </span>
                        { 
                            post.tags.map((tag, i) => 
                                <span key={i} className="tag-btn btn">
                                    <Link to={ `/tag/${tag}` }>{ tag }</Link>
                                </span>  
                        )}
                        <p className="excerpt">{ post.content.childMarkdownRemark.excerpt }</p>
                        <Button className="read-more" size="small" variant="contained" color="secondary">
                            <Link to={ `/posts/${post.slug}` }>続きを読む</Link>
                        </Button>
                    </div>
                )
            })}
        </Layout>
    )
};

// 投稿データを取得
export const query = graphql`
{
    allContentfulBlog {
        edges {
            node {
                title
                slug
                tags
                createdAt(formatString: "YYYY/M/D")
                content {
                    childMarkdownRemark {
                        excerpt(truncate: true)
                    }
                }
            }
        }
    }
}
`

export default IndexPage;
