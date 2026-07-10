import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Practice from './practice';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <hr />
      <div>
        {children}
      </div>
      <hr />
      <Practice />
      <Footer />
    </div>
  );
}

export default Layout;
