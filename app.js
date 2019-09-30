// Generates a random string of 14 letters, numbers, and special characters that java allows to be in a string minus ones that I felt were unnecessary
function charGen(length) {
  var char = "";
  var charSet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!$%&*+,-./:;<=>?@^_`|~";
  var charSetLength = charSet.length;
  for (var i = 0; i < length; i++) {
    char += charSet.charAt(Math.floor(Math.random() * charSetLength));
  }
  return char;
}
//assign the function output to a global variable
var newPass = charGen(14);
//what happens when user hits the button
function showPass() {
  newPassBox.innerHTML = newPass;
}
//refresh page, clearing box with password
function refresh() {
  window.location.reload();
}
