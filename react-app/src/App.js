import React, { useState } from 'react';
import Dashboard from "./Components/Dashboard";
import Display from "./Components/Display";
import './App.css';

function App() {
   const [strikes, setStrikes] = useState(0);
   const [balls, setBalls] = useState(0);
   
   const addStrike = currentStrikes => {
     if (currentStrikes >= 2) {
       return 0;
     } else { 
       return currentStrkies + 1;
    }
   };
  
   const addBall = currentBalls => {
     if (currentBalls >= 3){
       return 0;
     } else {
      return currentBalls + 1;
     } 
   };

   const foulBall = currentStrikes => {
    if (currentBalls >= 2){
      return currentStrikes;
    } else {
      return currentStrikes + 1;
    }
  };
  

   const addBall = currentBalls
  return (
    <div className="App">
      <h1>Baseball Dashboard</h1>
      <div className="display">
        <div className="strikes">Strikes: {strikes} </div>
        <div className="balls">Balls: {balls}</div>
        <div className="dashbboard-buttons">
          <button onClick={() => setStrikes(addStrike(strikes))} className="strike">
            Strike
          </button>
          <button onClick={() => setBalls(addBall(balls))} className="ball">
            Ball
          </button>
          <button onClick={() => setStrikes(hit(strikes), setBalls(hit(balls)))} className="hit">
            Hit 
          </button>
          <button onClick={() => setStrikes(foulBall(strikes))} className="foul">
            Foul
          </button>
        </div>
      </div>
    </div>
  );
}




export default App;
