const btn = document.getElementById("check-btn");
const clr = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

function checkNumber(number) {
  // regular expression
  // ^(1\s?)? -> optional grouped checks that 1st character is a number along with another optional space
  // (\d{3}|\(\d{3}\)) -> group that will check whether 3 digits are there in group or whether 3 digits are there in the group inside '()'
  // [\-\s]? -> optional group checks whether there is gap or dash '-' sign
  // \d{3} -> check whether 3 digits are there
  // \d{4}$ -> check whether 4 digits are there and the expression ends with a number
  const regExpr = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/g;
  const validNumber = number.match(regExpr);
  if (validNumber) {
    return true;
  } else {
    return false;
  }
}

function checkInput() {
  const input = document.getElementById("user-input").value;
  if (input === "") {
    alert("Please provide a phone number.");
  }

  if (input) {
    if (checkNumber(input)) {
      result.innerText = `Valid US number: ${input}`;
    } else {
      result.innerText = `Invalid US number: ${input}`;
    }
  }
}

function hideResult() {
  console.log("hide result");
}

btn.addEventListener("click", checkInput);
clr.addEventListener("click", hideResult);
