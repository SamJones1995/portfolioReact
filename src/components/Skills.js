import React from 'react';
import { useInView } from 'react-intersection-observer';



function Skills() {

  const { ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <section ref={ref} id="skills">
      <div className="row skill">
          <h1 className="skills-header">
            <span>Skills</span>
          </h1>
          <h2 className='bar-header'>HTML</h2>
          <div className="progress">
            <div className={ inView ? "progress-html": ""}></div>
          </div>
          <h2 className='bar-header'>CSS</h2>
          <div className="progress">
            <div className= {inView ? "progress-css" : ""}></div>
          </div>
          <h2 className='bar-header'>JavaScript</h2>
          <div className="progress">
            <div className={inView ? "progress-javascript" : ""} ></div>
          </div>
          <h2 className='bar-header'>ReactJs</h2>
          <div className="progress">
            <div className={inView ? "progress-reactjs" : "" }></div>
          </div>
          <h2 className='bar-header'>ReactNative</h2>
          <div className="progress">
            <div className={inView ? "progress-reactnative" : ""}></div>
          </div>
          <h2 className='bar-header'>AngularJS</h2>
          <div className="progress">
            <div className={inView ? "progress-angularjs" : ""}></div>
          </div>
        
      </div>
      <div className="row education">
          <h1 className="education-header">
            <span>Education</span>
          </h1>
          <p>This is my eduction stuff</p>
          
      </div>
    </section>
  );
}

export default Skills;
