import React, { useState, useEffect } from 'react';
import './CurrentTime.css';

function CurrentTime() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    return (
        <div className="clock-container">
            <div className="clock">
                <h2>
                    <span className="time-segment">{hours}</span>
                    <span className="colon">:</span>
                    <span className="time-segment">{minutes}</span>
                    <span className="colon">:</span>
                    <span className="time-segment">{seconds}</span>
                </h2>
            </div>
        </div>
    );
}

export default CurrentTime;
