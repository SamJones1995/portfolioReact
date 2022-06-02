import logo from './logo.svg';
import React, { Component } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Projects />
      </div>
    );
  }
}

export default App;
