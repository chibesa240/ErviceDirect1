// src/App.js
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import FeaturedServices from './components/FeaturedServices';
import ApplyService from './components/ApplyService';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Services />
      <FeaturedServices />
      <ApplyService />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
