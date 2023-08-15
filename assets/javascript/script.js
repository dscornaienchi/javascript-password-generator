var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  var length = prompt("Enter the preferred number of characters for the password length (Must be between 8 and 128 characters):");
  
  if (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return;
  }

  alert("The upcoming prompts will ask whether you wish to include lowercase, uppercase, numeric, and/or special characters. Please note that you must select at least one of the four options to continue. If you would like to omit a character type, please choose 'cancel'")
  
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");
  
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type.");
    return;
  }
  
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";
  
  var characterPool = "";
  
  if (includeLowercase) {
    characterPool += lowercaseChars;
  }
  
  if (includeUppercase) {
    characterPool += uppercaseChars;
  }
  
  if (includeNumeric) {
    characterPool += numericChars;
  }
  
  if (includeSpecial) {
    characterPool += specialChars;
  }
  
  var generatedPassword = "";
  
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterPool.length);
    generatedPassword += characterPool.charAt(randomIndex);
  }
  
  var passwordText = document.querySelector("#password");
  passwordText.value = generatedPassword;
}
