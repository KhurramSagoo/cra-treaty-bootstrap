import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TopNav from './components/TopNav'
import Carousel from './components/Carousel';
import Icons from './components/Icons'

function App() {
  return (
    <>
    <TopNav />
    <Carousel />
    <Icons />

    </>
  );
}

export default App;
