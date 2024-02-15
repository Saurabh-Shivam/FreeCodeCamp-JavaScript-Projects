import { drumPads } from "./drumData";
import { useEffect, useState } from "react";

function App() {
  // const [currentSound, setCurrentSound] = useState(null);
  const [activeKey, setActiveKey] = useState("");

  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     const keyPressed = event.key.toUpperCase();
  //     const drumPad = drumPads.find((pad) => pad.text === keyPressed);
  //     if (drumPad) {
  //       playSound(drumPad.src);
  //     }
  //   };

  //   document.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []); // Empty dependency array ensures this effect runs only once on component mount

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      // console.log(event.key);
      playSound(event.key.toUpperCase());
    });
  });

  // function playSound(src) {
  //   if (currentSound) {
  //     // If a sound is currently playing, pause it before playing the new sound
  //     currentSound.pause();
  //   }

  //   const audio = new Audio(src);
  //   audio.play();
  //   setCurrentSound(audio);
  // }
  function playSound(selector) {
    const audio = document.getElementById(selector);
    // console.log(selector);
    // console.log(audio);
    audio.play();
    setActiveKey(selector);
  }
  return (
    <div>
      <div id="drum-machine">
        <div id="display">{activeKey}</div>
        <div>
          {drumPads.map((drumPad) => (
            <div
              key={drumPad.text}
              onClick={() => {
                playSound(drumPad.text);
                // playSound(drumPad.src);
              }}
              className="drum-pad"
              id={drumPad.keyCode}
            >
              {drumPad.text}
              <audio
                className="clip"
                id={drumPad.text}
                src={drumPad.src}
              ></audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
