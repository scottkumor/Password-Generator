//shuffles a passed array 
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there elements to shuffle, do this
  while (0 !== currentIndex) {
    // Pick an element in the index
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // swaps element it with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

//copy text inside passphrase box to clipboard function
function copyPass() {
  var str = document.getElementById("newPassBox").innerHTML;
  function listener(e) {
    e.clipboardData.setData("text/html", str);
    e.clipboardData.setData("text/plain", str);
    e.preventDefault();
  }
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
}
//password generation function
function genPass() {
  var newPass = [];
  var userPromptLength = document.getElementById('input').value;
  var letterSetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var letterSetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numSet = ['1', '2', '3', '5', '6', '7', '8', '9', '0'];
  var specSet = ['!', '@', '$', '&', '~'];

  if (userPromptLength < 8 || userPromptLength > 128) {
    newPassBox.textContent = '_CAUGHT ERROR - CHOOSE A VALUE BETWEEN |8| AND |128|>'; //error message displays in newPassBox
  } else {
    for (i = 0; i < userPromptLength; i++) {
      if (document.getElementById('chkSpec').checked === true && i === 0) { //checks value of chkSpec checkbox
        // inject symbol
        var randSpec = Math.floor(Math.random() * specSet.length); //random character from speSet Array
        newPass.push(specSet[randSpec]);
      } if (document.getElementById('chkNum').checked === true && i === 1) { //checks value of chkNum checkbox
        //inject special character
        var randNum = Math.floor(Math.random() * numSet.length); //random number from numSet Array
        newPass.push(numSet[randNum]);
      } if (document.getElementById('chkUpper').checked === true && i === 2) {
        // inject uppercase letter
        var randUpper = Math.floor(Math.random() * letterSetUpper.length); //random letter from letterSetUpper Array
        newPass.push(letterSetUpper[randUpper]);
      } else {
        var randLower = Math.floor(Math.random() * letterSetLower.length); //random letters from letterSetLower Array
        newPass.push(letterSetLower[randLower]);
      }
    };
    newPassShuffle = shuffle(newPass); //shuffle passed array
    newPassBox.textContent = newPass.join(''); //turns array of single vaslues into one string smushed together
  }
};