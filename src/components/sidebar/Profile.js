import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt,faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import ('../../styles/sidebar.scss');

const Profile = ( props ) => {
     const skills = [
         'HTML', 
         'CSS', 
         'SCSS', 
         'JavaScript',
         'Node.js',
         'React', 
         'PHP', 
         'Laravel', 
         'Git', 
         'Docker'
     ];

     return (
         <div className="profile">
             <div className="profile-contents">
                 <h2>Profile</h2>
                     <span className="user-icon"></span>
                 <h3>Sugar</h3>
                     都内でウェブエンジニアになるため修行中...<br />
                     フロントエンドが好きです。<br />
                     開発したものや開発する上でつまづいたことなどについて書いていきます。<br />
                 <h3>勉強中</h3>
                 <ul>
                 {
                     skills.map((skill, i) => 
                         <li key={i}>{ skill }</li>
                 )}
                 </ul>
                 <span className="user-info">
                 <FontAwesomeIcon className="fa-icon" icon={faMapMarkerAlt} />
                     Japan,Tokyo
                 </span>
                 <span className="user-info">
                 <FontAwesomeIcon className="fa-icon" icon={faCodeBranch} />
                     <Link to="https://github.com/Yota-K">
                         https://github.com/Yota-K
                     </Link>
                 </span>
             </div>
         </div>
     )
}

export default Profile;
