import React from 'react';
import { useInView } from 'react-intersection-observer';



function About() {

  const { ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <section id="about" className='about'>
      <figure className='about-img-container'>
        <img className='about-img' src='images/portrait.jpg'/>
      </figure>
      <div className='about-text'>
        <h1 className='about-title'>Here's a little more about me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum risus mi, et cursus arcu pulvinar eu. Aenean ut ex consequat, vehicula elit eu, hendrerit purus. Integer scelerisque fermentum sodales. Duis facilisis rhoncus pellentesque. Cras risus nisl, tristique id congue quis, convallis nec urna. Praesent placerat lorem nunc, id lacinia odio commodo in. Maecenas id lorem quis nibh accumsan maximus in quis erat. Proin molestie diam consequat, bibendum dui tincidunt, fringilla neque. Nullam pharetra faucibus quam, sodales finibus ipsum ultrices quis. Integer a ante venenatis, vulputate augue nec, egestas orci. Suspendisse accumsan purus bibendum sollicitudin finibus. Nullam felis lacus, sodales ac fermentum a, faucibus ac magna.</p>
      </div>
    </section>
  )

}

export default About;