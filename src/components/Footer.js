import React from 'react';
import { Link } from 'gatsby';
import ('../styles/footer.scss');

const Footer = ({ siteTitle }) => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright ©{ year }<Link to="/">{ siteTitle }</Link></p>
        </footer>
    )
};

export default Footer;
