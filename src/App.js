import React from 'react';
//import{ Space } from "antd";
import SideMenu from './components/SideMenu/SideMenu';
import AppHeader from './components/AppHeader/Navbar';
import AppFooter from './components/AppFooter/AppFooter';
import PageContent from './components/PageContent/PageContent';


function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="container">
        <SideMenu />
        <PageContent />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;