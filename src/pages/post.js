import React from 'react';
import { graphql,Link } from 'gatsby';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/Layout.js';
import SEO from '../components/SEO.js';
import '../styles/main.scss';
import '../styles/decoration.scss';

const Post = ( props ) => {
    const post = props.data.contentfulBlog;
    const contentHTML = post.content.childMarkdownRemark.html;

    return (
        <Layout>
        <SEO 
            title={post.title}
            description={post.description}
        />
            <div id="content">
            <Paper>
                <div className="post-container">
                    <span className="date">
                        { post.createdAt }
                        <FontAwesomeIcon className="edit-icon" icon={faEdit} />
                    </span>
                    <h1 className="post-title">{ post.title }</h1>
                    <div className="tag-area">
                    { 
                        post.tags.map((tag, i) => 
                            <span className="tag-btn btn" key={i}>
                                <Link to={ `/tag/${tag}` }>{ tag }</Link>
                            </span>
                    )}
                    </div>
                    <div className="entry-content" dangerouslySetInnerHTML={{ __html: contentHTML }} />
                </div>
            </Paper>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String) {
        contentfulBlog(slug: { eq: $slug }) {
            title
            tags
            createdAt(formatString: "YYYY/M/D")
            content {
                childMarkdownRemark {
                    html
                }
            }
            description
        }
    }
`

export default Post;
