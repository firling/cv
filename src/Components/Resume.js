import React, { Component } from 'react';

function Resume ({data: {skillmessage, education, work, skills_tech, skills_prog}}){
  return (
    <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education.map((edu) => (
                    <div key={edu.degree}>
                      <h3>{edu.degree}</h3>
                      <p className="info">{edu.school} <span>&bull;</span>{edu.location} <span>&bull;</span><em className="date">{edu.graduated}</em></p>
                      <p>
                      {edu.description.split("\n").map((description) => (
                        <>{description}<br/></>
                      ))}
                      </p>
                    </div>
                 ))}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>

        <div className="nine columns main-col">
          {work.map((wrk) => (
            <div key={wrk.title}><h3>{wrk.title}</h3>
              <p className="info">{wrk.company} {wrk.location && <span>&bull;</span>}{wrk.location} <span>&bull;</span><em className="date">{wrk.years}</em></p>
              <p>
              {wrk.description.split("\n").map((description) => (
                <>{description}<br/></>
              ))}
              </p>
            </div>
          ))}
        </div>
      </div>



      <div className="row skill">

        <div className="three columns header-col">
          <h1><span>Technologies</span></h1>
        </div>

        <div className="nine columns main-col">

          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">
              {skills_tech.map((skill) => (
                <li key={skill.name} style={{height: "50%"}}><span style={{width: skill.level, height: "100%"}} className="bar-expand"></span><em>{skill.name}</em></li>
              ))}
            </ul>
          </div>
        </div>
      </div>



      <div className="row skill">

        <div className="three columns header-col">
          <h1><span>Langages de</span></h1>
          <h1><span>Programmation</span></h1>
        </div>

        <div className="nine columns main-col">

          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">
              {skills_prog.map((skill) => (
                <li key={skill.name} style={{height: "50%"}}><span style={{width: skill.level, height: "100%"}} className="bar-expand"></span><em>{skill.name}</em></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
