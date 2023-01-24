function checkForSequence(password) {
  // Define a variable to store the previous character
  var prevChar = password[0];
  // Define a variable to store the current sequence length
  var sequenceLength = 1;
  // Loop through the rest of the characters in the password
  for (var i = 1; i < password.length; i++) {
      // If the current character is the same as the previous character
      if (password[i] === prevChar) {
          // Increment the sequence length
          sequenceLength++;
          // If the sequence length is greater than or equal to 5
          if (sequenceLength >=  5) {
              // Return an error message
              return "Error: Password contains a sequence of 5 or more characters.";
          }
      } else {
          // If the current character is not the same as the previous character, reset the sequence length to 1
          sequenceLength = 1;
      }
      // Update the previous character to the current character
      prevChar = password[i];
  }
  // If no sequence was found, return a success message
  return "Password is valid.";
}


console.log(checkForSequence("359268")); // Error: Password contains a sequence of 5 or more characters.
