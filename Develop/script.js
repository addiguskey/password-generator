// Assignment code here

// charCount: 8-128
// choose charCount
// THEN include or not lowecase, uppercase, numeric and.or special charaters
//when I answer each prompt, then input value is calidated and one character type should be selected

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChars = "~!@#$%^&*()_+";

//.split all the variables INTO AN ARRAY ==> beneficial tool for manipulating strings.
//splits the string into an UL
var lowerCaseArray = lowerCase.split("");
var upperCaseArray = upperCase.split("");
var numbersArray = numbers.split("");
var specialCharsArray = specialChars.split("");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var generatePassword = "";
  var passwordText = document.querySelector("#password");
  var allChars = [""];
  var charCount = prompt("Choose the number of characters between 8-128");
  if (charCount < 8 || charCount > 128) {
    alert(
      "the pw character count must be over 8 and under 128. \n Please re-start"
    );
  } else {
    if (confirm("Do you want it to contain uppercase letters?")) {
      Array.prototype.push.apply(allChars, upperCaseArray);
    }
    if (confirm("Do you want it to contain lowercase letters?")) {
      Array.prototype.push.apply(allChars, lowerCaseArray);
    }
    if (confirm("Do you want it to contain numbers?")) {
      Array.prototype.push.apply(allChars, numbersArray);
    }
    if (confirm("Do you want it to contain special charaters?")) {
      Array.prototype.push.apply(allChars, specialCharsArray);
    }
    if (allChars.length === 0) {
      alert(
        "you must select at least one type of charater to generate a strong PW"
      );
    } else {
      for (let i = 0; i < charCount; i++) {
        var random = Math.floor(Math.random() * allChars.length);
        generatePassword += allChars[random];
      }
    }
  }
  passwordText.innerHTML = generatePassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
