import React from 'react';
import { useInView } from 'react-intersection-observer';

function Job() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <section>
      <div ref={ref} id="job">
      <figure className="about-img-container">
        <img className="about-img" src="images/pic1-take.jpg" />
      </figure>
      <div className="about-text">
        <h1 className="about-title">What I'm up to</h1>
        <p>
          My current professional project is as a Production Support Maintenance Senior working with my colleagues 
          to perform upkeep and solve critical issues at a major international bank. We work closely with immense 
          SQL databases and unix boxes to troubleshoot issues related to commodities trades worth millions of dollars.
          Its a fast paced and demanding work environment that requires one to learn on the fly. Its been a challenging 
          but very rewarding position.
        </p>
      </div>
      </div>
      <div style={{padding: '0 50px'}}>
      <hr className='displayLine'/>
      </div>
    </section>
  );
}

export default Job;
