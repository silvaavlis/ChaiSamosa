import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1>🫖Team Chai Samosa</h1>
        <p>Welcome to our Student Team Member Management Application!</p>
        <div className="home-buttons">
          <Link to="/add">
            <button>Add Member</button>
          </Link>
          <Link to="/members">
            <button>View Members</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
