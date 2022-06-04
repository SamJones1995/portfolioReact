import logo from './logo.svg';
import React, { Component } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';

function App()  {
  
    return (
      <div className="app">
        <Header />
        <Projects />
        <Skills />
      </div>
    );
  }


export default App;
