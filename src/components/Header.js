import React from 'react';
import { Link,withPrefix } from 'gatsby';
import ('../styles/header.scss');

const Header = ({ siteTitle }) => {
     return (
         <header>
             <h1>
                 <Link to="/"><img src={withPrefix('/logo.png')} /></Link>
             </h1>
         </header>
     )
}

export default Header;
