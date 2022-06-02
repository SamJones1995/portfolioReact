import React, { Component } from 'react';
import { animated, useSpring } from 'react-spring';
import { useState } from 'react';

class Header extends Component {
    render() {
    return (
      <header className="header">
        <nav id="nav-wrapper">
          <ul id="nav">
            <li className="btn-2">
              <a className="scroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="scroll" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="scroll" href="#about">
                About
              </a>
            </li>
            <li>
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
      </header>
    );
    }
}

export default Header;
