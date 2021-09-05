
var generateBtn = document.querySelector("#generate");
var passwordLength = '';
var validChars = '';
var password = '';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const special = '!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~';

function writePassword() { 
  
  validChars =''; //resets validations per button click
  password =''; //this will allow us to do multiple generations per page load. 

  function getPasswordLength() {
    passwordLength = Number(window.prompt("Please select password length. (Must be inbetween 8 - 124 characters long)"));
    if (passwordLength < 8 || passwordLength > 124 || passwordLength === null) {
      getPasswordLength();
    }
  } 
  
  getPasswordLength();

  function validateLowercase() {
    var confirmLowercase = window.confirm("would you like to use lowercase characters?");
    if (confirmLowercase === true) {
      validChars += lowercase
    }
  } 
  
  validateLowercase(); 

  function validateUppercase() {
    var confirmUppercase = window.confirm("would you like to use uppercase characters?");
    if (confirmUppercase === true) {
      validChars += uppercase
    }
  }

  validateUppercase();

  function validateNumbers() {
    var confirmNumbers = window.confirm("would you like to use numbers");
    if (confirmNumbers === true) {
      validChars += numbers
    }
  }

  validateNumbers();

  function validateSpecialChars() {
    var confirmSpecialChars = window.confirm("would you like to use specials characters?");
    if (confirmSpecialChars === true) {
      validChars += special
    }
  } 

  validateSpecialChars();

  if (validChars.length <1) { //fixes issue where user can not select any characters
    window.alert('please select atleast one character set')
    writePassword();
  } else

  function generatePassword() {
    var possible = validChars;
  
    for (var i = 0; i < passwordLength; i++)
      password += possible.charAt(Math.floor(Math.random() * possible.length));
    return password;
  }

  generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
