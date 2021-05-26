import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
   
    faTwitter,
    faInstagram,
    faGithub,
    faLinkedin,
    

} from '@fortawesome/free-brands-svg-icons';

function SocialFollow() {
    return (
        <div className="social-container"> 
          <h3 style={{color:"black"}}><b>Made by Alpita Sharma.</b></h3>

          <a href="https://www.instagram.com/___alpitaaa" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />    
          </a>

          <a href="https://www.twitter.com/AlpitaSharma" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />    
          </a>

          <a href="https://www.github.com/alpitasharma2" className="github social">
          <FontAwesomeIcon icon={faGithub} size="2x" />    
          </a>

          <a href="https://www.linkedin.com/in/alpita-sharma-619a981b6" className="linkedin social">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />    
          </a>
        </div>
    )
}

export default SocialFollow
