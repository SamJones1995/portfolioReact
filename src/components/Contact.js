import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h1 className="skills-header">Contact</h1>
      <h3>
        Want to get in touch? Great! I am most reachable by email but feel free
        to contact me through any of the below methods.
      </h3>
      <div className="contact-text">
        <div className="contact-block">
          <ul className="contact-left">
            <li>Sam Jones</li>
            <li>111B Dogwood Hill Rd</li>
            <li>Boones Mill, VA</li>
            <li>United States</li>
          </ul>
        </div>
        <div className="contact-block">
          <ul className="contact-right">
            <li>
              <a href="tel:5404931357">540-493-1357</a>
            </li>
            <li>
              <a href="mailto:samjonesdeveloper@gmail.com">
                samjonesdeveloper@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
