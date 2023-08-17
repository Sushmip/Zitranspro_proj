import React from "react";
import { Card } from "antd";
import { useNavigate,useLocation } from 'react-router-dom';
import AdminSideMenu from "../../SideMenu/AdminSideMenu";
import styles from'./Dashboard.module.css';


const Dashboard = () => {
  const navigate = useNavigate();
  const location= useLocation();
  const isAdminDashboard = location.pathname.startsWith('/admin-dashboard');


  const handleTranslatorClick = () => {
    navigate('/translatordetails');
  };

  const handleUserClick = () => {
    navigate('/usersdetails');
  };

  return (
    <div className={styles["dashboard-container"]}>
      <h2 className={styles["dashboard-heading"]}>Dashboard</h2>
      {isAdminDashboard && <AdminSideMenu />} {/* Conditionally render SideMenu */}

      <div className={styles["dashboard-cards"]}>
        <Card className={styles["dashboard-card"]} onClick={handleTranslatorClick} hoverable>
          <img
            src="https://img.icons8.com/?size=1x&id=24778&format=png"
            alt="Icon"
            className={styles["dashboard-icon1"]}
          />
          <p className={styles["dashboard-card-text"]}>Translator Info</p>
        </Card>
        <Card className={styles["dashboard-card"]} onClick={handleUserClick} hoverable>
          <img
            src="https://img.icons8.com/?size=1x&id=a3baYGSexl8I&format=png"
            alt="Icon"
            className={styles["dashboard-icon2"]}
          />
          <p className={styles["dashboard-card-text"]}>User Info</p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
