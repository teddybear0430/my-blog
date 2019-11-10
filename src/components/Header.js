import React from 'react';
import { Link,withPrefix } from 'gatsby';
import ('../styles/header.scss');

const Header = ({ siteTitle }) => {
    return (
        <header>
            <Link to="/"><img src={withPrefix('/logo.png')} /></Link>
        </header>
    )
}

export default Header;
