import React from 'react';
import { useInView } from 'react-intersection-observer';

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <section id="about" className="about">
      <figure className="about-img-container">
        <img className="about-img" src="images/portrait.jpg" />
      </figure>
      <div className="about-text">
        <h1 className="about-title">Here's a little more about me</h1>
        <p>
          I've spent my whole life learning. My interests range from tech and
          software engineering to history to hiking and spending as much time
          outdoors as I can. The picture above I took while thru hiking 2,000
          miles across the United States. I love to learn and I specifically
          love to learn while doing. In my professional life I've strived to
          learn as quickly as possible to become someone an employer or client
          can depend on through thick and thin.
        </p>
      </div>
    </section>
  );
}

export default About;
