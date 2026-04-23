import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (seconds === 0 && isActive) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const startTimer = () => {
    if (seconds > 0) setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const setTime = (time) => {
    setSeconds(time);
    setIsActive(false);
  };

  const buttonStyle = {
    margin: '5px',
    padding: '8px 16px',
    fontSize: '16px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, Docker!</h1>
        <h2>Таймер</h2>
        <h1 style={{ fontSize: '64px', margin: '20px' }}>{seconds} сек</h1>
        <div>
          <button onClick={() => setTime(10)} style={buttonStyle}>10 сек</button>
          <button onClick={() => setTime(30)} style={buttonStyle}>30 сек</button>
          <button onClick={() => setTime(60)} style={buttonStyle}>60 сек</button>
        </div>
        <div style={{ marginTop: '10px' }}>
          <button onClick={startTimer} style={buttonStyle}>Старт</button>
          <button onClick={stopTimer} style={buttonStyle}>Стоп</button>
          <button onClick={resetTimer} style={buttonStyle}>Сброс</button>
        </div>
      </header>
    </div>
  );
}

export default App;