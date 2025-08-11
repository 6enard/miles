import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Membership from './components/Membership';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header /> 
      <Hero />
      <About />
      <Events />
      <Membership />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;