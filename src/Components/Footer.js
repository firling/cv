import React, { Component } from 'react';

function Footer ({data: {social}}){
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
                {social.map((network) => (
                  <li key={network.name}><a href={network.url} target="_blank"><i className={network.className}></i></a></li>
                ))}
            </ul>

            <ul className="copyright">
                <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
            </ul>

          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
      </footer>
    );
}

export default Footer;
