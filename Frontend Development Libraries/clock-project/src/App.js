import { useState, useEffect } from "react";

function App() {
  // State variables to manage break length, session length, remaining time, and timer status
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(1500); // 1500 seconds = 25 minutes
  const [timingType, setTimingType] = useState("SESSION"); // Indicates whether it's session or break time
  const [play, setPlay] = useState(false); // Controls whether the timer is running or paused

  // Timeout function to decrement timeLeft every second
  const timeout = setTimeout(() => {
    if (timeLeft && play) {
      setTimeLeft(timeLeft - 1);
    }
  }, 1000);

  // Event handlers to adjust break and session lengths
  const handleBreakIncrease = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };

  const handleBreakDecrease = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  const handleSessionIncrease = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimeLeft(timeLeft + 60); // Adjust remaining time when session length is increased
    }
  };

  const handleSessionDecrease = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimeLeft(timeLeft - 60); // Adjust remaining time when session length is decreased
    }
  };

  // Reset timer and settings to initial values
  const handleReset = () => {
    clearTimeout(timeout); // Clear the timeout
    setPlay(false);
    setTimeLeft(1500);
    setBreakLength(5);
    setSessionLength(25);
    setTimingType("SESSION");
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  };

  // Toggle play/pause status of the timer
  const handlePlay = () => {
    clearTimeout(timeout); // Clear the timeout
    setPlay(!play);
  };

  // Logic to handle resetting timer when it reaches zero and transitioning between session and break times
  const resetTimer = () => {
    const audio = document.getElementById("beep");
    if (!timeLeft && timingType === "SESSION") {
      setTimeLeft(breakLength * 60);
      setTimingType("BREAK");
      audio.play();
    }
    if (!timeLeft && timingType === "BREAK") {
      setTimeLeft(sessionLength * 60);
      setTimingType("SESSION");
      audio.pause();
      audio.currentTime = 0;
    }
  };

  // useEffect hook to run clock function and manage cleanup when dependencies change
  useEffect(() => {
    // Clock function to manage timer logic
    const clock = () => {
      if (play) {
        const timer = setTimeout(() => {
          if (timeLeft && play) {
            setTimeLeft(timeLeft - 1);
          }
        }, 1000);
        resetTimer();
        return () => clearTimeout(timer); // Cleanup the timer when the component unmounts or when it's reset
      } else {
        clearTimeout(timeout); // Clear the timeout
      }
    };

    clock();
  }, [play, timeLeft, timeout]);

  // Function to format time in mm:ss format
  const timeFormatter = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft - minutes * 60;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  // Determine whether it's session or break time for display
  const title = timingType === "SESSION" ? "Session" : "Break";

  return (
    <div>
      <div className="wrapper">
        <h2>25 + 5 Clock</h2>
        <div className="break-session-length">
          <div>
            <h3 id="break-label">Break Length</h3>
            <div>
              <button
                disabled={play}
                onClick={handleBreakIncrease}
                id="break-increment"
              >
                Increase
              </button>
              <strong id="break-length">{breakLength}</strong>
              <button
                disabled={play}
                onClick={handleBreakDecrease}
                id="break-decrement"
              >
                Decrease
              </button>
            </div>
          </div>
          <div>
            <h3 id="session-label">Session Length</h3>
            <div>
              <button
                disabled={play}
                onClick={handleSessionIncrease}
                id="session-increment"
              >
                Increase
              </button>
              <strong id="session-length">{sessionLength}</strong>
              <button
                disabled={play}
                onClick={handleSessionDecrease}
                id="session-decrement"
              >
                Decrease
              </button>
            </div>
          </div>
        </div>
        <div className="timer-wrapper">
          <div className="timer">
            <h2 id="timer-label">{title}</h2>
            <h3 id="time-left">{timeFormatter()}</h3>
          </div>
          <button onClick={handlePlay} id="start_stop">
            Start/Stop
          </button>
          <button onClick={handleReset} id="reset">
            Reset
          </button>
        </div>
      </div>
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
}

export default App;
