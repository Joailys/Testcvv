import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Presentation from './components/presentation/Presentation';
import Competence from './components/competence/Competence';
import Realisation from './components/realisation/Realisation';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <Navbar/>
    <Header/>
    <Presentation/>
    <Competence/>
    <Realisation/>
    <Contact/>
    <Footer/>
  </>
  
);



