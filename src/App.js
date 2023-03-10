
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Innovation from './components/Innovation';
import Appointment from './components/Appointment';
import TopHeader from './components/TopHeader';
const App = ()=>{
  return(
    <div>
        <TopHeader/>
        <Header/>
        <Home/>
        <Services/>
        <Innovation/>
        <About/>
        <Contact/>
        <Appointment/>
        <Footer/>
        
    </div>
  )
}

export default App;