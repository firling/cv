import React, { Component } from 'react';

function Portfolio ({data: {projects}}){
  return (
    <section id="portfolio">

      <div className="row">

        <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects.map((project) => (
                  <div key={project.title} className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href={project.url} title={project.title} target="_blank">
                          <img alt={project.title} src={`images/portfolio/${project.image}`} />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                            <h5>{project.title}</h5>
                                <p>{project.category}</p>
                            </div>
                          </div>
                        <div className="link-icon"><i className="fa fa-link"></i></div>
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
      </div>
    </section>
  );
}

export default Portfolio;
