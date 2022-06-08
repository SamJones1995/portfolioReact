import React, { Component, useState} from 'react';
import { useInView } from 'react-intersection-observer';


import Modal from "./Modal";

function Projects(props) {

    

        const { ref, inView} = useInView({
            triggerOnce: true,
            threshold: 0,
          });

          const myHorror = {
            title: 'myHorror client', 
            description: 'description'
        }

        const meetApp = {
            title: "meet",
            description: "this is meet"
        }
  

          const handleClick = (event, value) => {
            props.setModalVisible(true);
            // setModalValue(value);
            props.setModalContent(value); 
          }
    

    return (
        
        <section id="projects">
            <div className='row'>
                
                    <h1>Check out some of my code</h1>
                    <div ref={ref} className={inView ? "projects-wrapper-animate" : "projects-wrapper"}>
                        <ul className='projects-list'>
                        <li className='item-wrap'>
                            
                                <img alt='project-image' className='project-image' src='images/myHorror.png'></img>
                                <div className='overlay'>
                                    <div  className='projects-item'>
                                        <h5>Project</h5>
                                            <p>Description</p>
                                            
                                            <button onClick={e => handleClick(e, myHorror)}>More Details</button>
                                                
                                    </div>
                                </div>
                            
                        </li>
                   

                    
                        <li className='item-wrap'>
                            
                                <img alt='project-image' className='project-image' src='images/myHorror.png'></img>
                                <div className='overlay'>
                                    <div className='projects-item'>
                                        <h5>Project</h5>
                                            <p>Description</p>

                                            <button onClick={e => handleClick(e, meetApp)}>More Details</button>
                                    </div>
                                </div>
                            
                        </li>

                        <li className='item-wrap'>
                            <a href=''>
                                <img alt='project-image' className='project-image' src='images/myHorror.png'></img>
                                <div className='overlay'>
                                    <div className='projects-item'>
                                        <h5>Project</h5>
                                            <p>Description</p>
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li className='item-wrap'>
                            <a href=''>
                                <img alt='project-image' className='project-image' src='images/myHorror.png'></img>
                                <div className='overlay'>
                                    <div className='projects-item'>
                                        <h5>Project</h5>
                                            <p>Description</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        </ul>
                    </div>
                
                </div>

        </section>
    );

}

export default Projects