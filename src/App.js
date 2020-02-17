import React, { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // setSeconds(seconds + 1);
  useEffect(() => {
    if (isRunning) {
      const id = window.setInterval(() => {
        setSeconds(seconds => seconds + 1); //cb function
      }, 1000);
      return () => window.clearInterval(id);
    }
    return undefined;
  }, [isRunning]);

  return (
    <div className="app">
      {/* <button onClick={() => setSeconds(seconds + 1)}>inc seconds</button> */}
      <div className="time-circle">
        <div className="time">{seconds}</div>
      </div>
      <div className="buttons">
        {isRunning ? (
          <button
            className="play-pause"
            onClick={() => {
              setIsRunning(false);
            }}
          >
            <i className="fa fa-pause fa-2x" />
          </button>
        ) : (
          <button className="play-pause" onClick={() => setIsRunning(true)}>
            <i className="fa fa-play fa-2x" />
          </button>
        )}
        <button
          className="reset"
          onClick={() => {
            setIsRunning(false);
            setSeconds(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
