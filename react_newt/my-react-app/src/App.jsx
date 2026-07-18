import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Work from './pages/Work/Work.jsx';
import Services from './pages/Services/Services.jsx';
import About from './pages/About/About.jsx';
import Reviews from './pages/Reviews/Reviews.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Contact from './pages/Contact/Contact.jsx';

import './App.css'

function App() {


  return (
    <div className="App">
      <Header />
      <Home />
      <Work />
      <Services />
      <About />
      <Reviews />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App


