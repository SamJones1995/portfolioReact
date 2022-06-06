import React, { Component} from 'react';
import { useInView } from 'react-intersection-observer';

function Projects() {

    
        const { ref, inView} = useInView({
            triggerOnce: true,
            threshold: 0,
          });
  
          
    

    return (
        <section id="projects">
            <div className='row'>
                
                    <h1>Check out some of my code</h1>
                    <div ref={ref} className={inView ? "projects-wrapper-animate" : "projects-wrapper"}>
                        <ul className='projects-list'>
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