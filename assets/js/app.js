
var letterSet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numSet = ['1','2','3','5','6','7','8','9','0'];
var specSet = ['!','@','$','&','~'];
var timesClicked = 0;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function genPass() {
  var newPass = [];
  var userPromptLength = document.getElementById('input').value;
  var wantSpec = confirm('Do you want Special Characters?'); //turn into tick box
  var wantNum = confirm('Do you want Numbers?'); //turn into tick box

  for (i = 0; i < userPromptLength; i++) { 
    if (wantSpec === true && i === 0) {
      // inject symbol
      var randSpec = Math.floor(Math.random() * specSet.length); //random character from speSet Array
      newPass.push(specSet[randSpec]);
    } else if (wantNum === true && i === 1) {
      var randNum = Math.floor(Math.random() * numSet.length); //random number from numSet Array
      newPass.push(numSet[randNum]);
    } else {
      // inject lowercase letter
      var randLetter = Math.floor(Math.random() * letterSet.length);
      newPass.push(letterSet[randLetter]);
    };
  }
  newPassShuffle = shuffle(newPass);
  newPassBox.textContent = newPass.join('');
}



//copy text inside passphrase box to clipboard

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

