import React, { Component, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function Projects(props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const myHorror = {
    title: 'myHorror client',
    description:
      'This app is built using ReactJS, React Redux, and React Bootstrap to show movies to registered users. myHorror is a single page app and it fetches from a REST API database. After login users will find the movies list page with all available movies. Clicking a movies Open button will provide more details about the movie. Users can also add or remove the movie from a list of favorites in the movie details.',
    liveLink: 'https://myhorror.netlify.app/',
    gitLink: 'https://github.com/SamJones1995/myHorror-client',
    imgSrc: 'images/myHorror.png',
  };

  const meetApp = {
    title: 'meet',
    description:
      'Meet is a serverless progressive web application (PWA) built with React to show a user filtered list of upcoming events. It was built using TDD and BDD methodology and integrates with the Google Calendar API. ',
    liveLink: 'https://samjones1995.github.io/meet/',
    gitLink: 'https://github.com/SamJones1995/meet',
    imgSrc: 'images/meet.png',
  };

  const pokeDex = {
    title: 'PokeDex App',
    description:
      'This simple application displays 151 Pokemon from an external API and shows them in a filterable list. It is styled with Bootstrap.',
    liveLink: 'https://samjones1995.github.io/simple-js-app/',
    gitLink: 'https://github.com/SamJones1995/simple-js-app',
    imgSrc: 'images/Pokedex.png',
  };

  const todoApp = {
    title: 'Todo App',
    description:
      'Simple app built with HTML, CSS, JavaScript, and jQuery. Users can add, strikethrough, remove, or reorder todos.',
    liveLink: 'https://samjones1995.github.io/to-do-list-app/',
    gitLink: 'https://github.com/SamJones1995/to-do-list-app',
    imgSrc: 'images/todo.png',
  };

  const mobileChat = {
    title: 'Mobile Chat',
    description:
      'Chat app for mobile devices using React Native, Expo, Firebase, and Gifted Chat. The app provides users with a chat interface and options to share images and their location.',
    liveLink: 'mobile-chat.png',
    gitLink: 'https://github.com/SamJones1995/mobile-chat-app',
    // imgSrc: 'mobile-chat.png'
  };

  const myHorrorAngular = {
    title: 'myHorrorAngular',
    description:
      'Frontend client for my movie_api built using Angular. It has all the same functionality as the React version with a different build and style.',
    liveLink: 'https://samjones1995.github.io/myHorror-Angular-Client/login',
    gitLink: 'https://github.com/SamJones1995/myHorror-Angular-Client',
    imgSrc: 'images/MyHorrorAngular.png',
  };

  const handleClick = (event, value) => {
    props.setModalVisible(true);
    // setModalValue(value);
    props.setModalContent(value);
  };

  return (
    <section id="projects">
      <div className="row">
        <h1>Check out some of my code</h1>
        <div
          ref={ref}
          className={inView ? 'projects-wrapper-animate' : 'projects-wrapper'}
        >
          <ul className="projects-list">
            <li className="item-wrap">
              <a href={myHorror.liveLink} target="_blank">
                <img
                  alt="project-image"
                  className="project-image"
                  src={myHorror.imgSrc}
                ></img>
              </a>
              <div className="projects-item">
                <h2>myHorror client</h2>

                <button
                  className="details-button"
                  onClick={(e) => handleClick(e, myHorror)}
                >
                  MORE DETAILS
                </button>
              </div>
            </li>

            <li className="item-wrap">
              <a href={meetApp.liveLink} target="_blank">
                <img
                  alt="project-image"
                  className="project-image"
                  src={meetApp.imgSrc}
                ></img>
              </a>
              <div className="projects-item">
                <h2>Meet</h2>

                <button
                  className="details-button"
                  onClick={(e) => handleClick(e, meetApp)}
                >
                  MORE DETAILS
                </button>
              </div>
            </li>

            <li className="item-wrap">
              <a href={pokeDex.liveLink} target="_blank">
                <img
                  alt="project-image"
                  className="project-image"
                  src={pokeDex.imgSrc}
                ></img>
              </a>
              <div className="projects-item">
                <h2>PokeDex App</h2>

                <button
                  className="details-button"
                  onClick={(e) => handleClick(e, pokeDex)}
                >
                  MORE DETAILS
                </button>
              </div>
            </li>

            <li className="item-wrap">
              <a href={todoApp.liveLink} target="_blank">
                <img
                  alt="project-image"
                  className="project-image"
                  src={todoApp.imgSrc}
                ></img>
              </a>
              <div className="projects-item">
                <h2>Todo App</h2>

                <button
                  className="details-button"
                  onClick={(e) => handleClick(e, todoApp)}
                >
                  MORE DETAILS
                </button>
              </div>
            </li>
            <li className="item-wrap">
              <div className="projects-item">
                <h2 className="mobile-chat-header">Mobile Chat</h2>
                <p>
                  Chat app for mobile devices using React Native. The app
                  provides users with a chat interface and options to share
                  images and their location.
                </p>
                <button
                  className="details-button"
                  onClick={(e) => handleClick(e, mobileChat)}
                >
                  MORE DETAILS
                </button>
              </div>
            </li>
            <li className="item-wrap">
              <a href={myHorrorAngular.liveLink} target="_blank">
                <img
                  alt="project-image"
                  className="project-image"
                  src={myHorrorAngular.imgSrc}
                ></img>
              </a>
              <div className="projects-item">
                <h2>myHorrorAngular</h2>

                <button
                  className="details-button"
                  onClick={(e) => handleClick(e, myHorrorAngular)}
                >
                  MORE DETAILS
                </button>
              </div>
            </li>
          </ul>
        </div>
        <h1 className="team-blurb">
          Looking for a team player? Check out my work with my open source{' '}
          <a target='_blank' href="https://github.com/web-dev-incubator-org">coding team!</a>
        </h1>
      </div>
    </section>
  );
}

export default Projects;
