import React, { Component } from 'react';
import { useInView } from 'react-intersection-observer';



function Header() {

    const { ref, inView} = useInView({
        threshold: [0],
        initialInView: true,
        // rootMargin: '-50%'
      });

      const [ref2, inView2 ] = useInView( {

      })
   
    return (
      <header ref={ref} className="header">
        <nav id="nav-wrap" className={inView ? '' : 'nav-background'}>

       
          <ul id="nav" className={inView2 ? 'navHidden' : "nav"}>
            <li className="btn">
              <a className="scroll" href="#header">
                Home
              </a>
            </li>
            <li className="btn">
              <a className="scroll" href="#projects">
                Projects
              </a>
            </li>
            <li className="btn">
              <a className="scroll" href="#about">
                About
              </a>
            </li>
            <li className="btn">
              <a className="Contact" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="home-banner">
          <div className="banner-text">
            <h1 className="headline">I'm Sam, lets move mountains.</h1>
            <h3> I'm a Roanoke, VA based web developer here to solve your problems.</h3>

          </div>
        </div>
        <span ref={ref2} className='stickBottom'></span>
      </header>
    );
    }


export default Header;
