import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import FeaturedVoices from './components/FeaturedVoices';
import LatestStories from './components/LatestStories';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
      <div style={{ width: "10%" }}>
        </div>
        <div style={{ width: "65%" }}>
          <FeaturedVoices />
        </div>
        <div style={{ width: "25%",backgroundColor: "yellow" }}>
          <LatestStories />
        </div>
      </div>
    </div>
  );
}

export default App;
