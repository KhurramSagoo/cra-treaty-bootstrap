import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TopNav from './components/TopNav'
import Carousel from './components/Carousel';
import Icons from './components/Icons'
import MidSection from './components/MidSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <TopNav />
    <Carousel />
    <Icons />
    <MidSection />
    <Contact />
    <Footer />

    </>
  );
}

export default App;
