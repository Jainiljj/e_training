// import { useState } from 'react';
// import Header from './components/Header/Header.jsx';
// import Footer from './components/Footer/Footer.jsx';
// import Home from './pages/Home/Home.jsx';
// import Work from './pages/Work/Work.jsx';
// import Services from './pages/Services/Services.jsx';
// import Reviews from './pages/Reviews/Reviews.jsx';
// import About from './pages/About/About.jsx';
// import Contact from './pages/Contact/Contact.jsx';
// import Blog from './pages/Blog/Blog.jsx';

// import './App.css'

// function App() {


//   return (
//     <div className="App">
//       <Header />
//       <Home />
//       <Work />
//       <Services />
//       <Reviews />
//       <About />
//       <Blog />
//       <Contact />
//       <Footer />
//     </div>
//   )
// }

// export default App

// 

import React, {useState} from 'react';

const ConditionalRendering = () = => {
  const [isLogin, setLogin] = usestate(false);
  const [value, setValue] = usestate();

  return(
    <div>
      ConditionalRendering 
      {
        isLogin ? <User /> : <Guest />}
        <button onClick={() => setIsLogin(true)}>Login</button> 
        {value == "User" && <User />}
        <br />
        <button onClick={() => setValue("User")}>Add value</button>
        <button onClick={() => setValue("Admin")}>reset</button>
      }
    </div>
  );
}