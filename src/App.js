import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Innovation from './components/Innovation';
import TopHeader from './components/TopHeader';
import TableContactInfo from './components/TableContactInfo';
import AboutDetails from './components/AboutDetails';

const Facilities = lazy(() => import('./components/Facilities'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Appointment = lazy(() => import('./components/Appointment'));

const App = ()=>{
  return(
    <div>
        <TopHeader/>
        <Header/>
        <Home/>
        <Services/>
        <Innovation/>
        <Suspense fallback={null}>
          <Facilities/>
        </Suspense>
        <About/>
        <AboutDetails/>
        <Contact/>
        <TableContactInfo/>
        <Suspense fallback={null}>
          <Testimonials/>
        </Suspense>
        <Suspense fallback={null}>
          <Appointment/>
        </Suspense>
        <Footer/>
        
    </div>
  )
}

export default App;
