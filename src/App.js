import logo from './logo.svg';
import React, { useState } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Modal from './components/Modal';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});

  return (
    <div className="app">
      <Header />
      <Projects
        setModalVisible={setModalVisible}
        setModalContent={setModalContent}
      />
      <Modal
        isOpen={modalVisible}
        handleClose={() => setModalVisible(false)}
        modalContent={modalContent}
      />
      
      <Skills />
      
      <About />
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
