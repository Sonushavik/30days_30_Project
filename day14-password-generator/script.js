const form = document.getElementById("passwordForm");
const range = document.getElementById("range");
const specialChar = document.getElementById("specialChar");
const numberCheck = document.getElementById("number");
const passwordLength = document.getElementById("passwordLength");
const passwordText = document.getElementById("passwordText");
const copyBtn = document.getElementById("copyBtn");

form.addEventListener("submit", (e) => generatePassword(e));
range.addEventListener("input", handleRange);
copyBtn.addEventListener("click", copyPassword);

const alphabetsLowerCase = "abcdefghijklmnopqruvwxyz";
const alphabetsUpperCase = "ABCDEFGHIJKLMNOPQRUVWXYZ";
const number = "01234567989";
const specialChars = "!@#$%^&*()_+=";

let password = "";

function copyPassword() {
  alert("Password Copied!");
  navigator.clipboard.writeText(password);
  copyBtn.innerText = "copied";
  setTimeout(() => {
    copyBtn.innerText = "copy";
  }, 1000);
}

function handleRange() {
  passwordLength.innerText = range.value;
  // console.log(range.value)
}

function randomPassword(length) {
  passwordString = alphabetsLowerCase + alphabetsUpperCase;

  if (specialChar.checked) {
    passwordString += specialChars;
  }

  if (numberCheck.checked) {
    passwordString += number;
  }

  for (i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * passwordString.length);
    password = password + passwordString[randomIndex];
  }

  // console.log(password)
}

function generatePassword(e) {
  // console.log(range.value);
  e.preventDefault();
  password = "";
  randomPassword(range.value);
  passwordText.value = password;
  console.log(password);
}
