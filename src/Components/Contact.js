import React, { Component, useState } from 'react';
import axios from 'axios';

function Contact ({data: {name, address: {street, city, state, zip}, phone, email, contactmessage}}){
   const [nom, setNom] = useState("");
   const [mail, setMail] = useState("");
   const [subject, setSubject] = useState("");
   const [msg, setMsg] = useState("");

   const sendMail = () => {
      const loader = document.getElementById('image-loader');
      const success = document.getElementById('message-success');
      const error = document.getElementById('message-warning');
      loader.style.display = "inline";
      axios.post(`http://localhost:3333/api/sendMail`, {
         name: nom,
         email: mail,
         subject,
         msg
      }).then(() => {
         loader.style.display = "none";
         success.style.display = "inline";
      }).catch(() => {
         loader.style.display = "none";
         error.style.display = "inline";
      })
   }

   return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{contactmessage}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" size="35" value={nom} onChange={e => setNom(e.target.value)}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="email" size="35" value={mail} onChange={e => setMail(e.target.value)}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject <span className="required">*</span></label>
						   <input type="text" size="35" value={subject} onChange={e => setSubject(e.target.value)}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" value={msg} onChange={e => setMsg(e.target.value)}></textarea>
                  </div>

                  <div>
                     <button className="submit" onClick={sendMail}>Submit</button>
                     <span id="image-loader"><img src="images/loader.gif" /></span>
                  </div>
					</fieldset>

               <div id="message-warning">Une erreur est survenue.</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Votre message a bien été envoyé, merci!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

               {/* <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div> */}
            </aside>
         </div>
      </section>
   );
}

export default Contact;
