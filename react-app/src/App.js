import React, { useState } from 'react';
// import Dashboard from "./Components/Dashboard";
import { Display } from "./Display";
import './App.css';

function App() {
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);

  const handleStrike = () => {
    setStrike(strike+1);
    if (ball === 4 || strike === 3) {
      setBall(0);
      setStrike(0);
    }
  };

  const handleBall = () => {
    setBall(ball+1);
    if (ball === 4 || strike === 3) {
      setBall(0);
      setStrike(0);
    }
  };

  const handleHit = () => {
    setBall(0);
    setStrike(0);
  };

  const handleFoul = () => {
    if(strike < 2) {
      setStrike(strike + 1); 
    }
  };

  return (
    <div className="App">
      <Display ball={ball} strike={strike}></Display>
      <h1>Baseball Dashboard</h1>
      <div className="display">
        <div className="dashbboard-buttons">
          <button onClick={handleStrike} className="strike">
            Strike
          </button>
          <button onClick={handleBall} className="ball">
            Ball
          </button>
          <button onClick={handleHit} className="hit">
            Hit 
          </button>
          <button onClick={handleFoul} className="foul">
            Foul
          </button>
        </div>
      </div>
    </div>
  );
}




export default App;
