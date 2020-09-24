
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//variables
var char = ["~", "!", "@", "#", "$", "%", "&", "-", "_", "=", "+"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperLet = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var lowerLet = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

// declaration
var confirmLength;
var confirmChar;
var confirmNum;
var confirmUpperLet;
var confirmLowerLet;

function generatePassword() { 
  // input variables
  confirmChar = confirm ("Do you want special characters in your password?");
  confirmNum = confirm ("Do you want numbers in your password?");
  confirmUpperLet = confirm ("Do you want upper case letters in your password?");
  confirmLowerLet = confirm ("Do you want lower case letters in your password");

  while(confirmChar === false && confirmNum === false && confirmUpperLet === false && confirmLowerLet === false) {
    alert("You must choose at least one");
      confirmChar = confirm ("Do you want special characters in your password?");
      confirmNum = confirm ("Do you want numbers in your password?");
      confirmUpperLet = confirm ("Do you want upper case letters in your password?");
      confirmLowerLet = confirm ("Do you want lower case letters in your password");
  }

  //variable length
  confirmLength = parseInt(prompt("How many characters would you like? Between 8 and 128"));

  //ensure password meets length requirements
    while(confirmLength <=7 || confirmLength>=129) {
      alert("Password must be between 8-128 characters");
      var confirmLength = parseInt(prompt("How many characters would you like? Between 8 and 128"));
    }
    
    console.log(confirmLength)

      var passwordVar = []

      //4 variables chosen
      if (confirmChar && confirmNum && confirmUpperLet && confirmLowerLet) {
        passwordVar = char.concat(number, upperLet, lowerLet);
      }

      //3 variables chosen

      else if (confirmChar && confirmNum && confirmUpperLet) {
        passwordVar = char.concat(number, upperLet);
      }
      else if (confirmChar && confirmNum && confirmLowerLet) {
        passwordVar = char.concat(number, lowerLet);
      }
      else if (confirmChar && confirmUpperLet && confirmLowerLet) {
        passwordVar = char.concat(upperLet, lowerLet);
      }
      else if (confirmNum && confirmUpperLet && confirmLowerLet) {
        passwordVar = number.concat(upperLet, lowerLet);
      }

      //2 variables chosen
          //char lead
      else if (confirmChar && confirmNum) {
        passwordVar = char.concat(number);
      }      
      else if (confirmChar && confirmLowerLet) {
        passwordVar = char.concat(lowerLet);
      }
      else if (confirmChar && confirmUpperLet) {
        passwordVar = char.concat(upperLet);

          //number lead
      }
      else if (confirmNum && confirmUpperLet) {
        passwordVar = number.concat(upperLet);
      }    
      else if (confirmNum && confirmLowerLet) {
        passwordVar = number.concat(lowerLet);
      }    
          //upper lead
      else if (confirmUpperLet && confirmLowerLet) {
        passwordVar = upperLet.concat(lowerLet);
      }    

      //1 variable chosen
      else if (confirmChar) {
        passwordVar = char;
      }    
      else if (confirmNum) {
        passwordVar = number;
      } 
      else if (confirmUpperLet) {
        passwordVar = upperLet;
      }
      else if (confirmLowerLet) {
        passwordVar = lowerLet;
      }      

        console.log (passwordVar)

      var password = [];

    for (var i = 0; i < confirmLength; i++) {
        var final = passwordVar[Math.floor(Math.random() * passwordVar.length)];
        password.push(final);
        
        console.log(password);
    }

    return password.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
