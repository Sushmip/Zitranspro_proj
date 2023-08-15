import React from 'react';
import { Menu } from 'antd';
import './SideMenu.css';
import { AppstoreOutlined, PlusOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';

const SideMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (item) => {
    navigate(item.key);
  };

  // Check if the current route is the Translation page
  const isTranslationPage = location.pathname.includes('/translation');

  // Render the SideMenu only if not on the Translation page
  if (isTranslationPage) {
    return null;
  }

  return (
    <Menu className='SideMenuVertical' mode="horizontal" onClick={handleMenuClick}>
      <Menu.Item key="/">
        <AppstoreOutlined />
        <span>Dashboard</span>
      </Menu.Item>
      <Menu.Item key="/create-request">
        <PlusOutlined />
        <span>Create Request</span>
      </Menu.Item>
    </Menu>
  );
};

export default SideMenu;
