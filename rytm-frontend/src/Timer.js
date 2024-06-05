// Timer.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons';
import './Timer.css';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isWorkPhase, setIsWorkPhase] = useState(true); // Track if it's work phase or break phase
  const [workDuration, setWorkDuration] = useState(25 * 60); // 25 minutes in seconds
  const [breakDuration, setBreakDuration] = useState(5 * 60); // 5 minutes in seconds

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    if (seconds === 0) {
      handleTimerEnd();
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    // Reset the timer when switching between work and break phases
    setSeconds(isWorkPhase ? workDuration : breakDuration);
  }, [isWorkPhase]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setSeconds(isWorkPhase ? workDuration : breakDuration);
    setIsActive(false);
  };

  const handleTimerEnd = () => {
    // If it's the work phase, switch to the break phase, and vice versa
    setIsWorkPhase(!isWorkPhase);
    // Reset the timer to the appropriate duration
    setSeconds(isWorkPhase ? breakDuration : workDuration);
    // Optionally, you can add a sound notification here to indicate the end of a phase
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="rectangle-neumorphism">
      <div className="header-text">
        <h2>{isWorkPhase ? 'Travail' : 'Pause'}</h2>
      </div>
      <div className={`neumorphism-circle ${isActive ? 'active' : ''}`}>
        <div className="timer-container">
          <h2 className={`timer-text ${isActive ? 'text-active' : ''}`}>{formatTime(seconds)}</h2>
          <div className="button-container">
            <button onClick={toggleTimer}>
              {isActive ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
            </button>
            <button onClick={resetTimer}>
              <FontAwesomeIcon icon={faRedo} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
