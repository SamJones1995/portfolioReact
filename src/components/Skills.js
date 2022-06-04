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
            <div className="progress-css"></div>
          </div>
          <h2 className='bar-header'>JavaScript</h2>
          <div className="progress">
            <div className="progress-javascript"></div>
          </div>
          <h2 className='bar-header'>ReactJs</h2>
          <div className="progress">
            <div className="progress-reactjs"></div>
          </div>
          <h2 className='bar-header'>ReactNative</h2>
          <div className="progress">
            <div className="progress-reactnative"></div>
          </div>
          <h2 className='bar-header'>AngularJS</h2>
          <div className="progress">
            <div className="progress-angularjs"></div>
          </div>
        
      </div>
    </section>
  );
}

export default Skills;
