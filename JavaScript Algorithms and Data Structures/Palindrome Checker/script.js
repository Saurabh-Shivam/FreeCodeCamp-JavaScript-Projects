const text = document.getElementById("text-input").value;
const btn = document.getElementById("check-btn");
const result = document.getElementById("result");

function checkPalindrome(txt) {
  // The purpose of these lines of code is to create a reversed version of the input string that contains only lowercase alphanumeric characters. This will be used for checking if the input string is a palindrome or not
  // converting all string into lowercase and conaining only alphanumeric values in it
  const lowerTxt = txt.toLowerCase().match(/[a-z 0-9]/g);
  // this will join/convert the array into string
  const oldNewTxt = lowerTxt.join("");
  // thi will reverse the array and then convert it into a single string
  const reversedTxt = lowerTxt.reverse().join("");

  if (oldNewTxt === reversedTxt) {
    result.innerText = `${text} is a palindrome`;
  } else {
    result.innerText = `${text} is not a palindrome`;
  }
}

function checkInput() {
  if (text === "") {
    alert("Please input a value");
    return;
  } else {
    if (checkPalindrome(text)) {
      result.innerText = `${text} is a palindrome`;
    } else {
      result.innerText = `${text} is not a palindrome`;
    }
  }
}

btn.addEventListener("click", checkInput);
