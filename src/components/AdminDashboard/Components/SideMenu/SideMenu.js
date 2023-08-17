import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, TranslationOutlined, UserOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from'./SideMenu.module.css';

const SideMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAdminDashboardPage = location.pathname === '/' || location.pathname.startsWith('/admin-dashboard');
  const sideMenuClassName = isAdminDashboardPage ? styles.SideMenuVerticaldash : styles.SideMenuVertical;

  const handleMenuClick = (item) => {
    navigate(item.key);
  };

  return (
    <Menu className={sideMenuClassName} mode="vertical" onClick={handleMenuClick}>
      <Menu.Item key="/admin-dashboard">
        <AppstoreOutlined />
        <span>Dashboard</span>
      </Menu.Item>
      <Menu.Item key="/translatorform">
        <TranslationOutlined />
        <span>Translator Onboard</span>
      </Menu.Item>
      <Menu.Item key="/usersform">
        <UserOutlined />
        <span>User Onboard</span>
      </Menu.Item>
    </Menu>
  );
};

export default SideMenu;
