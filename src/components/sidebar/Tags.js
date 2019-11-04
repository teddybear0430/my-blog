import React from 'react';
import { Link } from 'gatsby';
import ('../../styles/sidebar.scss');
import ('../../styles/main.scss');

const Tags = () => {
     const tags = [
         'JavaScript',
         'React',
         'Gatsby',
         'Git',
         'others'
     ];

     return (
         <div className="tags">
         <h2>Tag</h2>
         <div className="tag-area">
             {
                 tags.map((tag, i) => 
                 <span key={i} className="tag-btn btn">
                     <Link to={ `/tag/${tag}` }>{ tag }</Link>
                 </span>
             )}
         </div>
         </div>
     )
}

export default Tags;
