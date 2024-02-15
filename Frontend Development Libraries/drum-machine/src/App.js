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
    // here we are getting the audio element inside drumPad element
    const audio = document.getElementById(selector);
    // console.log(selector);
    // console.log(audio);
    audio.play();
    setActiveKey(selector);
  }
  return (
    <div className="flex flex-wrap bg-gray-500 h-screen items-center justify-center">
      <div
        id="drum-machine"
        className="border-8 border-blue-300 rounded-md h-92 w-[42%] flex justify-between p-6"
      >
        <div className="border-2 border-red-300 grid grid-cols-3 gap-4 p-6 w-80 h-72">
          {drumPads.map((drumPad) => (
            <div
              key={drumPad.text}
              onClick={() => {
                playSound(drumPad.text);
                // playSound(drumPad.src);
              }}
              className="drum-pad border-2 border-white text-white border-dotted flex justify-center items-center py-2 px-4 text-2xl cursor-pointer hover:bg-blue-200 transition-all ease-in hover:border-none hover:border-white"
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

        <div
          className="text-3xl font-bold border-2 border-red-300 text-white rounded-md w-[30%] h-16 flex items-center justify-center mt-auto mb-auto"
          id="display"
        >
          {activeKey}
        </div>
      </div>
    </div>
  );
}

export default App;
