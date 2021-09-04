// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = '';
var validChars = '';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const special = '!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~';
// Write password to the #password input
function writePassword() { 
  
  function getPasswordLength() {
    passwordLength = Number(window.prompt("Please select password length. (Must be inbetween 8 - 124 characters long)"));
    if (passwordLength < 8 || passwordLength > 124 || passwordLength === null) {
      getPasswordLength();
    }
  } 

  function validateLowercase() {
    var confirmLowercase = window.confirm("would you like to use lowercase characters?");
    if (confirmLowercase === true) {
      validChars += lowercase
    }
  }

  function validateUppercase() {
    var confirmUppercase = window.confirm("would you like to use uppercase characters?");
    if (confirmUppercase === true) {
      validChars += uppercase
    }
  }

  function validateNumbers() {
    var confirmNumbers = window.confirm("would you like to use numbers");
    if (confirmNumbers === true) {
      validChars += numbers
    }
  }

  function validateSpecialChars() {
    var confirmSpecialChars = window.confirm("would you like to use specials characters?");
    if (confirmSpecialChars === true) {
      validChars += special
    }
  } 

  if (validChars === null) window.alert("you must select atleast one character set"); {
    getPasswordLength();
  }

  function generatePassword() {
    var possible = validChars;
  
    for (var i = 0; i < passwordLength; i++)
      password += possible.charAt(Math.floor(Math.random() * possible.length));
    return password;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
