const btn = document.getElementById("check-btn");
const result = document.getElementById("result");
// NOTE:-> we can either initialise it with let keyword if we want to declare text variable outside the function but if we are declaring text variable with const keyword we make sure to declare it inside the function, i.e. not making it global bcz the value of text is captured only once when the script is loaded. When we click the button later, the value of text remains the same as it was when the script initially ran. By moving the line const text = document.getElementById("text-input").value; inside the checkInput function, we ensure that every time the button is clicked, the function retrieves the current value of the input field. This is important because users can change the content of the input field between the script initialization and the button click event.
// let text = document.getElementById("text-input").value;

function checkPalindrome(txt) {
  // The purpose of these lines of code is to create a reversed version of the input string that contains only lowercase alphanumeric characters. This will be used for checking if the input string is a palindrome or not
  // converting all string into lowercase and conaining only alphanumeric values in it
  const lowerTxt = txt.toLowerCase().match(/[a-z 0-9]/g);
  // this will join/convert the array into string
  const oldNewTxt = lowerTxt.join("");
  // thi will reverse the array and then convert it into a single string
  const reversedTxt = lowerTxt.reverse().join("");
  return oldNewTxt === reversedTxt;
}

function checkInput() {
  const text = document.getElementById("text-input").value;

  if (text === "") {
    alert("Please input a value");
    return;
  }

  if (checkPalindrome(text)) {
    result.innerText = `${text} is a palindrome`;
  } else {
    result.innerText = `${text} is not a palindrome`;
  }
}

btn.addEventListener("click", checkInput);
