import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TopNav from './components/TopNav'
import Carousel from './components/Carousel';
import Icons from './components/Icons'
import MidSection from './components/MidSection'
import Contact from './components/Contact'
import Contact2 from './components/Contact2'
import Footer from './components/Footer'
import Left from './components/Left'

function App() {
  return (
    <>
    <TopNav />
    <Carousel />
    <Icons />
    <MidSection />
    <Contact />
    {/* <Contact2 /> */}
    {/* <Left /> */}
    <Footer />

    </>
  );
}

export default App;
