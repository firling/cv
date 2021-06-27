import React, { Component } from 'react';

function About ({data: {name, image, bio, address: {street, city, state, zip}, phone, email, resumedownload}}){
   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src={`images/${image}`} alt="Tim Baker Profile Pic" />
            </div>
            <div className="nine columns main-col">
               <h2>À propos de moi</h2>

               <p>{bio}</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>{name}</span><br />
                        <span>{street}<br />
                              {city} {state}, {zip}
                        </span><br />
                        <span>{phone}</span><br />
                        <span>{email}</span>
                     </p>
                  </div>
                  <div className="columns download">
                     <p>
                        <a href={resumedownload} target="_blank" className="button"><i className="fa fa-download"></i>Télécharger mon CV</a>
                     </p>
                  </div>
               </div>
            </div>
         </div>

      </section>
   );
}

export default About;
