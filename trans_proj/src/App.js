import React from 'react';
import Footer from './components/Footer';
import AppRoutes from './AppRoutes';
import Header from './components/Header';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import './App.css';

function App() {
  const location = useLocation();
  const showBackgroundImage = location.pathname === '/';

  // Define an array of routes where you want to exclude the header
  const excludedRoutes = ['/User-dashboard', '/create-request', '/translation'];

  // Check if the current route is in the excludedRoutes array
  const shouldRenderHeader = !excludedRoutes.some(route =>
    location.pathname.includes(route)
  );

  return (
    <div className={`App ${showBackgroundImage ? 'background-image' : ''}`}>
      {shouldRenderHeader && <Header />} {/* Render Header if not on excluded routes */}
      <div className="AppRoutes">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
