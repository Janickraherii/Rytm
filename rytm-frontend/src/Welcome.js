// src/Welcome.js
import React from 'react';
import './Welcome.css';

const Welcome = ({ username }) => {
  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <h1>Bienvenue, {username}!</h1>
        <p>Passe une journée brillante! ✨</p>
      </div>
      <div className="welcome-image">
        <img src="https://img.freepik.com/vecteurs-libre/femme-travaillant-activites-multitaches_23-2148823002.jpg?t=st=1717537671~exp=1717541271~hmac=d99df27390b431c3d7fac686a028687e0c174caffc5c4c1067083ba8ed21e49c&w=740" alt="Inspiring Hailey Bieber" />
      </div>
    </div>
  );
};

export default Welcome;
