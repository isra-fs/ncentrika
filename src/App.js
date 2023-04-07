
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
import TableContactInfo from './components/TableContactInfo';
import AboutDetails from './components/AboutDetails';
import Testimonials from './components/Testimonials';
import Facilities from './components/Facilities';
const App = ()=>{
  return(
    <div>
        <TopHeader/>
        <Header/>
        <Home/>
        <Services/>
        <Innovation/>
        <Facilities/>
        <About/>
        <AboutDetails/>
        <Contact/>
        <TableContactInfo/>
        <Testimonials/>
        <Appointment/>
        <Footer/>
        
    </div>
  )
}

export default App;