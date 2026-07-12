import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: 'black',
      color: 'white',
      padding: '40px 20px',
      textAlign: 'center',
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
      marginTop: '40px'
    }}>
      <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
        all rights are reserserved (this is footer)
      </p>
    </footer>
  );
}

export default Footer;
