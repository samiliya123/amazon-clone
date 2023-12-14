 // components/layout/Layout.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation()
    const [showNavbar, setShowNavbar] = useState(false)

    useEffect(() => {
        if(location.pathname === '/login') {
            setShowNavbar(false)
        } else {setShowNavbar(true)}

    },[location])
  return (
    <div>
      <div>
        {showNavbar && children}
      </div>
    </div>
  );
};

export default Layout;
