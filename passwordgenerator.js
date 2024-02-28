document.addEventListener("DOMContentLoaded", function () {
  const rangevalue = document.getElementById("character-length");
  const lengthdisplay = document.getElementById("length-display");

  function displaylength() {
    const value = rangevalue.value;
    if (value >= 0) {
      lengthdisplay.innerHTML = value;
    }
  }
  rangevalue.addEventListener("input", displaylength);

  displaylength();
});

function copypass() {
  const passField = document.getElementById("pass");
  const copybtn = document.getElementById("copybtn");
  const textToCopy = passField.textContent;

  // this is to Create a range and select the text
  const range = document.createRange();
  range.selectNode(passField);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  //  this is to Copy the selected text
  document.execCommand("copy");

  // Clear the selection
  window.getSelection().removeAllRanges();

  
  alert("Copied the text: " + textToCopy);
}

const uppercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const lowercaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  ";",
  ":",
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
];

// a function to get a random element from an array
function getrandomletter(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generatepass() {
  const symbolscheckbox = document.getElementById("symbols");
  const uppercasecheckbox = document.getElementById("uppercase");
  const lowercasecheckbox = document.getElementById("lowercase");
  const numberscheckbox = document.getElementById("numbers");
  const passdisplay = document.getElementById("pass");
  const rangevalue = document.getElementById("character-length").value;
  const strength = document.getElementById("password-strength-container");
  const weak = document.getElementById("weak");
  const strong = document.getElementById("strong");
  const moderate = document.getElementById("moderate");
  const verystrong = document.getElementById("verystrong");

  let characterSet = [];

  if (symbolscheckbox.checked) {
    characterSet = characterSet.concat(symbols);
  }
  if (uppercasecheckbox.checked) {
    characterSet = characterSet.concat(uppercaseLetters);
  }
  if (lowercasecheckbox.checked) {
    characterSet = characterSet.concat(lowercaseLetters);
  }
  if (numberscheckbox.checked) {
    characterSet = characterSet.concat(numbers);
  }

  const pass = [];

  for (let i = 0; i < rangevalue; i++) {
    const randompass = getrandomletter(characterSet);
    pass.push(randompass);
  }

  passdisplay.textContent = pass.join("");

  // this is to Update strength bar based on password length
  if (rangevalue < 5) {
    setStrength(50, "block", "none", "none", "none");
  } else if (rangevalue < 8) {
    setStrength(100, "block", "none", "block", "none");
  } else if (rangevalue < 12) {
    setStrength(150, "block", "block", "block", "none");
  } else {
    setStrength(100, "block", "block", "block", "block");
  }
}
//   a function to set the strenght bar of the passsword
function setStrength(
  width,
  weakDisplay,
  strongDisplay,
  moderateDisplay,
  veryStrongDisplay
) {
  const strength = document.getElementById("password-strength-container");
  const weak = document.getElementById("weak");
  const strong = document.getElementById("strong");
  const moderate = document.getElementById("moderate");
  const verystrong = document.getElementById("verystrong");

  strength.style.display = "block";
  strength.style.width = width + "px";
  weak.style.display = weakDisplay;
  strong.style.display = strongDisplay;
  moderate.style.display = moderateDisplay;
  verystrong.style.display = veryStrongDisplay;
}
