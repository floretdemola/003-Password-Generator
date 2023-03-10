// Assignment Code
var generateBtn = document.querySelector("#generate");

// All the characters needed to be selected

var LowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?", ":"];

// var for confirming the characters

var passwordLength = ''
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var confirmFinal;

function generatePassword() {
  console.log("Let's generate a new password!")

  //Select length
  var passwordLength = window.prompt('How many characters would you like your password to contain? (Please select an option between 8-128.)');

   if (passwordLength < 8 || passwordLength > 128){
    alert("Password must be between 8-128 characters, please try again.");
    var passwordLength = window.prompt('How many characters would you like your password to contain?');
   };

   alert('You have selected ' + passwordLength + ' characters.');

  //Select characters

  var confirmLower = confirm('Would you like lower case characters in your password?');
  var confirmUpper = confirm('Would you like upper case characters in your password?');
  var confirmNumber = confirm('Would you like number characters in your password?');
  var confirmSpecial = confirm('Would you like special characters in your password?');

  //Select characters again if no characters were selected

    if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    alert("You must select at least one character type!");
    confirmLower = confirm('Would you like lower case characters in your password?');
    confirmUpper = confirm('Would you like upper case characters in your password?');
    confirmNumber = confirm('Would you like number characters in your password?');
    confirmSpecial = confirm('Would you like special characters in your password?'); 
    }

  var passwordCharacters = []

  // concat combines all the choices

  if (confirmLower == true){
    passwordCharacters = passwordCharacters.concat(LowerChar)
  }
  if(confirmUpper == true){
    passwordCharacters = passwordCharacters.concat(UpperChar)
  }
  if(confirmNumber == true){
    passwordCharacters = passwordCharacters.concat(numberChar)
  }
  if(confirmSpecial == true){
    passwordCharacters = passwordCharacters.concat(specialChar)
  }

    console.log(passwordCharacters)

  // for loop to generate the password

    var NewPassword = ""
    for (var i = 0; i < passwordLength; i++) {
      NewPassword = NewPassword + passwordCharacters [Math.floor(Math.random() * passwordCharacters.length)];
    }
    console.log(NewPassword);


  return NewPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//tried to make a confirmation prompt but it didn't work
//var confirmFinal = confirm('You have selected to create a password containing ' + passwordLength + ' characters, including ' + confirmLower === true('lower case characters, ') + confirmUpper === true('upper case characters, ') + confirmNumber === true(' number characters.') + confirmSpecial === true('special characters, ') + ' Is this correct?'); 
//if (!confirmFinal) {
//generatePassword();
//};
