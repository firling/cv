import React, { Component } from 'react';

function Portfolio ({data: {projects}}){
  const openTab = (url) => {
    window.open(url, "_blank")
  }

  return (
    <section id="portfolio">

      <div className="row">

        <div className="twelve columns collapsed">

            <h1>Découvrez certains de mes projets.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects.map((project) => (
                  <div key={project.title} className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href={project.url} target="_blank" title={project.title} onClick={() => openTab(project.url)}>
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
