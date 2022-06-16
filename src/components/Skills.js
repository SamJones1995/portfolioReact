import React from 'react';
import { useInView } from 'react-intersection-observer';

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <section ref={ref} id="skills">
      <div className="row education">
        <h1 className="skills-header">
          <span>Education</span>
        </h1>
        <div className="education-content">
          <figure className="education-figure">
            <img src="images/erau.svg" className="education-img" />
          </figure>
          <div className="education-text">
            <h3>Bachelor's of Science in Aeronautics &bull; 2020</h3>

            <p>
              My foreray into higher education was completed online in March of
              2020. I still have a love for aviation as well as tech. The two fields
              are remarkably similar in that discipline and attention to detail will 
              take you a long way. One missed quotation or comma can be just as important
              as a miscalculated flight plan. Regardless I completed the degree with flying colors and
              am still very knowledgeable in the field and industry of aviation.
            </p>
          </div>
        </div>
        <div className="education-content">
          <figure className="education-figure">
            <img src="images/CareerFoundry.png" className="responsive-img" />
          </figure>
          <div className="education-text">
            <h3>Full Stack Immersion &bull; 2022</h3>

            <p>
              This is the course that molded me into a programmer. It was a
              fantastic journey that I completed with the help of tutors and
              mentors who are professionals in the industry. Learning from them
              and my peers I managed to complete the course projects (with my
              own personal spins) and earn my certificate.
            </p>
          </div>
        </div>
      </div>
      <div className="row skill">
        <h1 className="skills-header">
          <span>Skills</span>
        </h1>
        <h2 className="bar-header">HTML</h2>
        <div className="progress">
          <div className={inView ? 'progress-html' : ''}></div>
        </div>
        <h2 className="bar-header">CSS</h2>
        <div className="progress">
          <div className={inView ? 'progress-css' : ''}></div>
        </div>
        <h2 className="bar-header">JavaScript</h2>
        <div className="progress">
          <div className={inView ? 'progress-javascript' : ''}></div>
        </div>
        <h2 className="bar-header">ReactJs</h2>
        <div className="progress">
          <div className={inView ? 'progress-reactjs' : ''}></div>
        </div>
        <h2 className="bar-header">ReactNative</h2>
        <div className="progress">
          <div className={inView ? 'progress-reactnative' : ''}></div>
        </div>
        <h2 className="bar-header">AngularJS</h2>
        <div className="progress">
          <div className={inView ? 'progress-angularjs' : ''}></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
