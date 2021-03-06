import React, { Component } from 'react';

function Header ({data: {name, social}}) {
   return (
      <header id="home">

         <nav id="nav-wrap">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Afficher la navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Cacher la navigation</a>

            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Accueil</a></li>
               <li><a className="smoothscroll" href="#about">À Propos</a></li>
               <li><a className="smoothscroll" href="#resume">CV</a></li>
               <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
               <li><a className="smoothscroll" href="#testimonials">Témoignages</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>

         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">{name}</h1>
               <h3>Étudiant Alternant en Cybersécurité au <span>Ministère des Armées</span>.</h3>
               <h3>Développeur Fullstack en Freelance.</h3>
               <hr />
               <ul className="social">
                  {social.map((network) => (
                     <li key={network.name}><a href={network.url} target="_blank"><i className={network.className}></i></a></li>
                  ))}
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
   );
}

export default Header;
