import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Container from '@material-ui/core/Container';

// コンポーネント
import Header from './Header.js';
import Footer from './Footer.js';
import Sidebar from './sidebar/Sidebar.js';

const Layout = ({ children }) => {
    return (
        <StaticQuery 
            query={graphql`
                query SiteQuery {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
            render = {data => (
                <>
                    <Header siteTitle={data.site.siteMetadata.title} />
                    <main>
                        <Container>
                        {children}
                        </Container>
                        <Sidebar children={children} />
                    </main>
                    <Footer siteTitle={data.site.siteMetadata.title} />
                </>
            )}
        />
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
