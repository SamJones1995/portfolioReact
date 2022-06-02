import React, { Component } from 'react';

class Projects extends Component {
    render() {

    

    return (
        <section id="projects">
            <div className='row'>
                
                    <h1>Check out some of my code</h1>
                    <div id="projects-wrapper">
                        <ul>
                        <li className='item-wrap'>
                            <a href=''>
                                <img alt='' src='images/myHorror.png'></img>
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
                                <img alt='' src='images/myHorror.png'></img>
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
                                <img alt='' src='images/myHorror.png'></img>
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
}

export default Projects