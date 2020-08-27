import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Afficher la navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Cacher la navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Julien Anquetil</h1>
            <h3>Étudiant Alternant en Cybersécurité à l'<span>ESID de Brest</span>.</h3>
            <h3>Développeur Web Freelance chez <span>Rubrash</span>.</h3>
            <hr />
            <ul className="social">
               <li key="facebook"><a href="https://www.facebook.com/julien.anquetil.5/"><i className="fa fa-facebook"></i></a></li>
               <li key="github"><a href="https://github.com/firling"><i className="fa fa-github"></i></a></li>
               <li key="twitter"><a href="https://twitter.com/FirlingYay"><i className="fa fa-twitter"></i></a></li>
               <li key="linkedin"><a href="https://www.linkedin.com/in/julien-anquetil-0b7173176/"><i className="fa fa-linkedin"></i></a></li>
               <li key="instagram"><a href="https://www.instagram.com/julien_aqtl/"><i className="fa fa-instagram"></i></a></li>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
