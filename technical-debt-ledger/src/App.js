import React from 'react';
import './App.css';
import SummaryPage from './views/SummaryPage';
import Navigation from './components/SideNav';
import SideMenu from './components/AlternateNav';

function App() {
  return (
    <div className="container">
      <div className="nav-bar">
        <SideMenu />
      </div>
    </div>
    
  );
}

export default App;
