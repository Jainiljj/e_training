import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <hr />
      <div>
        {children}
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default Layout;
