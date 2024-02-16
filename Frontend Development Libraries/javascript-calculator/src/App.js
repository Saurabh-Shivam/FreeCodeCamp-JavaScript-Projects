import { useState } from "react";

function App() {
  const [value, setValue] = useState("0");

  function numberHandler(event) {
    const number = event.target.textContent;
    if (value === "0") {
      setValue(number);
    } else {
      setValue(value + number);
    }
  }

  function operatorHandler(event) {
    const operator = event.target.textContent;
    setValue(value + " " + operator + " ");
  }

  function decimalHandler() {
    const arr = value.split(" ");
    const lastElem = arr[arr.length - 1];

    if (!lastElem.includes(".")) {
      setValue(value + ".");
    }
  }

  function clearHandler() {
    setValue("0");
  }

  function equalHandler() {
    setValue(eval(value));
  }

  return (
    <div>
      <div
        id="container"
        className="flex flex-col gap-4 justify-center items-center h-screen"
      >
        <div id="display">{value}</div>
        <div
          id="btns"
          className="grid grid-cols-4 gap-4 p-2 border-2 border-black"
        >
          <button id="clear" onClick={clearHandler}>
            AC
          </button>
          <button id="seven" onClick={numberHandler}>
            7
          </button>
          <button id="eight" onClick={numberHandler}>
            8
          </button>
          <button id="nine" onClick={numberHandler}>
            9
          </button>
          <button id="multiply" onClick={operatorHandler}>
            *
          </button>
          <button id="four" onClick={numberHandler}>
            4
          </button>
          <button id="five" onClick={numberHandler}>
            5
          </button>
          <button id="six" onClick={numberHandler}>
            6
          </button>
          <button id="divide" onClick={operatorHandler}>
            /
          </button>
          <button id="one" onClick={numberHandler}>
            1
          </button>
          <button id="two" onClick={numberHandler}>
            2
          </button>
          <button id="three" onClick={numberHandler}>
            3
          </button>
          <button id="add" onClick={operatorHandler}>
            +
          </button>
          <button id="zero" onClick={numberHandler}>
            0
          </button>
          <button id="decimal" onClick={decimalHandler}>
            .
          </button>
          <button id="equals" onClick={equalHandler}>
            =
          </button>
          <button id="subtract" onClick={operatorHandler}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
