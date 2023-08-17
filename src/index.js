import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import './index.css';
import App from './App';
import { TranslatorProvider } from './components/AdminDashboard/Components/Pages/TranslatorContext/TranslatorContext';
import { UserProvider } from './components/AdminDashboard/Components/Pages/UsersContext/UsersContext';
import { RequestProvider } from './components/UserDashboard/CreateRequest/RequestContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <TranslatorProvider>
    <RequestProvider>
      <UserProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      </UserProvider>
      </RequestProvider>
    </TranslatorProvider>
  </Router>
);
