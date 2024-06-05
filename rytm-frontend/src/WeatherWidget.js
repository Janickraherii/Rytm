// src/WeatherWidget.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherWidget.css';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [iconColor, setIconColor] = useState('');
  const [isClear, setIsClear] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=33d45805968f3ea175ce5ffaee1b4593&units=metric`);
        setWeatherData(response.data);
        const weatherType = response.data.weather[0].main;
        setIconColor(getIconColor(weatherType));
        setIsClear(weatherType === 'Clear');
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);

  const getIconColor = (weatherType) => {
    switch (weatherType) {
      case 'Clear':
        return 'lightyellow'; // Couleur jaune plus claire
      case 'Clouds':
        return '#333'; // Gris foncé
      case 'Rain':
        return 'blue';
      default:
        return '';
    }
  };

  return (
    <div className="weather-widget">
      <h2>Météo</h2>
      {weatherData && (
        <div>
          <div>Lieu: {weatherData.name}</div>
          <div>Météo: {weatherData.weather[0].description}</div>
          <div className="temperature">{Math.round(weatherData.main.temp)}°C</div>
          {weatherData.weather[0].main === 'Clear' && (
            <i className="fas fa-sun" style={{ color: iconColor, animation: isClear ? 'spin 3s linear infinite' : 'none' }}></i>
          )}
          {weatherData.weather[0].main === 'Clouds' && <i className="fas fa-cloud" style={{ color: iconColor }}></i>}
          {weatherData.weather[0].main === 'Rain' && <i className="fas fa-cloud-showers-heavy" style={{ color: iconColor }}></i>}
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
