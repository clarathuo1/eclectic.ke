import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

library.add(faFacebook, faInstagram, faTwitter);

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Eclectic Ke. All rights reserved.</p>
        <ul className="social-links">
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;