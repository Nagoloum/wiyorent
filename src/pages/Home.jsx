import React from 'react';
import Header from '../composants/Header';
import Footer from '../composants/Footer';
import About from '../composants/About';
import Services from '../composants/Services';
import Contact from '../composants/Contact';
import Caroussel from '../composants/Caroussel';

function Home() {
  return (
    <div>
      <Header />
      <div className='mt-20'>
        <Caroussel />
      </div>
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
