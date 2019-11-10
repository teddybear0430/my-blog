import React from 'react';
import { graphql,Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';	
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/Layout.js';
import SEO from '../components/SEO.js';
import '../styles/main.scss';

const IndexPage = ({ data }) => {
    return (
        <Layout>
        <SEO 
            title={'チラ裏感覚で書くTech Blog'}
            description={'エンジニアとしてやっていく上で作ったものや、詰まった事をまとめるためのブログです。チラ裏感覚での殴り書きが基本です。'}
        />
        {
            data.allContentfulBlog.edges.map((edge, i) => {
                const post = edge.node;

                return (
                    <div key={i} className="post-list">
                        <span className="date">
                            { post.createdAt }
                            <FontAwesomeIcon className="edit-icon" icon={faEdit} />
                        </span>
                        <h2 className="title">
                            <Link to={ `/posts/${post.slug}` }>{ post.title }</Link>
                        </h2>
                        <div className="tag-area">
                            { 
                                post.tags.map((tag, i) => 
                                    <span key={i} className="tag-btn btn">
                                        <Link to={ `/tag/${tag}` }>{ tag }</Link>
                                    </span>  
                            )}
                        </div>
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
                        excerpt(truncate: true, pruneLength: 80)
                    }
                }
            }
        }
    }
}
`

export default IndexPage;
