// Assignment Code
var randomUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var randomLower = 'abcdefghijklmnopqrstuvwxyz';
var randomSymbol = '!@#$%^&*()_-=+{}:;?/><,.';
var randomNumber = '0123456789';
 
 
//input for number between 8 and 128
function getLength() {
  //prompt for input
  var userLength = prompt('Enter a number no less than 8 characters and no more than 128 characters');
 
  //parse the string and turn it to an integer
  var parseString= parseInt(userLength);
 
  //if number is lower than 8 or greater than 128 return to getLength function
  if (!parseString || parseString< 8 || parseString > 128){
    return getLength();
 
    //else return the parseString and store it in a variable
  } else {
    return parseString;
  }
}


//store number in a variable
var characterLength = getLength();
 
//Store yes or no lowercase in a variable
var confirmLower = confirm('Would you like lowercase letters in your password?');
 
//Store yes or no uppercase in a variable
var confirmUpper = confirm('Would you like uppercase letters in your password?');
   
//Store yes or no number in a variable
var confirmNumber = confirm('Would you like numbers in your password?');
 
//store yes or no symbol in a variable
var confirmSymbol = confirm('Would you like symbols in your password?');

//Function which generates the character types for the random password
 

function generateCharactersType() {
  var charactersType = "";
  if (confirmLower === true){
    charactersType = charactersType + randomLower;
  }if (confirmUpper === true){
    charactersType = charactersType + randomUpper;
  }if (confirmNumber === true){
    charactersType = charactersType + randomNumber;
  }if (confirmSymbol === true) {
    charactersType = charactersType + randomSymbol;
  }if (confirmLower === false && confirmUpper === false && confirmNumber === false && confirmSymbol === false){
    return alert('Choose at least one character type') + document.location.reload();
  }
  return charactersType;
}


//Store user preference into a variable
var charactersType = generateCharactersType();

//Generate the password for what user entered
function generatePassword(characterLength, characters) {
  var pwd = "";
  var passwordText = document.querySelector("#password");
 
  for (var i = 0; i < characterLength; i++) {
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  console.log(pwd);
  return pwd;
}
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword(characterLength, charactersType);
  var passwordText = document.querySelector("#password");
 
  passwordText.textContent = password;
 
}
 var generateBtn = document.getElementById('generate');

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword());


//reload when generate password button is clicked
var generateBtnClick = document.getElementById('generate');

generateBtnClick.addEventListener('click', function(){
  if (true){
    return document.location.reload();
  }
})