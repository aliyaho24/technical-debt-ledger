import React from 'react';
import './App.css';
import SummaryPage from './views/SummaryPage';
import Navigation from './components/SideNav';

function App() {
  return (
    <div className="container">
      <div className="nav-bar">
        <Navigation />
      </div>
      <div className="content">
        <SummaryPage />
      </div>
    </div>
    
  );
}

export default App;
