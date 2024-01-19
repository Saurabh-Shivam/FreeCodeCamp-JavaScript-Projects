const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

let NumAndRoman = [
  { digit: 1000, roman: "M" },
  { digit: 900, roman: "CM" },
  { digit: 500, roman: "D" },
  { digit: 400, roman: "CD" },
  { digit: 100, roman: "C" },
  { digit: 90, roman: "XC" },
  { digit: 50, roman: "L" },
  { digit: 40, roman: "XL" },
  { digit: 10, roman: "X" },
  { digit: 9, roman: "IX" },
  { digit: 5, roman: "V" },
  { digit: 4, roman: "IV" },
  { digit: 1, roman: "I" },
];

function convertRoman(number) {
  let romanLetter = "";
  let num = number;
  //   checking from the starting index value of NumAndRoman array object
  for (let i = 0; i < NumAndRoman.length; i++) {
    // if the input number is greater than or equal to the NumAndRoman array object's digit key
    // for eg-> we have taken 35 as input, then when i = 8, NumAndRoman[i].digit-> 10 < = 35, then
    if (NumAndRoman[i].digit <= num) {
      //   input num = 35 - 10 = 25
      num = num - NumAndRoman[i].digit;
      //   romanLetter will now be = "" + X as NumAndRoman[i].roman will i = 8 -> X
      romanLetter = romanLetter + NumAndRoman[i].roman;
      //   now bcz we need to check further more we have reeduced the value of i by so that we can check once again at the same position whether the current num value is >= NumAndRoman[i].digit or not and same process will repeat again an will gradually be updating the num and romanLetter value
      i--;
    }
  }

  return romanLetter;
}

function checkInput() {
  const number = document.getElementById("number").value;

  if (number === "") {
    output.innerText = "Please Enter a Valid Number";
  } else if (number < 1) {
    output.innerText = "Please enter a number greater than or equal to 1.";
  } else if (number > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999.";
  } else {
    output.innerText = convertRoman(number);
  }
}

btn.addEventListener("click", checkInput);
