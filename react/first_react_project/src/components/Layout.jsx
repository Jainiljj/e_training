import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Practice from './practice';
import InputComponent from './input';

function Layout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: 1, paddingBottom: '40px' }}>
        {children}
        <InputComponent />
      </div>
      <Practice />
      <Footer />
    </div>
  );
}

export default Layout;
