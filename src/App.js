import React from 'react'
import {NavBar} from './components'
import{AboutUs, Chef, FindUs,Footer,Gallery,Header,Intro,Laurels,SpecialMenu} from './container'
import './App.css';

const App = () => {
  return (
    <div className='mainapp'>
      <NavBar />
      <Intro/>
      <Header />
      <AboutUs/>
      <SpecialMenu/>
      <Chef/>
      <Laurels/>
      <Gallery/>
      <FindUs/>
      <Footer/>
      </div>
  );
}

export default App;
