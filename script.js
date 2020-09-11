// Assignment Code
var generateBtn = document.querySelector("#generate");

var combinedArray = [];
var passwordArray = [];

var confirmUpperCase;
var confirmLowerCase;
var confirmNumbers;
var confirmSpecialCharacters;

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharcters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];



function generatePassword() {

  var numberOfCharacters = prompt("Enter Number of Characters");

  if (numberOfCharacters < 8) {
    alert("Must be at least 8");
    return "Try again"
  }
  else if (numberOfCharacters > 128) {
    alert("Must be less than 129");
    return "Try again"
  }

else {

  confirmUpperCase = confirm("Would you like upper case?");

  if (confirmUpperCase) {
    for (var index = 0; index < upperCase.length; index++) {
      combinedArray.push(upperCase[index]);
    }
  }


  confirmLowerCase = confirm("Would you like lower case?");

  if (confirmLowerCase) {
    for (var index = 0; index < lowerCase.length; index++) {
      combinedArray.push(lowerCase[index]);
    }
  }

  confirmNumbers = confirm("Would you like numbers?")

  if (confirmNumbers) {
    for (var index = 0; index < numbers.length; index++) {
      combinedArray.push(numbers[index]);
    }
  }

  confirmSpecialCharacters = confirm("Would you like special characters?")

  if (confirmSpecialCharacters) {
    for (var index = 0; index < specialCharcters.length; index++) {
      combinedArray.push(specialCharcters[index]);
    }
  }
  for (var index = 0; index < combinedArray.length; index++) {
    combinedArray.push(combinedArray[index]);
  }
}

for (var index = 0; index < numberOfCharacters; index++) {
  passwordArray.push(combinedArray[ ( Math.floor(Math.random() * combinedArray.length))]);
  }

userPassword = passwordArray.join("");

return userPassword;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
