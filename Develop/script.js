// Get reference to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Function to generate password
function generatePassword() {
  // Prompt for password criteria
  var length = prompt("Enter the password length (between 8 and 128 characters):");
  
  // Validate password length
  if (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return;
  }
  
  // Prompt for character types
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");
  
  // Validate at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type.");
    return;
  }
  
  // Define character pools based on selected criteria
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
  
  // Generate password
  var generatedPassword = "";
  
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterPool.length);
    generatedPassword += characterPool.charAt(randomIndex);
  }
  
  // Display password
  var passwordText = document.querySelector("#password");
  passwordText.value = generatedPassword;
}
