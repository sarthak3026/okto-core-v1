// Layout.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  let pageStyles = {}; // Styles for individual pages

  // Check if the current page is the home page
  if (location.pathname === '/') {
    pageStyles = {
      
      backgroundSize: '100% 70%',
      backgroundRepeat: 'no-repeat',

      backgroundAttachment: 'fixed',
    };
  } else if (location.pathname === '/page2') {
    pageStyles = {
      backgroundColor: 'rgb(118, 182, 246)',
    };
  }

  return (
    <div style={pageStyles}>
      {children}
    </div>
  );
};

export default Layout;
